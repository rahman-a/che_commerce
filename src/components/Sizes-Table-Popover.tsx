import React from 'react'
import sizesImage from '@/images/sizes.png'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
type Props = {
  className?: string
  image?: string
  children?: React.ReactNode
}

export default function SizesTablePopover({
  className,
  image,
  children,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            `flex items-center justify-center bg-primary 
               w-[22px] h-[22px] p-1 rtl:!mr-3 cursor-pointer text-xs font-bold circle`,
            className
          )}
        >
          ?
        </button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        {children ? children : <ShowImage image={image} />}
      </PopoverContent>
    </Popover>
  )
}

export function ShowImage({ image }: { image?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure className='relative w-96 cursor-pointer'>
          <Image
            src={image ?? sizesImage}
            height={495}
            alt='sizes'
            unoptimized
          />
        </figure>
      </DialogTrigger>
      <DialogContent className='max-w-screen-lg grid place-content-center p-0'>
        <figure className='relative'>
          <Image
            src={image ?? sizesImage}
            width={1000}
            height={495}
            alt='sizes'
            unoptimized
          />
        </figure>
      </DialogContent>
    </Dialog>
  )
}
