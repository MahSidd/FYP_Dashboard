
const next = require('next')

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function POST(request){
    try{
      const data= await request.json();
      console.log(data);
      
      const newuser = await prisma.Visitor.create({data});
      return NextResponse.json(newuser);
    } 
    catch(error){
      console.error("error creating",error)
      return NextResponse.error("internal server error ", 500)
    }
  }

  export async function GET() {
    try {
     
  
      const Visitor = await prisma.Visitor.findMany({
      
        
      });
  
      console.log(Visitor); // Check if data is fetched correctly
  
      return NextResponse.json(Visitor);
    } catch (error) {
      console.log("Error fetching Visitor by id:", error);
      return NextResponse.error("Internal server error", 500);
    }
  }