// // route.js

// const next = require('next')

// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';


// const prisma = new PrismaClient();


// export async function createstaff(request){
//   try{
//     const data= await request.json();
//     console.log(data);
    
//     const newStaff = await prisma.staff.create({data});
//     return NextResponse.json(newStaff);
//   } 
//   catch(error){
//     console.error("error creating",error)
//     return NextResponse.error("internal server error ", 500)
//   }
// }


// export { createstaff as POST}
// pages/api/staffs/index.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // READ ALL DATA
  if (req.method === 'GET') {
    const staff = await prisma.staff.findMany();
    res.json(staff);
  } 
  // CREATE DATA
  else if (req.method === 'POST') {
    const { Staff_name, Staff_CNIC, Staff_Phone, Staff_Designation, Staff_Address, Joining_date  } = req.body;
    
    const newstaff = await prisma.staff.create({
      data: {
        Staff_name, Staff_CNIC, Staff_Phone, Staff_Designation, Staff_Address, Joining_date 
      },
    });

    res.json(newstaff);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}










