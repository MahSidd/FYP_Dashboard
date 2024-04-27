const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function getAllCOmplain(){

  try{
    const ComplainList =await prisma.Complain.findMany();
    return NextResponse.json(ComplainList)
  }catch (error){
    console.error("error fatching",error)
    return NextResponse.error("internal server error ", 500)
  }
}
export {getAllCOmplain as GET};