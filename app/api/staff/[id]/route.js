const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();



export async function updatestaff(request,{ params }){
    
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
  export async function deletestaff(request,{ params }){
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
  export {updatestaff as PUT, deletestaff as DELETE }