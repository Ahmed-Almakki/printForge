import PaginationComp from "@/app/_components/PaginationComp";
import prisma from "@/app/_lib/prisma";
import CardPage from "@/app/_components/CardComponent";
import EmptyPage from "@/app/_components/EmptyPage";

const perPage = 8;
export default async function ProductType({
    params, searchParams
}: {
    params: Promise<{ type: string }>;
    searchParams: Promise<{ page?: string }>;
}) {
    const { type } = await params;
    const currentPage = Number((await searchParams).page) || 1;
    const skip = (currentPage - 1) * perPage;

    const totalItems = await prisma.productInfo.count(
        {where: {
            product: {
                category: {
                    name: {
                        contains: type,
                        mode: 'insensitive'
                    }
                }
            }
        },
        orderBy: {
            likes: 'asc' // Add ordering for consistency
        }
    }
    );
    const products = await prisma.productInfo.findMany({
        where: {
            product: {
                category: {
                    name: {
                        contains: type,
                        mode: 'insensitive'
                    }
                }
            }
        },
        skip: skip,
        take: perPage,
        include: {
            tags: true,
            product: {
                include: {
                    category: true
                }
            }
        },
        orderBy: {
            likes: 'asc' // Add ordering for consistency
        }
    });
    console.log('the products are ', products, 'the total items are ', totalItems, 'the current page is ', currentPage);

    return(
        <>
            <h2 className="-mt-15 mb-8 text-4xl font-bold">3D Model</h2>
            {
                products.length === 0 ? (
                    <EmptyPage />
                ) : (
                <>
                    <div className="grid grid-cols-4 gap-5 flex-1">
                        {
                            products.map(product => (
                                <CardPage key={product.id} product={product} />
                            ))
                        }
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <PaginationComp itemsPerPage={perPage} totalItems={totalItems} currentPage={currentPage} />
                    </div>
                </>
                )
            }
        </>
    )
 
}
