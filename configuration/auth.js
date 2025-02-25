import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import DBConnect from "@/lib/Database";
import UserModel from "@/app/Modal/User";
import bcrypt from 'bcryptjs';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: { label: 'Email or Username', placeholder: 'example@gmail.com', type: 'text' },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        await DBConnect();

        // Find user by email or name
        const user = await UserModel.findOne({
          $or: [
            { email: credentials.identifier },
            { name: credentials.identifier }
          ]
        });

        if (!user) {
          throw new Error('User not found');
        }

        if (!user.isVerified) {
          throw new Error('Please verify your account before logging in');
        }

        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) {
          throw new Error('Incorrect password');
        }

        // Return the user object if login is successful
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', 
    error: '/auth/error',  
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isVerified = user.isVerified;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.isVerified = token.isVerified;
      return session;
    },
  },
});
