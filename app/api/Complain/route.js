const next = require('next')
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const  getAllCOmplain = async (q,page)=>{
  const item_per_page=2;
 
  try{
    const count = await  prisma.complain.count({
      where: {
        Complain: {
          contains: q,
        }     
      },})
    const Complain = await  prisma.complain.findMany({
      relationLoadStrategy: 'join', // or 'query'
      include: {
      User: true,
    },
      where: {
        User: {
          OR: [
            { fname: { contains: q } }, // Search by first name
            { lname: { contains: q } },
            
          ],
        },
      },
      take: item_per_page,
      skip: (page - 1) * item_per_page,
    })
    return {count,Complain}
  }catch (error){
    console.log(error);
    throw new  Error("Failed to fetch user!");
  }
};


