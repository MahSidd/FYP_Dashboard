
const next = require('next')

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
    try {
      const { id } = params; 
      const Guest_No = parseInt(id); 
  
      const getVisitorById = await prisma.Visitor.findFirst({
        where: {
          Guest_No: Guest_No, // Use the correct field name from your database table
        },
      });
  
      console.log(getVisitorById); // Check if data is fetched correctly
  
      return NextResponse.json(getVisitorById);
    } catch (error) {
      console.log("Error fetching staff by id:", error);
      return NextResponse.error("Internal server error", 500);
    }
  }