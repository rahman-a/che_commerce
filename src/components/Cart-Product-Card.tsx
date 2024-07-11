import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import abaya from '@/images/demo/products/abaya_1.png'
import ProductNote from './Product-Note'
import DeleteBtn from './Delete-Btn'
import ProductQuantityControl from './Product-Quantity-Control'
import ProductCartEdit from './Product-Cart-Edit'

type Props = {
  isOrder?: boolean
  note?: string
}

export default function CartProductCard({ isOrder, note }: Props) {
  const t = useTranslations('General')
  const to = useTranslations('Orders')
  const tDemo = useTranslations('Demo')
  return (
    <div className='w-full max-w-screen-2xl flex items-start justify-between bg-primary p-2 rounded-md'>
      <div className='flex space-x-3'>
        <figure className='w-14 p-2 bg-white flex items-center justify-center rounded-md rtl:ml-3'>
          <Image
            src={abaya}
            alt='Abaya'
            width={25}
            height={25}
            className='object-contain'
          />
        </figure>
        <div className='flex flex-col justify-evenly space-y-2'>
          <h2
            className={cn(
              'flex items-center flex-nowrap w-max text-xs md:text-sm font-semibold md:font-light',
              isOrder ? 'md:text-base' : 'md:text-lg'
            )}
          >
            {`${tDemo('product_name')} - ${tDemo('product_size')} - ${tDemo(
              'product_type'
            )}`}
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
      <div className='flex flex-col items-center space-y-2 mt-2'>
        <h3
          className={cn(
            'text-sm md:text-lg text-secondary tracking-wide w-max mb-2',
            isOrder ? 'md:text-base' : 'md:text-lg'
          )}
        >
          50,00 {t('kw')}
        </h3>
        <div
          className={cn(
            'w-full flex items-center justify-end space-x-2 text-white rtl:space-x-reverse'
          )}
        >
          {!isOrder && <ProductCartEdit />}
          <ProductNote btnClassName='rtl:ml-2' isOrder={isOrder} note={note} />
          {!isOrder && <DeleteBtn className='w-44 rtl:w-36' />}
        </div>
      </div>
    </div>
  )
}
