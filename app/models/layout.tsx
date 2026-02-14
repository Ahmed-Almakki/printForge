import prisma from "../_lib/prisma";
import CategoryComp from "../_components/CategoryComp";


export const revalidate = 86400;

export default async function ModelsPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

    const categories = await prisma.category.findMany();

    return(
        <>
            <section className="flex gap-10 p-4">
                <div id="sideNav" className="flex flex-col justify-center-safe gap-2 w-[15%] ml-10 fixed top-0 h-screen ">
                    {
                            <CategoryComp  categories={categories} />
                    }
                </div>
                <div className="ml-[25%] w-full">
                    {children}
                </div>
            </section>
        </>
    )
}