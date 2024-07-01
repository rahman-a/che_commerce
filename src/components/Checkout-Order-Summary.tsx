'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { Label } from './ui/label'
import { Input } from './ui/input'

type Props = {}

export default function CheckoutOrderSummary({}: Props) {
  const t = useTranslations('Orders')
  const tg = useTranslations('General')
  return (
    <div className='flex flex-col space-y-5'>
      <form
        action=''
        className='flex flex-col space-y-2'
        onClick={(e) => e.preventDefault()}
      >
        <Label className='text-lg font-bold'>{t('enter_coupon')}</Label>
        <div className='flex flex-col space-y-2'>
          <Input type='text' placeholder={t('enter_coupon')} />
          <Button className='bg-primary w-full hover:bg-primary'>
            {t('apply_coupon')}
          </Button>
        </div>
      </form>
      <h3 className='text-2xl font-bold tracking-wide'>{t('order_summary')}</h3>
      <ul className='flex flex-col space-y-1 w-full'>
        <li className='flex items-center justify-between w-full'>
          <span>{t('items')}</span>
          <span>730.00 {tg('kw')}</span>
        </li>
        <li className='flex items-center justify-between w-full'>
          <span>{t('shipping_handling')}</span>
          <span>30.00 {tg('kw')}</span>
        </li>
        <li className='flex items-center justify-between w-full'>
          <span>{t('total')}</span>
          <span>760.00 {tg('kw')}</span>
        </li>
        <li className='flex items-center justify-between w-full'>
          <span>{t('coupon_applied')}</span>
          <span>-60.00 {tg('kw')}</span>
        </li>
        <Separator className='!my-4' />
        <li className='flex items-center justify-between w-full'>
          <span className='text-2xl text-secondary font-bold'>
            {t('order_total')}
          </span>
          <span className='text-2xl text-secondary font-bold'>
            700.00 {tg('kw')}
          </span>
        </li>
      </ul>
      <Button className='bg-primary w-full hover:bg-primary'>
        {t('place_order')}
      </Button>
    </div>
  )
}
