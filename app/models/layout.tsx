import Link from "next/link";

export default function ModelsPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
    return(
        <>
            <section className="grid grid-cols-5 gap-4">
                <div id="sideNav" className="flex flex-col justify-center gap-2">
                    <p><Link href="all">ALL</Link></p>
                    <p><Link href="print">3D PRINTER</Link></p>
                    <p><Link href="art">ART</Link></p>
                    <p><Link href="education">EDUCATION</Link></p>
                    <p><Link href="fashion">FASHION</Link></p>
                    <p><Link href="hobby">HOBBY & DIY</Link></p>
                </div>

                <div>
                    {children}
                </div>
            </section>
        </>
    )
}