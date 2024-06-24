import React, { useEffect, useState } from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

type SliderProps = React.ComponentPropsWithoutRef<
  typeof SliderPrimitive.Root
> & {
  formatLabel?: (value: number) => React.ReactNode
  onValueChange?: (value: number[]) => void
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(
  (
    { className, min, max, step, formatLabel, value, onValueChange, ...props },
    ref
  ) => {
    const initialValue = Array.isArray(value) ? value : ([min, max] as number[])
    const [localValues, setLocalValues] = useState(initialValue)

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
        <SliderPrimitive.Track className='relative h-1.5 w-full grow overflow-hidden rounded-full bg-slate-500'>
          <SliderPrimitive.Range className='absolute h-full bg-black' />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            <div
              className='absolute text-center w-max bg-slate-800 text-white px-1 rounded-sm'
              style={{
                left: `calc(${
                  ((value - min!) / (max! - min!)) * 100
                }% + -22px)`,
                bottom: `15px`,
              }}
            >
              <span
                className='absolute top-[90%] left-[38%] border-[6px] border-t-slate-800 
              border-x-transparent border-b-transparent'
              ></span>
              <span className='text-xs'>
                {formatLabel ? formatLabel(value) : value}
              </span>
            </div>
            <SliderPrimitive.Thumb className='block h-4 w-4 rounded-full border border-primary bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50' />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    )
  }
)

Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
