// prismaConnectionCheck.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkConnection() {
    try {
        await prisma.$connect();
        console.log('Prisma connected to the MySQL database!');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Exit the process with a non-zero code indicating an error
    } finally {
        await prisma.$disconnect();
    }
}

checkConnection();


