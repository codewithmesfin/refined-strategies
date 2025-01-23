import NAV_ITEMS from '@/data/navInterface'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'


interface PROPS {
  classValue?: string,
  item: NAV_ITEMS,
  onClick:()=>void
}

export default function Dropdown({ classValue, item,onClick }: PROPS) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className={`${classValue} flex items-center space-x-2`}>
        {item.title}
          <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-600" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute left-0 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {item.children &&
            item.children.map((link: NAV_ITEMS) => <MenuItem key={link.title}>
              <Link
                href={link.href}
                onClick={onClick}
                className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
              >
                {link.title}
              </Link>
            </MenuItem>)

          }
        </div>
      </MenuItems>
    </Menu>
  )
}
