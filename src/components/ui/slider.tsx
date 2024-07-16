import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, min, max, step, value, onValueChange, ...props }, ref) => {
  const initialValue = Array.isArray(value) ? value : ([min, max] as number[])
  const [localValues, setLocalValues] = useState(initialValue)
  const t = useTranslations('General')
  const handleValueChange = (newValues: number[]) => {
    setLocalValues(newValues)
    if (onValueChange) {
      onValueChange(newValues)
    }
  }

  return (
    <SliderPrimitive.Root
      ref={ref}
      min={min}
      max={max}
      step={step}
      value={localValues}
      onValueChange={handleValueChange}
      className={cn(
        'relative flex w-3/4 touch-none select-none items-center',
        className
      )}
      {...props}
    >
      <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/60'>
        <SliderPrimitive.Range className='absolute h-full bg-black' />
      </SliderPrimitive.Track>
      {localValues.map((value, index) => (
        <React.Fragment key={index}>
          <div
            className='absolute text-center w-max bg-slate-800 text-white px-1 rounded-sm'
            style={{
              left: `calc(${((value - min!) / (max! - min!)) * 100}% + -22px)`,
              bottom: `15px`,
            }}
          >
            <span
              className='absolute top-[90%] left-[38%] border-[6px] border-t-slate-800 
              border-x-transparent border-b-transparent'
            ></span>
            <p
              className='text-xs flex items-center justify-center rtl:flex-row-reverse 
            space-x-1 rtl:space-x-0'
            >
              <span className='rtl:ml-1'>{value}</span>
              <span>{t('kw')}</span>
            </p>
          </div>
          <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
        </React.Fragment>
      ))}
    </SliderPrimitive.Root>
  )
})

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
