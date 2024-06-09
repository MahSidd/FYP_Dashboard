// // pages/api/delete-record.js
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   if (req.method === 'DELETE') {
//     const { qrCodeValue } = req.body;

//     // Convert the qrCodeValue to an integer
//     const guestNo = parseInt(qrCodeValue, 10);
//     console.log(guestNo)

//     if (isNaN(guestNo)) {
//       return res.status(400).json({ error: 'Invalid Guest_No value' });
//     }

//     try {
//       const deletedRecord = await prisma.Visitor.delete({
//         where: { Guest_No: guestNo },
//       });

//       res.status(200).json({ message: 'Record deleted successfully', deletedRecord });
//     } catch (error) {
//       console.error('Error deleting record:', error);
//       if (error.code === 'P2025') {
//         // Prisma error code for record not found
//         res.status(404).json({ error: 'Record not found' });
//       } else {
//         res.status(500).json({ error: 'An error occurred while deleting the record' });
//       }
//     }
//   } else {
//     res.setHeader('Allow', ['DELETE']);
//     res.status(405).end(`Method ${req.method} not allowed`);
//   }
// }
const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(request,{ qrCodeValue }){
  try{
    
    const  Guest_Noqr  = parseInt (qrCodeValue );
    console.log(Guest_Noqr)
    const deleteVisitor = await prisma.Visitor.delete({
      where:{ Guest_No: Guest_Noqr}
     
    });
    return NextResponse.json(deleteVisitor)
  }catch(error){
    console.log("error deleting ", error)
    return NextResponse.error("internal server error ", 500)
  }
}