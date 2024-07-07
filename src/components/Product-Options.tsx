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
import { getLangDir } from 'rtl-detect'
import ProductDetails from './Product-Details'
import { Textarea } from './ui/textarea'
import SizesTablePopover from './Sizes-Table-Popover'
import { demoProductDescription } from '@/demo/products'
import AddToCart from './Add-To-Cart'
type Props = {}

// Define the schema for the form fields [sizes, types,note, quantity]
const schema = z.object({
  size: z.number(),
  type: z.string(),
  note: z.string(),
  quantity: z.number(),
})

export default function ProductOptions({}: Props) {
  const t = useTranslations('Product')
  const tm = useTranslations('Main_Page')
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
      <form action='' onSubmit={(e) => e.preventDefault()}>
        <div className='flex md:items-center flex-col md:flex-row gap-10 md:gap-20'>
          <FormField
            name='size'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex items-center justify-between md:space-x-2 rtl:space-x-0 basis-2/4'>
                <FormLabel
                  htmlFor='size'
                  className='text-xl md:text-2xl mr-2 md:mr-0 min-w-fit'
                >
                  {t('size')}:
                </FormLabel>
                <div className='flex grow items-center space-x-3 rtl:space-x-0'>
                  <SizesTablePopover className='rtl:ml-2' />
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
                className='flex items-center justify-between 
              md:space-x-5 rtl:space-x-0 basis-2/4'
              >
                <FormLabel
                  htmlFor='type'
                  className='text-xl md:text-2xl mr-2 rtl:mr-0 rtl:ml-2 md:mr-0 md:ml-0 min-w-fit'
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
        <div className='flex flex-col md:flex-row justify-between gap-10 mt-10'>
          <FormField
            name='size'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex flex-col basis-2/4'>
                <FormLabel
                  htmlFor='note'
                  className='flex items-center space-x-10 rtl:space-x-0'
                >
                  <span className='text-xl md:text-2xl rtl:ml-10'>
                    {t('notes')}:
                  </span>
                  <span className='text-xs sm:text-sm text-gray-500'>
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
          <AddToCart className='md:hidden' />
          <ProductDetails
            description={demoProductDescription}
            isTitle
            className='basis-2/4 [&_ul]:list-disc [&_ul]:pl-4 [&_ul]:rtl:pr-4'
          />
        </div>
        <AddToCart className='hidden md:flex' />
      </form>
    </Form>
  )
}
