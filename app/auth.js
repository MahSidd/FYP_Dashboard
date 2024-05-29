import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { PrismaClient } from '@prisma/client';
import bcrypt from "bcrypt"
const prisma = new PrismaClient();

const Login =async (credentials)=>{
    try{
        const user = await prisma.auth.findUnique({
            where:{
                email: credentials.email
            }
        })
        if(!user) throw new Error ("wrong credential")
        const Ispassword = await bcrypt.compare(credentials.password , user.password)
        if (!Ispassword) throw new Error ("wrong password")
        return user;


    }catch (err){

        console.log (err)
        throw new Error("failed to Logged in ")
    }

}
export const {signIn,signOut,auth} =NextAuth ({
    ...authConfig,
    providers:[
        CredentialsProvider({
            async authorize (credentials){
                try{
                 const user=   await Login(credentials)
                 return user;

                }catch(err){
                    return null;
                }
        
            },
        })
    ],
})