'use client'
import React from 'react'
import { Play } from 'lucide-react'
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
  const [range, setRange] = React.useState([120, 570])
  const [type, setType] = React.useState<string>()
  const handleRangeChange = (value: number[]) => {
    setRange(value)
  }
  return (
    <Dialog>
      <DialogTrigger asChild className='py-1'>
        <Button
          variant='outline'
          className='flex items-center justify-between space-x-5 border-2 
          border-black rounded-xl px-3 min-w-36 md:min-w-44'
        >
          <span> Filter </span>
          <Play size={16} fill='black' className='rotate-90 rtl:!ml-0' />
        </Button>
      </DialogTrigger>
      <DialogContent className='w-full sm:max-w-[425px] md:max-w-lg overflow-hidden'>
        <div className='flex flex-col items-center justify-center space-y-10'>
          <h3 className='text-secondary text-xl'>Price Range</h3>
          <Slider
            defaultValue={[120, 500]}
            max={570}
            min={120}
            step={10}
            value={range}
            onValueChange={handleRangeChange}
            formatLabel={(value) => `${value} kw`}
          />
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-secondary text-xl'>The Size</h3>
          <SizesSlider />
        </div>
        <div className='flex flex-col items-center justify-center space-y-3'>
          <h3 className='text-secondary text-xl'>The Abaya Type</h3>
          <div className='flex items-center justify-between space-x-2 flex-wrap'>
            {abayasType.map((item) => (
              <Button
                key={item.id}
                variant='outline'
                className={cn(
                  'border-2 border-black rounded-xl capitalize hover:bg-secondary hover:text-white',
                  type === item.name && 'bg-secondary text-white'
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
