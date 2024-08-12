import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'
import React from 'react'

type Props = {
  show: boolean
}

export default function LoadingOverlay({ show }: Props) {
  return (
    <div
      className={cn(
        `flex items-center justify-center absolute 
        top-0 left-0 w-full h-full z-20 bg-black/50`,
        {
          hidden: !show,
        }
      )}
    >
      <LoaderCircle className='mr-2 h-10 w-10 animate-spin' />
    </div>
  )
}
