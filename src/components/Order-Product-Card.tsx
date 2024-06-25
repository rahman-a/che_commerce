import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import abaya from '@/images/demo/products/abaya_1.png'
import ProductNote from './Product-Note'
import DeleteBtn from './Delete-Btn'
import ProductQuantityControl from './Product-Quantity-Control'

type Props = {
  isOrder?: boolean
  note?: string
}

export default function OrderProductCard({ isOrder, note }: Props) {
  const t = useTranslations('General')
  const to = useTranslations('Orders')
  const tDemo = useTranslations('Demo')
  return (
    <div className='w-full max-w-screen-2xl flex items-center justify-between bg-primary p-2 rounded-md'>
      <div className='flex space-x-3'>
        <figure className='p-2 bg-white flex items-center justify-center rounded-md rtl:ml-3'>
          <Image
            src={abaya}
            alt='Abaya'
            width={25}
            height={25}
            className='object-contain'
          />
        </figure>
        <div className='flex flex-col space-y-2'>
          <h2
            className={cn(
              'flex items-center space-x-1 text-xs sm:text-sm font-light tracking-wide',
              isOrder ? 'md:text-base' : 'md:text-lg'
            )}
          >
            <span>{tDemo('product_name')}</span>
            <span>-</span>
            <span>{tDemo('product_size')}</span>
            <span>-</span>
            <span>{tDemo('product_type')}</span>
          </h2>
          {isOrder ? (
            <p className='flex items-center space-x-1 tracking-wide'>
              <span>{to('order_quantity')}:</span>
              <span>12</span>
            </p>
          ) : (
            <ProductQuantityControl />
          )}
        </div>
      </div>
      <div className='flex flex-col items-center space-y-2 px-2'>
        <h3
          className={cn(
            'text-xs sm:text-sm md:text-lg text-secondary font-light tracking-wide',
            isOrder ? 'md:text-base' : 'md:text-lg'
          )}
        >
          50,00 {t('kw')}
        </h3>
        <div
          className={cn(
            'w-full flex items-center space-x-2 text-white rtl:space-x-0',
            isOrder ? 'justify-end' : 'justify-center'
          )}
        >
          <ProductNote btnClassName='rtl:ml-2' isOrder={isOrder} note={note} />
          {!isOrder && <DeleteBtn className='w-44 rtl:w-36' />}
        </div>
      </div>
    </div>
  )
}
