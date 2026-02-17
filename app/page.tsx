"use client";
import { motion } from 'framer-motion'
import ThreeDModel from './_components/ThreeDModel';
import Link from 'next/link';

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
          <Link href="/models" className="pt-2 border-2 p-2 border-black">
            BROWSER MODELS
          </Link>
        </motion.div>
        <div id="right" className="order-1 md:order-2">
          <ThreeDModel path="fire_planet.glb" />
        </div>
      </div>
    </>
  );
}
