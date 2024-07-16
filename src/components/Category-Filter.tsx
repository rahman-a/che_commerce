'use client'
import React from 'react'
import { Play } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Slider } from '@/components/ui/slider'
import SizesSlider from './Sizes-Slider'

type Props = {}

const abayasType = [
  {
    id: 1,
    name: 'flooring',
  },
  {
    id: 2,
    name: 'embroidery',
  },
  {
    id: 3,
    name: 'opening',
  },
]

export default function CategoryFilter({}: Props) {
  const t = useTranslations('Category')
  const tg = useTranslations('General')
  const tm = useTranslations('Main_Page')
  const [range, setRange] = React.useState([120, 570])
  const [type, setType] = React.useState<string>()
  const handleRangeChange = (value: number[]) => {
    setRange(value)
  }
  const abayasType = [
    {
      id: 1,
      name: tm('embroidery'),
    },
    {
      id: 2,
      name: tm('practical'),
    },
    {
      id: 3,
      name: tm('occasions'),
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild className='py-1 rtl:ml-5'>
        <Button
          variant='outline'
          className='flex items-center justify-between space-x-5 border-2 
          border-black rounded-xl px-3 min-w-36 md:min-w-44'
        >
          <span> {t('filter')} </span>
          <Play size={16} fill='black' className='rotate-90 rtl:!ml-0' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full max-w-[23rem] md:max-w-lg overflow-hidden rounded-lg opacity-80'>
        <div className='flex flex-col items-center justify-center space-y-10'>
          <h3 className='text-primary text-xl'>{t('price_range')}</h3>
          <Slider
            defaultValue={[120, 500]}
            max={570}
            min={120}
            step={10}
            value={range}
            onValueChange={handleRangeChange}
          />
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-primary text-xl'>{t('sizes')}</h3>
          <SizesSlider />
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-primary text-xl'>{t('abaya_types')}</h3>
          <div className='flex items-center flex-wrap space-x-4 space-x-reverse'>
            {abayasType.map((item) => (
              <Button
                key={item.id}
                variant='outline'
                className={cn(
                  'border border-black mr-2 mb-2 rounded-md capitalize h-auto p-2 hover:border-primary hover:bg-primary hover:text-white',
                  type === item.name && 'bg-primary border-primary text-white'
                )}
                onClick={() => setType(item.name)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
