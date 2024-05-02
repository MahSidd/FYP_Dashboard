
const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
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



// const next = require('next')


// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function getAllCOmplain(){

//   try{
//     const ComplainList =await prisma.Complain.findMany();
//     return NextResponse.json(ComplainList)
//   }catch (error){
//     console.error("error fatching",error)
//     return NextResponse.error("internal server error ", 500)
//   }
// }
// export {getAllCOmplain as GET};