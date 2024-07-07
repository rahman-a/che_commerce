import React from 'react'
import Link from 'next/link'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import { Separator } from './ui/separator'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import myfatoorah from '@/images/fatoura.png'
import knet from '@/images/knet.png'
import visa from '@/images/visa.webp'
import Image from 'next/image'
import OrderProductCard from './Cart-Product-Card'
type Props = {}

export default function CheckoutOrderDetails({}: Props) {
  const t = useTranslations('Orders')
  const tg = useTranslations('General')
  const locale = useLocale()
  return (
    <div className='flex flex-col space-y-5'>
      <div className='flex flex-col space-y-2 lg:space-y-auto lg:flex-row justify-between'>
        <h3 className='text-xl font-bold'>{t('shipping_address')}</h3>
        <div className='flex lg:justify-center grow'>
          <ul>
            <li>Abdelaziz Mohamed</li>
            <li>35 Elsary St</li>
            <li>Kuwait, Darba, Josh</li>
          </ul>
        </div>
        <Link href='/profile' className='text-primary'>
          {tg('change')}
        </Link>
      </div>
      <Separator />
      <div className='flex flex-col space-y-3 lg:space-y-auto lg:flex-row lg:items-center justify-between'>
        <h3 className='text-xl font-bold'>{t('payment_method')}</h3>
        <div className='flex lg:justify-center grow'>
          <RadioGroup defaultValue='comfortable' dir={getLangDir(locale)}>
            <div className='flex items-center space-x-2 rtl:space-x-auto'>
              <RadioGroupItem
                value='default'
                id='r1'
                className='text-secondary'
              />
              <Label
                htmlFor='knet'
                className='flex items-center space-x-2 rtl:space-x-auto rtl:!mr-2'
              >
                <Image src={knet} alt='knet' width={25} height={25} />
                <span className='rtl:!mr-2'>{t('knet')}</span>
              </Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='comfortable'
                id='r2'
                className='text-secondary'
              />
              <Label
                htmlFor='mc-vs'
                className='flex items-center space-x-2 rtl:space-x-auto rtl:!mr-2'
              >
                <Image src={visa} alt='visa' width={25} height={25} />
                <span className='rtl:!mr-2'>{t('mc_visa')}</span>
              </Label>
            </div>
            <div className='flex items-center space-x-2'>
              <RadioGroupItem
                value='compact'
                id='r3'
                className='text-secondary'
              />
              <Label
                htmlFor='fatoorah'
                className='flex items-center space-x-2 rtl:space-x-auto rtl:!mr-2'
              >
                <Image
                  src={myfatoorah}
                  alt='myfatoorah'
                  width={25}
                  height={25}
                />
                <span className='rtl:!mr-2'>{t('myfatoora')}</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <Separator />
      <div className='flex flex-col space-y-5'>
        <h3 className='text-xl font-bold'>{t('review_items')}</h3>
        <div className='flex flex-col space-y-5 justify-center grow'>
          <OrderProductCard />
          <OrderProductCard />
          <OrderProductCard />
        </div>
      </div>
    </div>
  )
}
