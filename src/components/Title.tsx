import React from 'react'
import { cn } from '@/lib/utils'

type Props = {
  title: string
  className?: string
  direction?: 'rtl' | 'ltr'
}

export default function Title({ title, className, direction }: Props) {
  return (
    <div
      className={cn(
        'absolute top-4 bg-primary h-5 w-fit min-w-20 flex items-center rounded-xl pr-4 rtl:pl-4 rtl:pr-auto',
        direction === 'rtl' ? '-right-2' : '-left-2',
        className
      )}
    >
      <h1
        className={cn(
          `w-fit text-xl md:text-2xl 2xl:text-3xl font-extrabold 
          -translate-y-2 text-end pl-4 rtl:pr-4 rtl:pl-0`
        )}
      >
        {title}
      </h1>
    </div>
  )
}
