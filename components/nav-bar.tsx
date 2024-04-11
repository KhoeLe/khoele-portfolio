'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useState } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Icon from './ui/icon';
import { Diamond, FolderOpenDot, Newspaper, FlaskConical, Backpack, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import useScrollDirection from '@/lib/hooks/useScroll';
import { ModeToggle } from './theme-toggle';

const items = [
  { name: "Home", path: "/", icon: Diamond },
  {
    name: "Projects",
    path: "/projects",
    icon: FolderOpenDot,
  },
  {
    name: "Articles",
    path: "/articles",
    icon: Newspaper,
  },
  { name: "Lab", path: "/lab", icon: FlaskConical },
  {
    name: "What's in my bag?",
    path: "/whats-in-my-bag",
    icon: Backpack,
  },
  {
    name: "Bookmarks",
    path: "/bookmarks",
    icon: Star,
  },
];


function Navbar() {

  const scrollDirection = useScrollDirection();
  const headerRef = useRef(null);
  const [styles, setStyles] = useState({});
  const pathname = usePathname()





  return (
    <div ref={headerRef} className={`sticky ${scrollDirection === "down" ? "-top-24" : "top-0"}  `}>
      {/* <div ref={headerRef} className="fixed top-0 w-full z-50"> */}
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl space-y-4">
        <ul className="flex items-center my-4 px-3 text-sm font-medium text-gray-800 rounded-full shadow-lg bg-white/90 shadow-gray-800/5 ring-1 backdrop-blur dark:bg-gray-800/90 dark:text-gray-200 dark:ring-white/20 ring-gray-900/5">
          {items.map(item => (
            <li key={item.path}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href={item.path} className={cn("relative px-3 py-4 flex items-center justify-center transition hover:text-teal-500 dark:hover:text-teal-400", pathname === item.path ? "text-teal-600 dark:text-teal-400" : "")} >
                      <item.icon aria-hidden="true" className={cn("w-5 h-5 z-10")} />

                      {pathname === item.path && (
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/70 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
                      )}
                      {pathname === item.path && (
                        <span className="absolute h-8 w-8 z-0 rounded-full bg-gray-100 dark:bg-white/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
                      )}
                      {/* <span className="sr-only">{item.name}</span> */}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className='text-teal-600 text-xs'>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
          <li className="flex-1"></li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  )
}




export default Navbar