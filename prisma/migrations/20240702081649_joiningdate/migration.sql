/*
  Warnings:

  - You are about to alter the column `Joining_date` on the `Staff` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `Staff` MODIFY `Joining_date` DATETIME(3) NOT NULL;
