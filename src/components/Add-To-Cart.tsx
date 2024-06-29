'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { z } from 'zod'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Label } from './ui/label'
import { getLangDir } from 'rtl-detect'
import ProductDetails from './Product-Details'
import { Textarea } from './ui/textarea'
import ProductQuantityControl from './Product-Quantity-Control'
import { Input } from './ui/input'
import SizesTablePopover from './Sizes-Table-Popover'
type Props = {}

const demoProductDescription = {
  en: {
    title: 'The Product consist of Abaya, Dress and scarf',
    points: [
      { id: 1, text: 'color: Black' },
      { id: 2, text: 'Front opening design' },
      { id: 3, text: 'net bracelets' },
      { id: 4, text: 'sleeveless dress' },
      { id: 5, text: 'Dry Clean' },
    ],
  },
  ar: {
    title: 'المنتج يتكون من عباية وفستان وشال',
    points: [
      { id: 1, text: 'اللون: أسود' },
      { id: 2, text: 'تصميم فتحة أمامية' },
      { id: 3, text: 'أساور شبكية' },
      { id: 4, text: 'فستان بلا أكمام' },
      { id: 5, text: 'تنظيف جاف' },
    ],
  },
}

// Define the schema for the form fields [sizes, types,note, quantity]
const schema = z.object({
  size: z.number(),
  type: z.string(),
  note: z.string(),
  quantity: z.number(),
})

export default function AddToCart({}: Props) {
  const t = useTranslations('Product')
  const tm = useTranslations('Main_Page')
  const to = useTranslations('Orders')
  const locale = useLocale()
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      size: 0,
      type: '',
      note: '',
      quantity: 1,
    },
  })
  return (
    <Form {...form}>
      <form action=''>
        <div className='flex md:items-center flex-col md:flex-row gap-10 md:gap-20'>
          <FormField
            name='size'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex flex-col md:flex-row md:items-center justify-between md:space-x-5 rtl:space-x-0 basis-2/4'>
                <FormLabel
                  htmlFor='size'
                  className='text-2xl rtl:ml-5 min-w-fit'
                >
                  {t('size')}:
                </FormLabel>
                <div className='flex grow items-center space-x-5 rtl:space-x-0'>
                  <Select dir={getLangDir(locale)}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={t('select_abaya_size')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent id='size' className='max-w-md md:max-w-none'>
                      <SelectItem value='sm'>{t('small')}</SelectItem>
                      <SelectItem value='md'>{t('medium')}</SelectItem>
                      <SelectItem value='lg'>{t('large')}</SelectItem>
                      <SelectItem value='xl'>{t('x_large')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <SizesTablePopover />
                </div>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name='type'
            control={form.control}
            render={({ field }) => (
              <FormItem
                className='flex flex-col md:flex-row md:items-center justify-between 
              md:space-x-5 rtl:space-x-0 basis-2/4'
              >
                <FormLabel
                  htmlFor='type'
                  className='text-2xl rtl:ml-5 min-w-fit'
                >
                  {t('abaya_type')}:
                </FormLabel>
                <Select dir={getLangDir(locale)}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={t('select_abaya_type')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent id='type'>
                    <SelectItem value='blank'>{tm('blank')}</SelectItem>
                    <SelectItem value='embroidery'>
                      {tm('embroidery')}
                    </SelectItem>
                    <SelectItem value='practical'>{tm('practical')}</SelectItem>
                    <SelectItem value='occasions'>{tm('occasions')}</SelectItem>
                    <SelectItem value='shak'>{tm('shak')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-between gap-20 mt-20'>
          <ProductDetails
            description={demoProductDescription}
            className='basis-2/4 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:rtl:pr-4'
          />
          <FormField
            name='size'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex flex-col basis-2/4'>
                <FormLabel
                  htmlFor='note'
                  className='flex items-center space-x-10 rtl:space-x-0'
                >
                  <span className='text-2xl rtl:ml-10'>{t('notes')}:</span>
                  <span className='text-sm text-gray-500'>
                    {t('note_example')}
                  </span>
                </FormLabel>
                <Textarea
                  id='note'
                  placeholder={t('example_placeholder')}
                  className='h-full'
                />
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>
        <div className='flex md:justify-evenly gap-10 sm:gap-20 mt-20'>
          <FormField
            name='quantity'
            control={form.control}
            render={({ field, fieldState, formState }) => (
              <FormItem className='flex items-center space-x-2 basis-2/4'>
                <FormLabel
                  htmlFor='quantity'
                  className='text-2xl rtl:ml-5 min-w-fit'
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
            className='bg-secondary text-white translate-y-4 md:translate-y-0 h-8 md:h-auto 
            text-sm md:text-lg font-bold py-1 px-2 md:py-2 md:px-5 rounded-lg'
          >
            {t('add_to_cart')}
          </button>
        </div>
      </form>
    </Form>
  )
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

function QuantityInputController({ field }: QuantityInputProps) {
  return (
    <div className='relative max-w-[8rem] flex space-x-1 -translate-y-2'>
      <span
        role='button'
        className='flex items-center justify-center w-10 h-10 
                  rounded-full text-secondary text-lg shadow-xl hover:shadow-md active:shadow-none font-bold'
        onClick={() =>
          field.value >= 1 && field.onChange(Number(field.value) + 1)
        }
      >
        +
      </span>
      <Input
        className='w-8 block text-secondary text-lg font-bold 
                    underline underline-offset-4 decoration-secondary border-0 focus:outline-none 
                    p-0 text-center'
        type='text'
        id='quantity'
        {...field}
      />
      <span
        role='button'
        className='flex items-center justify-center w-10 h-10 
                  rounded-full text-secondary text-lg shadow-xl 
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
