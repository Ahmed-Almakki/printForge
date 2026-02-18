// app/api/products/[id]/view/route.ts
import { NextRequest } from "next/server";
import prisma from "@/app/_lib/prisma";

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const {id} = await params;
    const product = await prisma.productInfo.update({
      where: { id: Number(id) },
      data: {
        viewCount: {
          increment: 1
        }
      }
    });
    
    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: "Failed to track view" }, { status: 500 });
  }
}