/*
  Warnings:

  - Added the required column `Name` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `event` ADD COLUMN `Name` VARCHAR(191) NOT NULL,
    ADD COLUMN `Status` VARCHAR(191) NOT NULL DEFAULT 'pending';
