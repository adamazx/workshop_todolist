/*
  Warnings:

  - You are about to drop the column `email` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `Todo` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Todo` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Todo" DROP COLUMN "email",
DROP COLUMN "password",
DROP COLUMN "username";

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
