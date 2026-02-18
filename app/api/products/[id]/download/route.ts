// app/api/download/[id]/route.ts
import { NextRequest } from "next/server";
import fs from 'fs';
import path from 'path';
import prisma from "@/app/_lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  // Get product from DB to get file path
  const product = await prisma.productInfo.findFirst({
    where: { id: Number(id) },
    include: { product: true }
  });
  
  if (!product) {
    return new Response('Not found', { status: 404 });
  }
  
  const filePath = path.join(process.cwd(), 'public', 'threeDmodel', product.product.threeD_model);
  
  try {
    const file = fs.readFileSync(filePath);
    return new Response(file, {
      headers: {
        'Content-Disposition': `attachment; filename="${product.product.threeD_model}"`,
        'Content-Type': 'application/octet-stream',
      },
    });
  } catch (error) {
    return new Response('File not found', { status: 404 });
  }
}