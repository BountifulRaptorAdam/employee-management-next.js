/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_projectId_fkey";

-- DropTable
DROP TABLE "Project";

-- DropTable
DROP TABLE "Task";

-- DropTable
DROP TABLE "User";

-- DropEnum
DROP TYPE "TASK_STATUS";

-- CreateTable
CREATE TABLE "Employer" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Employer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL DEFAULT false,
    "employerId" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employer_email_key" ON "Employer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_employerId_fkey" FOREIGN KEY ("employerId") REFERENCES "Employer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
