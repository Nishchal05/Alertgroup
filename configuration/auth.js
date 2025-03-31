import CredentialsProvider from "next-auth/providers/credentials";
import DBConnect from "@/lib/Database";
import UserModel from "@/app/models/User";
import bcrypt from 'bcryptjs';
import NextAuth from "next-auth"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: 'Email or Username', placeholder: 'example@gmail.com', type: 'text' },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      await DBConnect();
      
      const user = await UserModel.findOne({
        $or: [
          { email: credentials.email },
          { name: credentials.email }
        ]
      });
    
      if (!user) {
        throw new Error('User not found');
      }
    
      // Check if the user is verified
      if (!user.isVerified) {
        throw new Error('Please verify your account before logging in');
      }
    
      // Check the password
      const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
      if (!isPasswordCorrect) {
        throw new Error('Incorrect password');
      }
    
      // Return the user object
      return user;
    }
    
  }),
],
session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: "/auth/sign-in",
    signUp: "/auth/sign-up",
  },
 callbacks: {
  async jwt({ token, user, account, profile }) {
    if (account && account.provider === 'google') {
      await DBConnect();

      // Find the user by their email
      let existingUser = await UserModel.findOne({ email: profile.email });

      if (!existingUser) {
        // Create a new user without a password for Google OAuth
        const newUser = new UserModel({
          name: profile.name,
          email: profile.email,
          image: profile.picture || '',
          googleId: account.providerAccountId, // Only set googleId for OAuth users
          isVerified: true,
        });

        existingUser = await newUser.save();
      }

      token.id = existingUser._id;
      token.isVerified = true;
    }

    return token;
  },

  async session({ session, token }) {
    session.user.id = token.id;
    session.user.isVerified = token.isVerified;
    return session;
  },
},

})
