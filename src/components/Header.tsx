import * as React from 'react'
import { Search } from 'lucide-react'
import { MenuHam } from '@/icons'
import ShoppingCart from './Shopping-Cart'
import Sidebar from './Sidebar'
import { Sheet, SheetTrigger } from './ui/sheet'

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <header className='bg-primary h-14'>
      <div className='flex items-center justify-between rtl:flex-row-reverse h-full px-4'>
        <div className='flex items-center rtl:flex-row-reverse space-x-4'>
          <ShoppingCart />
          <Search size={24} className='cursor-pointer' />
        </div>
        <Sheet>
          <SheetTrigger>
            <MenuHam width={28} height={28} className='cursor-pointer' />
          </SheetTrigger>
          <Sidebar />
        </Sheet>
      </div>
    </header>
  )
}
