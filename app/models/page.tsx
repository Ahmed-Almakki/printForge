import prisma from "../_lib/prisma";
import CardPage from "../_components/CardComponent";
import PaginationComp from "../_components/PaginationComp";

const perPage = 8;

export default async function mainProduct({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
   // Get current page from URL params, default to 1
   const params = await searchParams;
   const currentPage = Number(params.page) || 1;
   const skip = (currentPage - 1) * perPage;

   const totalItems = await prisma.productInfo.count();

    const productinfo = await prisma.productInfo.findMany({
        skip: skip,
        take: perPage,
        include: {
            tags: true,
            product: true
        },
        orderBy: {
            id: 'desc' // Add ordering for consistency
        }
    })
    
    return(
        <>
            <h2 className="-mt-15 mb-8 text-4xl font-bold">3D Model</h2>
            <div className="grid grid-cols-4 gap-5 flex-1">
                {
                    productinfo.map(product => (
                        <CardPage key={product.id} product={product} />
                    ))
                }
            </div>
            <div className="flex justify-center items-center gap-1">
                <PaginationComp 
                    itemsPerPage={perPage} 
                    totalItems={totalItems} 
                    currentPage={currentPage} 
                />
            </div>
        </>
    )
}