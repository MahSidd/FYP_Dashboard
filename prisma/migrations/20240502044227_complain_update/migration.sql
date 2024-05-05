/*
  Warnings:

  - You are about to drop the column `Desccription` on the `complain` table. All the data in the column will be lost.
  - Added the required column `Description` to the `Complain` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `complain` DROP COLUMN `Desccription`,
    ADD COLUMN `Description` VARCHAR(191) NOT NULL,
    ADD COLUMN `status` VARCHAR(191) NOT NULL DEFAULT 'pending';
