import React from 'react'
import { StickyNote } from 'lucide-react'
import { useTranslations } from 'next-intl'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
type Props = {
  className?: string
  btnClassName?: string
}

export default function ProductNote({ className, btnClassName }: Props) {
  const t = useTranslations('Cart')
  const tg = useTranslations('General')
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={btnClassName}>
          <StickyNote size={20} />
        </button>
      </DialogTrigger>
      <DialogContent className={cn('sm:max-w-[425px]', className)}>
        <DialogHeader className='rtl:text-right mt-2'>
          <DialogTitle>{t('product_note_title')}</DialogTitle>
          <DialogDescription>{t('product_note_description')}</DialogDescription>
        </DialogHeader>
        <div className='flex flex-col space-y-2'>
          <Textarea
            placeholder={t('type_note_here')}
            className='outline-none border border-gray-300 rounded-md p-2'
          />
        </div>
        <DialogFooter>
          <Button
            type='submit'
            className='text-black hover:bg-primary rtl:ml-2'
          >
            {tg('save')}
          </Button>
          <DialogClose asChild>
            <Button
              type='button'
              className='text-white hover:bg-red-800'
              variant='secondary'
            >
              {tg('close')}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
