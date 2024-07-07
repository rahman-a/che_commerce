import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useTranslations } from 'next-intl'
import { Button } from './ui/button'
import { List } from 'lucide-react'
import OrderProductCard from './Cart-Product-Card'
type Props = {}

export default function OrdersItems({}: Props) {
  const t = useTranslations('General')
  const tDemo = useTranslations('Demo')
  const DemoNote = tDemo('note_example')
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <List size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent className='w-full sm:max-w-xl'>
        <div className='flex flex-col space-y-2 py-4'>
          <OrderProductCard isOrder note={DemoNote} />
          <OrderProductCard isOrder />
          <OrderProductCard isOrder note={DemoNote} />
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
