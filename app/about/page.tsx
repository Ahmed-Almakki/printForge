import Image from "next/image"

import { BsStack } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import prisma from "../_lib/prisma";

export default async function aboutPage() {
    const xx = await prisma.productInfo.findMany({include:{tags:true, product:true}});
    console.log('the product is ',xx);
    return(
        <>
            <section className="flex justify-evenly w-full py-8 overflow-clip -mt-10 border-b border-[#B45309]">
                <div className="w-[40%] h-auto relative">
                    <Image width={627} height={627} alt="About Page Image" src={"/image.png"}/>
                </div>
                <div className="flex flex-col gap-4 w-[30%] justify-center">
                    <p className="text-2xl font-sans">About printforge</p>
                    <h2 className="text-5xl font-bold">Empowering makers worldwide</h2>
                    <p className="text-xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, 
                        makers, and professional designers to share and discover amazing STL files for 3D printing.
                    </p>
                    <p className="text-xl">
                        Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring 
                        their ideas to life through 3D printing.
                    </p>
                </div>
            </section>

            <section className="flex justify-evenly items-center-safe mt-5 pb-20 pt-10 border-b border-[#B45309]">
                
                <div className="w-[15%]">
                    <div className="flex justify-start items-center-safe text-2xl font-bold">
                        <div className="pe-3">
                            <BsStack />
                        </div>
                        <div>
                            <span>100K+ Models</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span>Access our vast library of community-created 3D models, from practical tools to artistic creations.</span>
                    </div>
                </div>

                <div className="border border-[#B45309] self-stretch"></div>

                <div className="w-[15%]">
                    <div className="flex justify-start items-center-safe text-2xl font-bold">
                        <div className="pe-3">
                            <GoGlobe />
                        </div>
                        <div>
                            <span >Active Community</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</span>
                    </div>
                </div>

                <div className="border border-[#B45309] self-stretch"></div>

                <div className="w-[15%]">
                    <div className="flex justify-start items-center-safe text-2xl font-bold">
                        <div className="pe-3">
                            <FiFlag />
                        </div>
                        <div>
                            <span>Free to Use</span>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span>Most models are free to download, with optional premium features for power users.</span>
                    </div>
                </div>
            </section>

            <section className="flex justify-center-safe items-center-safe p-20">
                <div className="w-[37%] h-auto max-w-7xl flex flex-col gap-2">

                    <div className="mb-2">
                        <h2 className="text-5xl font-bold">Our Vision</h2>
                    </div>

                    <div className="text-xl">
                        <p>At PrintForge, we believe that 3D printing is revolutionizing 
                            the way we create, prototype, and manufacture. 
                            Our platform serves as a bridge between designers and makers, 
                            enabling the sharing of knowledge and creativity that pushes 
                            the boundaries of what's possible with 3D printing.
                        </p>
                    </div>

                    <div className="w-[50%] border border-[#B45309] mx-auto my-7"></div>

                    <div className="text-xl">
                        <p>Whether you're a hobbyist looking for your next weekend project, 
                            an educator seeking teaching materials, or a professional 
                            designer wanting to share your creations, PrintForge provides 
                            the tools and community to support your journey in 3D printing.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}