'use client'

import { publicNavitems } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
    const pathname = usePathname()
    return (
        <footer className="bg-gray-50 border-t z-10">
            <div className="mx-auto md:w-[100%] py-8">
                <div className="md:flex md:justify-evenly">
                    <div className="flex flex-wrap justify-center px-3">
                        {
                            publicNavitems.map((nav: any) => <div key={nav.title} className={`py-1 ${pathname==nav.href?'text-blue-600':'text-gray-600'} hover:text-blue-600`}>
                                <Link
                                    href={nav.href}
                                    className="p-3 text-sm"
                                >
                                    {nav.title}
                                </Link>
                            </div>)
                        }
                    </div>
                    <h1 className="text-sm text-center text-gray-600 p-3">Developed by: 
                        <Link
                            className="text-gray-900 font-extrabold px-1"
                            href="https://mevinai.et"
                            target='_blank'
                        >Mevinai</Link>
                        - 2024
                    </h1>
                </div>
            </div>
        </footer>
    )
}