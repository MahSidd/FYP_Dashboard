const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(request,{ params }){
    
    try{
      const data = await request.json();
      console.log(data);
      const  Staff_id  = parseInt (params.id);
      const updatedStaff = await prisma.staff.update({
        where:{ Staff_id },data
      });
      return NextResponse.json(updatedStaff)
    }catch(error){
      console.log("error updating ", error)
      return NextResponse.error("internal server error ", 500)
    }
  }

  export async function GET(request, { params }) {
    try {
      const { id } = params; 
      const Staff_id = parseInt(id); 
  
      const getStaffById = await prisma.staff.findFirst({
        where: {
          Staff_id: Staff_id, // Use the correct field name from your database table
        },
      });
  
      console.log(getStaffById); // Check if data is fetched correctly
  
      return NextResponse.json(getStaffById);
    } catch (error) {
      console.log("Error fetching staff by id:", error);
      return NextResponse.error("Internal server error", 500);
    }
  }

  export async function DELETE(request,{ params }){
    try{
      
      const  Staff_id  = parseInt (params. id );
      const updatedStaff = await prisma.staff.delete({
        where:{ Staff_id}
       
      });
      return NextResponse.json(updatedStaff)
    }catch(error){
      console.log("error deleting ", error)
      return NextResponse.error("internal server error ", 500)
    }
  }
