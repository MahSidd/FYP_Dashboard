// // route.js

const next = require('next')

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();
export const getAllStaff = async (q,page)=>{
  const item_per_page=2;
  try{
    const count = await prisma.staff.count({
      where: {
        Staff_name: {
          contains: q,
        }     
      },})
    const Staff = await prisma.staff.findMany({
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



export async function POST(request) {
  try {
    const data = await request.json();

    // Parse the joiningDate from the request data
    const { Joining_date, ...restData } = data;

    // Combine the selected date with the current time
    const date = new Date(Joining_date);
    const now = new Date();

    // Set the time part of the date to the current time
    date.setHours(now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());

    // Prepare the data to include the combined date and time
    const staffData = {
      ...restData,
      Joining_date: date,
    };

    const newStaff = await prisma.staff.create({
      data: staffData,
    });

    return NextResponse.json(newStaff);
  } catch (error) {
    console.error('Error creating staff:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}



// export async function GET() {
//   try {
   
//     const staff = await prisma.staff.findMany({  
//     });

//     console.log(staff); // Check if data is fetched correctly

//     return NextResponse.json(staff);
//   } catch (error) {
//     console.log("Error fetching staff by id:", error);
//     return NextResponse.error("Internal server error", 500);
//   }
// }






