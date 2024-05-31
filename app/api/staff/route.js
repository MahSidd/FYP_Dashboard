// // route.js

const next = require('next')

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();
export const getAllStaff = async (q,page)=>{
  const item_per_page=2;
 
  try{
    const count = await  prisma.Staff.count({
      where: {
        Staff_name: {
          contains: q,
        }     
      },})
    const Staff = await  prisma.Staff.findMany({
      where: {
        Staff_name: {
          contains: q,
        }     
      },
      take: item_per_page,
      skip: (page - 1) * item_per_page,
    })
    return {count,Staff}
  }catch (error){
    console.log(error);
    throw new  Error("Failed to fetch user!");
  }
};




export async function POST(request){
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


export async function GET() {
  try {
   

    const staff = await prisma.staff.findMany({
    
      
    });

    console.log(staff); // Check if data is fetched correctly

    return NextResponse.json(staff);
  } catch (error) {
    console.log("Error fetching staff by id:", error);
    return NextResponse.error("Internal server error", 500);
  }
}






