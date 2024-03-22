-- CreateTable
CREATE TABLE `Staff` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `CNIC` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Designation` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Joining_date` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Staff_CNIC_key`(`CNIC`),
    UNIQUE INDEX `Staff_Phone_key`(`Phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `complain` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `CNIC` VARCHAR(191) NOT NULL,
    `Phone` VARCHAR(191) NOT NULL,
    `Compalain_type` VARCHAR(191) NOT NULL,
    `Address` VARCHAR(191) NOT NULL,
    `Description` VARCHAR(191) NOT NULL,
    `Status` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `complain_CNIC_key`(`CNIC`),
    UNIQUE INDEX `complain_Phone_key`(`Phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
