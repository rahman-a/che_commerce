import * as React from 'react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getLangDir } from 'rtl-detect'
import Title from '@/components/Title'
import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import OrderProductRow from '@/components/Order-Product-Row'
import SortBy, { SortItem } from '@/components/SortBy'
export interface ICartProps {
  params: {
    locale: string
  }
}

export default function Cart({ params: { locale } }: ICartProps) {
  const t = useTranslations('Orders')
  const tg = useTranslations('Category')
  const tm = useTranslations('Main_Page')
  unstable_setRequestLocale(locale)
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <Title title={t('orders')} direction={getLangDir(locale)} />
      <section className='flex items-center space-x-5 rtl:space-x-0 py-5'>
        <SortBy>
          <SortItem>{tm('newest')}</SortItem>
          <SortItem>{tg('price_low_high')}</SortItem>
          <SortItem>{tg('price_high_low')}</SortItem>
        </SortBy>
      </section>
      <Table>
        <TableCaption>{t('list_orders_history')}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[100px] rtl:text-right'>
              {t('order_number')}
            </TableHead>
            <TableHead className='rtl:text-right'>{t('order_items')}</TableHead>
            <TableHead className='rtl:text-right'>
              {t('order_quantity')}
            </TableHead>
            <TableHead className='rtl:text-right'>{t('order_date')}</TableHead>
            <TableHead className='rtl:text-right'>
              {t('delivery_date')}
            </TableHead>
            <TableHead className='rtl:text-right'>
              {t('order_status')}
            </TableHead>
            <TableHead className='text-right'>{t('order_total')}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <OrderProductRow />
          <OrderProductRow />
          <OrderProductRow />
          <OrderProductRow />
          <OrderProductRow />
        </TableBody>
      </Table>
    </main>
  )
}
