import Link from "next/link";
import prisma from "../_lib/prisma";

export default async function ModelsPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){

    const categories = await prisma.category.findMany();
    console.log('the categories are ', categories.length);

    return(
        <>
            <section className="flex gap-10 p-4">
                <div id="sideNav" className="flex flex-col justify-center-safe gap-2 w-[20%] ml-10 fixed top-0 h-screen ">
                    <p><Link href="/models" >All</Link></p>
                    {categories.map(category => (
                        <p key={category.id}><Link href={category.name.toLowerCase()}>{category.name}</Link></p>
                    ))}
                </div>

                <div className="ml-[25%]">
                    {children}
                </div>
            </section>
        </>
    )
}