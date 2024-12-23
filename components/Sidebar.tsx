'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation' 
import { cn } from '@/lib/utils'

function Sidebar({user}:SiderbarProps) {
    const pathname = usePathname();

  return (
    <section className="sidebar">
    <nav className="flex flex-col gap-4">
      <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
        <Image 
          src="/icons/bb.png"
          width={34}
          height={34}
          alt="Bankly logo"
          className="size-[54px] max-xl:size-14"
        />
        <h1 className="sidebar-logo">Bankly</h1>
      </Link>

      {sidebarLinks.map((item) => {
        // pathname is checking which path is active 
        const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

        return (
          <Link href={item.route} key={item.label}
          //1) imported cn from utils, 2)sidebar-link is normal className,3)
            className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}
          >
            <div className="relative size-6">
              <Image 
                src={item.imgURL}
                alt={item.label}
                fill
                className={cn({
                  'brightness-[3] invert-0': isActive
                })}
              />
            </div>
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {item.label}
            </p>
          </Link>
        )
      })}
      
      {/* <PlaidLink user={user} /> */}
    </nav>

    {/* <Footer user={user} /> */}
  </section>
  )
}

export default Sidebar