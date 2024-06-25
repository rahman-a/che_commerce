import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import abaya from '@/images/demo/products/abaya_1.png'
import ProductNote from './Product-Note'
import DeleteBtn from './Delete-Btn'
import ProductQuantityControl from './Product-Quantity-Control'

type Props = {}

export default function CartProductCard({}: Props) {
  const t = useTranslations('General')
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
          <h2 className='flex items-center space-x-1 text-xs sm:text-sm md:text-lg font-light tracking-wide'>
            <span>{tDemo('product_name')}</span>
            <span>-</span>
            <span>{tDemo('product_size')}</span>
            <span>-</span>
            <span>{tDemo('product_type')}</span>
          </h2>
          <ProductQuantityControl />
        </div>
      </div>
      <div className='flex flex-col items-center space-y-2 px-2'>
        <h3 className='text-xs sm:text-sm md:text-lg text-secondary font-light tracking-wide'>
          50,00 {t('kw')}
        </h3>
        <div className='flex items-center space-x-2 text-white rtl:space-x-0'>
          <ProductNote btnClassName='rtl:ml-2' />
          <DeleteBtn className='w-44 rtl:w-36' />
        </div>
      </div>
    </div>
  )
}
