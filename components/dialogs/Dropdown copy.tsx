import NAV_ITEMS from '@/data/navInterface'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


interface PROPS{
  classValue?:string,
  item:NAV_ITEMS
}

export default function Dropdown({classValue,item}:PROPS) {
  return (
    <Menu>
      <MenuButton className={`${classValue}`}>{item.title} </MenuButton>
      <MenuItems anchor="bottom" className={"bg-green-600 z-50"}>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/settings">
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/support">
            Support
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block data-[focus]:bg-blue-100" href="/license">
            License
          </a>
        </MenuItem>
        {item.children &&
          item.children.map((link) => <MenuItem key={link.title}>
            <a className={classValue} href="/settings">
              {link.title}
            </a>
          </MenuItem>)
        }
      </MenuItems>
    </Menu>
  )
}