"use client";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div id="content" className="w-full max-w-7xl grid grid-cols-1 gap-20 p-8 md:grid-cols-2 md:gap-10 mx-auto overflow-hidden">
        <motion.div id="left" className="order-2 md:order-1" initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{duration: 0.95, ease: "easeOut",}}>
          <div  className="flex flex-col gap-4 pb-10">
            <p className="pb-4">
              Your go-to platform for 3D printing files
            </p>
            <h1 className="text-6xl font-bold">Discover what’s possible with 3D printing</h1>
            <span className="text-2xl">Join our community of creators and explore a vast library of user-submitted models.</span>
          </div>
          <button className="pt-2 border-2 p-2">BROWSER MODELS</button>
        </motion.div>
        <motion.div id="right" className="order-1 md:order-2" initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.95,
            ease: "easeOut",
            delay: 0.5,
          }}>
          <div className="relative w-130 h-130 overflow-hidden rounded-full mx-auto">
            <div style={{backgroundImage: "url('/f8649aecfe8696cdf22db6f7ca522d3310b95d50.png')",}} className="absolute inset-0 bg-cover bg-center w-full h-full"></div>
            <div className="absolute inset-0 bg-amber-500  h-[20%] w-full top-[40%] rotate-45"></div>
            <div className="absolute inset-0 bg-amber-500 h-[40%] w-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
           </div>
        </motion.div>
      </div>
    </>
  );
}
