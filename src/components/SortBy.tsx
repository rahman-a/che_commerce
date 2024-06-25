import React from 'react'
import { useTranslations } from 'next-intl'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

type Props = {
  children: React.ReactNode
}

export default function SortBy({ children }: Props) {
  const t = useTranslations('Category')
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-between space-x-5 border-2 
          border-black rounded-xl px-3 min-w-36 md:min-w-44'
        >
          <span> {t('sort')} </span>
          <Play size={16} fill='black' className='rotate-90 rtl:!ml-0' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-44'>
        <div className='flex flex-col rtl:items-end'>{children}</div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { DropdownMenuItem as SortItem }
