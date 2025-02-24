import NextAuth from "next-auth"
 import Google from "next-auth/providers/google"
 import Credentials from "next-auth/providers/credentials"
 import DBConnect from "@/lib/Database"
import UserModel from "@/app/Modal/User"
import bcrypt from 'bcryptjs'
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
    await DBConnect();
    const user = await UserModel.findOne({
      $or:[{
        email:credentials.identifier,
      },{
        name:credentials.identifier
      }]
    })
    if(!user){
      console.error('user not found')
    }
    if(!user.isVerified){
      console.error('verify user account before login')
    }
    const ispasswordcorrect=await bcrypt.compare(credentials.Password,user.password);
    if(ispasswordcorrect){
      return user
    }else{
      console.error('incorrect password')
    }
  },
})],
})