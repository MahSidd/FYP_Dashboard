/*
  Warnings:

  - Added the required column `Address` to the `Complain` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Phone` to the `Complain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Complain` ADD COLUMN `Address` VARCHAR(191) NOT NULL,
    ADD COLUMN `Phone` INTEGER NOT NULL;
