import React from 'react'
import { FreeScarf } from '@/icons'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  children?: React.ReactNode
  text: string
}

export default function ProductOfferBadge({
  className,
  children,
  text,
}: Props) {
  return (
    <div
      className={cn(
        `relative z-10 flex items-center space-x-1 rtl:space-x-0 bg-secondary p-2 rounded-sm 
        `,
        className
      )}
    >
      {children ? children : <FreeScarf className='w-5 h-5' />}
      <span className='text-xs md:text-lg xl:text-xl text-white inline-block rtl:!mr-1'>
        {text}
      </span>
    </div>
  )
}
