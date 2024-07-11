import React from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import abaya from '@/images/demo/products/abaya_1.png'
import { Badge } from './ui/badge'
import CopyToClipboard from './CopyToClipboard'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import CartProductCard from './Cart-Product-Card'
import Title from './Title'
import { getLangDir } from 'rtl-detect'

type Props = {}

function OrderProductCard({}: Props) {
  const t = useTranslations('General')
  const to = useTranslations('Orders')
  return (
    <div
      className='w-full max-w-screen-2xl flex items-center justify-between bg-card 
    hover:bg-primary cursor-pointer p-2 rounded-lg'
    >
      <div className='flex space-x-3'>
        <figure className='w-14 p-2 bg-white flex items-center justify-center rounded-lg rtl:ml-3'>
          <Image
            src={abaya}
            alt='Abaya'
            width={25}
            height={25}
            className='object-contain'
          />
        </figure>
        <div className='flex flex-col justify-evenly space-y-2'>
          <h2 className='flex items-center space-x-2 rtl:space-x-reverse font-semibold text-sm lg:text-lg lg:font-light tracking-wider'>
            <span>#854123</span>
            <CopyToClipboard text='#854123' />
          </h2>
          <div className='flex items-center space-x-5 md:space-x-8 rtl:space-x-reverse'>
            <p className='flex items-center space-x-1 tracking-wide'>
              <span>{to('order_quantity')}:</span>
              <span>12</span>
            </p>
            <h3 className='lg:text-lg text-secondary lg:font-light tracking-wide'>
              50,00 {t('kw')}
            </h3>
          </div>
        </div>
      </div>
      <div className='hidden flex-col space-y-2 px-2 md:flex'>
        <h3 className='flex items-center space-x-5 rtl:space-x-reverse text-xs sm:text-sm lg:text-base text-slate-500 tracking-wide'>
          <span className='w-44'>{to('order_date')}</span>
          <span>14/06/2024</span>
        </h3>
        <h3 className='flex items-center space-x-5 rtl:space-x-reverse text-xs sm:text-sm lg:text-base text-slate-500 tracking-wide'>
          <span className='w-44'>{to('delivery_date')}</span>
          <span className='text-black'>16/06/2024</span>
        </h3>
      </div>
      <div
        className='relative flex flex-col items-center space-y-2 px-2 order-card-status 
      before:rtl:left-auto before:rtl:-right-[1px] before:md:hidden'
      >
        <h3 className='text-sm lg:text-base font-bold tracking-wide'>
          {to('order_status')}
        </h3>
        <Badge
          className='text-xs text-secondary px-1 lg:px-2 text-center'
          variant='outline'
        >
          {to('in_progress')}
        </Badge>
      </div>
    </div>
  )
}

export default function OrdersItems({}: Props) {
  const t = useTranslations('General')
  const tDemo = useTranslations('Demo')
  const to = useTranslations('Orders')
  const DemoNote = tDemo('note_example')
  const locale = useLocale()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <OrderProductCard />
      </SheetTrigger>
      <SheetContent className='w-full sm:max-w-xl px-2'>
        <div className='flex md:hidden flex-col space-y-2 mt-10 mb-5'>
          <h3 className='flex items-center space-x-5 rtl:space-x-reverse text-sm lg:text-base text-slate-500 tracking-wide'>
            <span className='w-44'>{to('order_date')}</span>
            <span>14/06/2024</span>
          </h3>
          <h3 className='flex items-center space-x-5 rtl:space-x-reverse text-sm lg:text-base text-slate-500 tracking-wide'>
            <span className='w-44'>{to('delivery_date')}</span>
            <span className='text-black'>16/06/2024</span>
          </h3>
        </div>
        <div className='flex flex-col space-y-2 mt-20 py-4'>
          <Title
            className='top-40 md:top-16 [&>h1]:text-xl [&>h1]:md:text-3xl md:left-auto md:-right-2 md:pl-0 md:pr-8'
            title={to('order_items')}
            direction={getLangDir(locale)}
          />
          <CartProductCard isOrder note={DemoNote} />
          <CartProductCard isOrder />
          <CartProductCard isOrder note={DemoNote} />
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit' className='hover:bg-primary'>
              {t('close')}
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
