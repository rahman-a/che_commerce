import * as React from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'

export interface ILinkItemProps {
  children: React.ReactNode
  text: string
  url: string
  className?: string
}

export default function LinkItem({
  children,
  text,
  url,
  className,
}: ILinkItemProps) {
  return (
    <Link href={url} className={cn('flex items-center', className)}>
      {children}
      <span className='block text-[16px] font-bold ml-4 rtl:ml-0 rtl:mr-4 capitalize'>
        {text}
      </span>
    </Link>
  )
}
