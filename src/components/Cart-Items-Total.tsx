import React from 'react'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { Button, buttonVariants } from './ui/button'

type Props = {
  className?: string
}

export default function CartItemsTotal({ className }: Props) {
  const t = useTranslations('Cart')
  const tg = useTranslations('General')
  return (
    <div
      className={cn(
        'flex flex-col space-y-4 w-full sm:w-3/4 md:w-2/4 lg:w-2/6',
        className
      )}
    >
      <div className='flex items-center justify-between text-xl'>
        <p>{t('subtotal')}:</p>
        <p>50,00 {tg('kw')}</p>
      </div>
      <Separator className='h-1 bg-primary rounded-full' />
      <div className='flex items-center justify-between'>
        <Button
          asChild
          variant='secondary'
          className='text-white hover:text-secondary hover:border-secondary border'
        >
          <Link href='/checkout'>{t('checkout')}</Link>
        </Button>
        <Button
          variant='outline'
          className='border-secondary text-secondary'
          asChild
        >
          <Link href='/categories'>{t('continue_shopping')}</Link>
        </Button>
      </div>
    </div>
  )
}
