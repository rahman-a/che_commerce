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
        'absolute top-4 bg-primary h-5 min-w-44 flex items-center rounded-xl',
        direction === 'rtl' ? '-right-2' : '-left-2',
        className
      )}
    >
      <h1
        className={cn(
          'text-3xl font-extrabold -translate-y-3',
          direction === 'rtl' ? 'pr-8' : 'pl-8'
        )}
      >
        {title}
      </h1>
    </div>
  )
}
