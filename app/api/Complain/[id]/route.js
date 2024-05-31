const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(request,{ params }){
    
    try{
      const  action = await request.json();
      const status = action ==='approve' ? 'approved':'rejected';
      const  Complain_No  = parseInt (params.id);
      const updatedComplain = await prisma.complain.update({
        relationLoadStrategy: 'join', // or 'query'
        include: {
        User: true,
      },
        where:{ Complain_No },data:{ status : status},
      });
      return NextResponse.json(updatedComplain)
    }catch(error){
      console.log("error updating ", error)
      return NextResponse.error("internal server error ", 500)
    }
  }

  export async function GET(request, { params }) {
    try {
      const { id } = params; 
      const Complain_No = parseInt(id); 
  
      const getComplainById = await prisma.complain.findFirst({
        relationLoadStrategy: 'join', // or 'query'
      include: {
        User: true,
      },
        where: {
          Complain_No: Complain_No, // Use the correct field name from your database table
        },
      });
  
      console.log(getComplainById); // Check if data is fetched correctly
  
      return NextResponse.json(getComplainById);
    } catch (error) {
      console.log("Error fetching staff by id:", error);
      return NextResponse.error("Internal server error", 500);
    }
  }