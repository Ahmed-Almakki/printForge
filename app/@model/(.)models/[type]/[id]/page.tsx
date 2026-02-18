import prisma from "@/app/_lib/prisma";
import DialogComponenet from "@/app/_components/DialogComponent";

export default async function ModelPage(params: { params: Promise<{ id: string }> }) {
    const { id } = await params.params;
    console.log('the id is ', id);
    const product = await prisma.productInfo.findFirst({
        where: {
            id: Number(id)
        },
        include: {
            product: {
                include: {
                    user: true,
                }
            },
            tags: true
        }
    });
    console.log('the product is ', product);
    return (
        <DialogComponenet product={product} />
    )
}