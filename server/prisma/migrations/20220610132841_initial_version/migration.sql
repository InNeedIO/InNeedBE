-- DropForeignKey
ALTER TABLE "HousingApplicant" DROP CONSTRAINT "HousingApplicant_authorId_fkey";

-- DropForeignKey
ALTER TABLE "HousingApplicant" DROP CONSTRAINT "HousingApplicant_housingOfferingId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplicant" DROP CONSTRAINT "JobApplicant_jobOfferingId_fkey";

-- DropForeignKey
ALTER TABLE "JobApplicant" DROP CONSTRAINT "JobApplicant_userId_fkey";

-- DropForeignKey
ALTER TABLE "JobOffering" DROP CONSTRAINT "JobOffering_authorId_fkey";

-- AddForeignKey
ALTER TABLE "JobOffering" ADD CONSTRAINT "JobOffering_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplicant" ADD CONSTRAINT "JobApplicant_jobOfferingId_fkey" FOREIGN KEY ("jobOfferingId") REFERENCES "JobOffering"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobApplicant" ADD CONSTRAINT "JobApplicant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingApplicant" ADD CONSTRAINT "HousingApplicant_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HousingApplicant" ADD CONSTRAINT "HousingApplicant_housingOfferingId_fkey" FOREIGN KEY ("housingOfferingId") REFERENCES "HousingOffering"("id") ON DELETE CASCADE ON UPDATE CASCADE;
