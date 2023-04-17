/*
  Warnings:

  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_employerId_fkey";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Employer";

-- CreateTable
CREATE TABLE "employer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employee" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "employmentDate" TEXT NOT NULL,
    "employerId" INTEGER NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employer_email_key" ON "employer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "employee_email_key" ON "employee"("email");

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
