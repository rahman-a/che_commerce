import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ControllerRenderProps } from 'react-hook-form'
import { Input } from './ui/input'
type Props = {
  className?: string
}

type Field = ControllerRenderProps<
  {
    size: number
    type: string
    note: string
    quantity: number
  },
  'quantity'
>

type QuantityInputProps = {
  field: Field
}

export default function AddToCart({ className }: Props) {
  const t = useTranslations('Product')
  const to = useTranslations('Orders')

  return (
    <div
      className={cn(
        'flex items-center flex-row-reverse md:flex-row justify-evenly gap-10 sm:gap-20  md:mt-16',
        className
      )}
    >
      <FormField
        name='quantity'
        render={({ field, fieldState, formState }) => (
          <FormItem className='flex items-center space-x-2 basis-2/4'>
            <FormLabel
              htmlFor='quantity'
              className='text-base md:text-2xl rtl:ml-5 min-w-fit'
            >
              {to('order_quantity')}:
            </FormLabel>
            <QuantityInputController field={field} />
            <FormMessage />
          </FormItem>
        )}
      ></FormField>
      <button
        type='submit'
        className='bg-primary text-white h-7 w-36 md:w-40 md:h-auto 
            text-base md:text-lg font-bold py-1 px-2 md:py-2 md:px-5 rounded-lg'
      >
        {t('add_to_cart')}
      </button>
    </div>
  )
}

function QuantityInputController({ field }: QuantityInputProps) {
  return (
    <div className='relative max-w-[8rem] flex space-x-1 -translate-y-2'>
      <span
        role='button'
        className='flex items-center justify-center w-8 h-8 
                    rounded-full text-primary text-lg shadow-xl hover:shadow-md active:shadow-none font-bold'
        onClick={() =>
          field.value >= 1 && field.onChange(Number(field.value) + 1)
        }
      >
        +
      </span>
      <Input
        className='w-8 block text-primary text-base font-bold 
                      underline underline-offset-4 decoration-primary border-0 focus:outline-none 
                      p-0 text-center'
        type='text'
        id='quantity'
        {...field}
      />
      <span
        role='button'
        className='flex items-center justify-center w-8 h-8 
                    rounded-full text-primary text-lg shadow-xl 
                    hover:shadow-md active:shadow-none font-bold'
        onClick={() =>
          field.value > 1 && field.onChange(Number(field.value) - 1)
        }
      >
        -
      </span>
    </div>
  )
}
