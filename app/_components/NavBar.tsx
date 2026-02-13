"use client";

import Link from "next/link"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";


export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const pathname = usePathname()

    const isActive = (path: string) => {
        console.log('path', path, '/tpathname', pathname)
        return path === pathname ? 'text-white border-b-1 pb-2 border-white' : ''
    }
    return (<>
        <header>
        <nav className="fixed top-0 left-0  w-full py-5 flex justify-center transition-all duration-300 z-50" style={{ backgroundColor: isScrolled ? '#b63a07' : 'transparent' }}>
          <div className="px-6 py-4 min-h-16 max-w-7xl min-w-[90%] flex items-center justify-between">
            <div id="icon">
              <span className="font-bold  text-2xl"><Link href="/">PrintFortage</Link></span>
            </div>
            <div id="links" className="flex justify-center gap-10">
              <ul className="flex justify-center gap-15 text-lg font-medium">
                <li><Link href="/models" className={isActive('/models')}>3D Model</Link></li>
                <li><Link href="/about" className={isActive('/about')}>About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      </>
    )
}