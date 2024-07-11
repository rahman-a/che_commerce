import Title from '@/components/Title'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { getLangDir } from 'rtl-detect'
import CategoryFilter from '@/components/Category-Filter'
import SortBy, { SortItem } from '@/components/SortBy'
import ProductCard from '@/components/Product-Card'
import { products } from '@/demo/products'
import Link from 'next/link'

type Props = {}

export default function Categories({}: Props) {
  const t = useTranslations('Main_Page')
  const tg = useTranslations('Category')
  const tm = useTranslations('Main_Page')
  const locale = useLocale()
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-5 md:p-10 mt-20'>
      <div className='flex items-center'>
        <Title title={t('categories')} direction={getLangDir(locale)} />
        <h2
          className='absolute top-2 left-48 md:left-56 flex items-center justify-center text-lg md:text-xl font-bold 
      space-x-1 rtl:flex-row-reverse rtl:space-x-0 rtl:left-auto rtl:right-48 md:rtl:right-56'
        >
          <span className='text-secondary rtl:mr-1'>{t('embroidery')}</span>
          <span>{t('abayas')}</span>
        </h2>
      </div>
      <section className='flex items-center space-x-5 rtl:space-x-0 py-5'>
        <CategoryFilter />
        <SortBy>
          <SortItem>{tg('price_low_high')}</SortItem>
          <SortItem>{tg('price_high_low')}</SortItem>
          <SortItem>{tm('newest')}</SortItem>
          <SortItem>{tm('best_selling')}</SortItem>
        </SortBy>
      </section>
      <section
        className='grid place-items-center grid-cols-2 sm:grid-cols-3
      lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-4'
      >
        {products(t).map((product, index) => (
          <Link href='/products/1' key={product.id}>
            <ProductCard
              src={product.src.src}
              alt={product.alt}
              name={product.name}
              description={product.description}
              price={product.price}
              discount={product.discount}
            />
          </Link>
        ))}
      </section>
    </main>
  )
}
