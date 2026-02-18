// app/models/[type]/[id]/page.tsx
import prisma from "@/app/_lib/prisma";
import FullPageModel from "@/app/_components/FullPageModel";

interface PageProps {
  params: Promise<{
    type: string;
    id: string;
  }>;
}

export default async function ModelDetailPage({ params }: PageProps) {
    const { id, type } = await params;
    
    const product = await prisma.productInfo.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            product: {
                include: {
                    user: true,
                    category: true
                }
            },
            tags: true
        }
    });
    
    if (!product) {
        return <div>Product not found</div>;
    }
    
    return <FullPageModel product={product} />;
}