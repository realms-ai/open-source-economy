/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `ContactMessage` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ContactMessage_email_key" ON "public"."ContactMessage"("email");
