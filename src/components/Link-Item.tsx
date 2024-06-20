import * as React from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'
import { useLocale } from 'next-intl'

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
  const locale = useLocale()
  return (
    <Link
      locale={locale}
      href={url}
      className={cn('flex items-center md:justify-center', className)}
    >
      {children}
      <span className='block text-[16px] font-bold ml-4 md:ml-2 rtl:ml-0 rtl:mr-4 capitalize'>
        {text}
      </span>
    </Link>
  )
}
