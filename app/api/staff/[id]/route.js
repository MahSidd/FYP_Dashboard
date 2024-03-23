const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();



export async function updatestaff(request,{ params }){
    
    try{
      const data = await request.json();
      console.log(data);
      const {name, CNIC, Phone, Designation, Address, Joining_date}=data;
      const id = parseInt (params.id);
      const updatedStaff = await prisma.staff.update({
        where:{id},
        data:
         {name, CNIC, Phone, Designation, Address, Joining_date}
      });
      return NextResponse.json(updatedStaff)
    }catch(error){
      console.log("error updating ", error)
      return NextResponse.error("internal server error ", 500)
    }
  }
  export async function deletestaff(request,{ params }){
    try{
      
      const id = parseInt (params.id);
      const updatedStaff = await prisma.staff.delete({
        where:{id},
       
      });
      return NextResponse.json(updatedStaff)
    }catch(error){
      console.log("error deleting ", error)
      return NextResponse.error("internal server error ", 500)
    }
  }
  export {updatestaff as PUT, deletestaff as DELETE }