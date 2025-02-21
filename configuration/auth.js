import NextAuth from "next-auth"
 import Google from "next-auth/providers/google"
 import Facebook from "next-auth/providers/facebook"
 import Credentials from "next-auth/providers/credentials"
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId:process.env.AUTH_GOOGLE_ID,
    clientSecret:process.env.AUTH_GOOGLE_SECRET
  }),
Credentials({
  
  credentials: {
    Email: {label:'Email',placeholder:'example@gmail.com',type:'email'},
    Password: {label: "Password", type: "password" },
  },
  authorize: async (credentials) => {
    let user = null

    const pwHash = saltAndHashPassword(credentials.password)
    user = await getUserFromDb(credentials.email, pwHash)

    if (!user) {
      throw new Error("Invalid credentials.")
    }
    return user
  },
})],
})