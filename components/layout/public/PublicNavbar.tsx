'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { publicNavitems } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Brand, Dropdown } from '@/components'
import NAV_ITEMS from '@/data/navInterface'


export default function PublicNavbar() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="fixed bg-white  inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="py-4 md:py-8 w-[90%] md:w-[85%] mx-auto flex justify-between items-center space-x-4">
                <Brand />
                <div className="flex lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center rounded-md text-gray-700"
                    >
                        <Bars3BottomLeftIcon aria-hidden="true" className="size-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:space-x-8">
                    {publicNavitems.map((item: NAV_ITEMS) => <div key={item.title}>
                        {
                            item.children ?
                                <Dropdown item={item}
                                    classValue={`font-medium text-sm/2.5 hover:text-blue-600 ${pathname == item.href ? 'text-blue-600' : 'text-gray-600'}`}
                                />
                                : <Link key={item.title} href={item.href}
                                    className={`font-medium text-sm/2.5 hover:text-blue-600 ${pathname == item.href ? 'text-blue-600' : 'text-gray-600'}`}
                                >
                                    {item.title}
                                </Link>

                        }
                    </div>)}
                </div>

            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="bg-white inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Brand />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-red-600"
                        >
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {publicNavitems.map((item) => (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        className={`text-sm/2.5 block rounded-lg px-3 py-2 font-medium ${pathname == item.href ? 'text-blue-600' : 'text-gray-600'}`}
                                    >
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </div>
    )
}
