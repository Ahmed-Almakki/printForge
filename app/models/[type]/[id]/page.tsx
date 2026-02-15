import prisma from "@/app/_lib/prisma";
export default async function ProductInfo({ params }: { params: Promise<{ type: string; id: string }> }) {
    const { type, id } = await params;
    const carosalImages = await prisma.productInfo.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            product: true,
            tags: true
        }
    });
    console.log('the carosal images are ', carosalImages);
    return(
        <>
            <h1>{carosalImages ? `Product ID: ${carosalImages.id}` : "No product found"}</h1>
        </>
    )
}