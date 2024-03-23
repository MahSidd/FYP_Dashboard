// // route.js

const next = require('next')


import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function getAllStaff(){

  try{
    const staffList =await prisma.staff.findMany();
    return NextResponse.json(staffList)
  }catch (error){
    console.error("error fatching",error)
    return NextResponse.error("internal server error ", 500)
  }
}
export async function createstaff(request){
  try{
    const data= await request.json();
    console.log(data);
    const {name, CNIC, Phone, Designation, Address, Joining_date}=data;
    const newStaff = await prisma.staff.create({
      data: {
        name, CNIC, Phone, Designation, Address, Joining_date }
    });
    return NextResponse.json(newStaff);
  } 
  catch(error){
    console.error("error fatching",error)
    return NextResponse.error("internal server error ", 500)
  }
}



export {getAllStaff as GET, createstaff as POST}








// // Create a new staff member
// export const createStaff = async (req, res) => {
//   const { name, CNIC, Phone, Designation, Address, Joining_date } = req.body;
//   try {
//     const newStaff = await prisma.staff.create({
//       data: { name, CNIC, Phone, Designation, Address, Joining_date },
//     });
//     res.status(201).json(newStaff);
//   } catch (error) {
//     console.error('Error creating staff:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Get all staff members

// export const getAllStaff = async (NextApiRequest, NextApiResponse) => {
//   try {
//     const staffList = await prisma.staff.findMany();
//     res.status(200).json(staffList);
//   } catch (error) {
//     console.error('Error fetching staff:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Update a staff member
// export const updateStaff = async (req, res) => {
//   const { id } = req.params;
//   const { name, CNIC, Phone, Designation, Address, Joining_date } = req.body;
//   try {
//     const updatedStaff = await prisma.staff.update({
//       where: { id: parseInt(id) },
//       data: { name, CNIC, Phone, Designation, Address, Joining_date },
//     });
//     res.status(200).json(updatedStaff);
//   } catch (error) {
//     console.error('Error updating staff:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // Delete a staff member
// export const deleteStaff = async (req, res) => {
//   const { id } = req.params;
//   try {
//     await prisma.staff.delete({
//       where: { id: parseInt(id) },
//     });
//     res.status(200).json({ message: 'Staff member deleted' });
//   } catch (error) {
//     console.error('Error deleting staff:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// export { getAllStaff as GET, createStaff as POST, deleteStaff as DELETE , updateStaff as PUT };






