// // route.js

const next = require('next')

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();


export async function createstaff(request){
  try{
    const data= await request.json();
    console.log(data);
    
    const newStaff = await prisma.staff.create({data});
    return NextResponse.json(newStaff);
  } 
  catch(error){
    console.error("error creating",error)
    return NextResponse.error("internal server error ", 500)
  }
}


export { createstaff as POST}










