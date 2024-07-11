'use client'
import { ColoredInstagram, User } from '@/icons'
import Link from 'next/link'
import React from 'react'
import UserDropdownMenu from './User-DropdownMenu'
import ShoppingCart from './Shopping-Cart'
import { Search } from 'lucide-react'

type Props = {}

export default function HeaderAction({}: Props) {
  return (
    <div className='flex items-center rtl:flex-row-reverse space-x-5 space-x-reverse md:space-x-5 rtl:md:space-x-5'>
      <div className='hidden md:block'>
        {/* <Link href='/login'>
              <User className='w-6 h-6 cursor-pointer' />
            </Link> */}
        <UserDropdownMenu />
      </div>
      <ShoppingCart />
      <div className='grid place-content-center w-7 h-7  circle bg-white md:bg-transparent'>
        <Search size={20} className='cursor-pointer' />
      </div>
      <ColoredInstagram className='w-7 h-7 sm:w-8 sm:h-8 invisible opacity-0' />
    </div>
  )
}
