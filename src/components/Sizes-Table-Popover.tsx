import React from 'react'
import sizesImage from '@/images/sizes.png'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import Image from 'next/image'
import { DialogClose } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
type Props = {}

export default function SizesTablePopover(props: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className='flex items-center justify-center bg-primary 
               w-8 h-8 p-1 rtl:!mr-3 cursor-pointer text-sm font-bold circle'
        >
          ?
        </button>
      </PopoverTrigger>
      <PopoverContent className='p-0'>
        <ShowImage />
      </PopoverContent>
    </Popover>
  )
}

export function ShowImage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <figure className='relative w-96 cursor-pointer'>
          <Image src={sizesImage} height={495} alt='sizes' unoptimized />
        </figure>
      </DialogTrigger>
      <DialogContent className='max-w-screen-lg grid place-content-center p-0'>
        <figure className='relative'>
          <Image
            src={sizesImage}
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
