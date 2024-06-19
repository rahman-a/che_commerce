import * as React from 'react'
import Link from 'next/link'
import { ShoppingCart as CartIcon } from 'lucide-react'

export interface IShoppingCartProps {}

export default function ShoppingCart(props: IShoppingCartProps) {
  return (
    <Link href='/cart' className='relative'>
      <div
        className='absolute flex items-center justify-center -right-2 -top-1 
      rounded-full bg-white h-5 w-5'
      >
        <span className='text-secondary text-sm font-semibold'>2</span>
      </div>
      <CartIcon size={28} />
    </Link>
  )
}
