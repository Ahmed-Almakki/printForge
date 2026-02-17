"use client"; // Required for framer-motion

import { BsStack } from "react-icons/bs";
import { GoGlobe } from "react-icons/go";
import { FiFlag } from "react-icons/fi";
import { motion } from "framer-motion";

// This must be a client component because of framer-motion
export default function AboutPage() {
    return(
        <>
            {/* First section - already has animations that play on load */}
            <section className="flex justify-evenly w-full py-8 overflow-clip -mt-10 border-b border-[#B45309]">
                <div className="w-[40%] h-auto relative">
                    <motion.div 
                        className="relative w-130 h-130 overflow-hidden rounded-full mx-auto" 
                        initial={{ x: 80, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 0.95, ease: "easeOut", delay: 0.5 }}
                    >
                        <div style={{backgroundImage: "url('/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png')"}} 
                             className="absolute inset-0 bg-cover bg-center w-full h-full">
                        </div>
                        <div className="absolute inset-0 bg-amber-500 h-[20%] w-full top-[40%] rotate-45"></div>
                        <div className="absolute inset-0 bg-amber-500 h-[40%] w-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
                    </motion.div>
                </div>
                
                <motion.div 
                    className="flex flex-col gap-4 w-[30%] justify-center"
                    initial={{ x: -80, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 0.95, ease: "easeOut", delay: 0.5 }}
                >
                    <p className="text-2xl font-sans">About printforge</p>
                    <h2 className="text-5xl font-bold">Empowering makers worldwide</h2>
                    <p className="text-xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, 
                        makers, and professional designers to share and discover amazing STL files for 3D printing.
                    </p>
                    <p className="text-xl">
                        Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring 
                        their ideas to life through 3D printing.
                    </p>
                </motion.div>
            </section>

            {/* Second section - now with scroll animations */}
            <motion.section 
                className="flex justify-evenly items-center-safe mt-5 pb-20 pt-10 border-b border-[#B45309]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }} 
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                
                <motion.div 
                    className="w-[15%]"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
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
                </motion.div>

                <motion.div 
                    className="border border-[#B45309] self-stretch"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                ></motion.div>

                <motion.div 
                    className="w-[15%]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
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
                </motion.div>

                <motion.div 
                    className="border border-[#B45309] self-stretch"
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                ></motion.div>

                <motion.div 
                    className="w-[15%]"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
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
                </motion.div>
            </motion.section>

            {/* Third section - also with scroll animations */}
            <motion.section 
                className="flex justify-center-safe items-center-safe p-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <motion.div 
                    className="w-[37%] h-auto max-w-7xl flex flex-col gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        className="mb-2"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-5xl font-bold">Our Vision</h2>
                    </motion.div>

                    <motion.div 
                        className="text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p>At PrintForge, we believe that 3D printing is revolutionizing 
                            the way we create, prototype, and manufacture. 
                            Our platform serves as a bridge between designers and makers, 
                            enabling the sharing of knowledge and creativity that pushes 
                            the boundaries of what's possible with 3D printing.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="w-[50%] border border-[#B45309] mx-auto my-7"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    ></motion.div>

                    <motion.div 
                        className="text-xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p>Whether you're a hobbyist looking for your next weekend project, 
                            an educator seeking teaching materials, or a professional 
                            designer wanting to share your creations, PrintForge provides 
                            the tools and community to support your journey in 3D printing.
                        </p>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    )
}