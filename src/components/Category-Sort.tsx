import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

type Props = {}

export default function CategorySort({}: Props) {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-between space-x-5 border-2 
          border-black rounded-xl px-3 min-w-36 md:min-w-44'
        >
          <span> Sort By </span>
          <Play size={16} fill='black' className='rotate-90 rtl:!ml-0' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-44'>
        <div>
          <DropdownMenuItem>
            <p>Price: Low to High</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Price: High to Low</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Newest Arrival</p>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <p>Best Sellers</p>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
