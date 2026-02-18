-- AlterTable
ALTER TABLE "ProductInfo" ADD COLUMN     "difficulty" TEXT,
ADD COLUMN     "downloadCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "fileSize" TEXT,
ADD COLUMN     "license" TEXT,
ADD COLUMN     "material" TEXT,
ADD COLUMN     "printTime" TEXT,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "reviewCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "viewCount" INTEGER NOT NULL DEFAULT 0;
