'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { getLangDir } from 'rtl-detect'
type Props = {}

// Define the schema for the form fields [sizes, types,note, quantity]
const schema = z.object({
  size: z.number(),
  type: z.string(),
  note: z.string(),
  quantity: z.number(),
})

export default function ProductEdit({}: Props) {
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
        <div className='flex flex-col gap-5 rtl:space-x-reverse'>
          <FormField
            name='size'
            control={form.control}
            render={({ field }) => (
              <FormItem className='flex items-center justify-between md:space-x-2 rtl:space-x-reverse basis-2/4'>
                <FormLabel
                  htmlFor='size'
                  className='w-24 lg:w-36 rtl:lg:w-28 text-lg md:text-2xl mr-2 rtl:mr-0 md:mr-0 min-w-fit'
                >
                  {t('size')}:
                </FormLabel>
                <div className='flex grow items-center space-x-3 rtl:space-x-0'>
                  <Select dir={getLangDir(locale)}>
                    <FormControl>
                      <SelectTrigger className='h-9 [&_span]:text-xs [&_span]:md:text-base [&_span]:font-light'>
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
                  className='w-24 text-lg md:text-2xl mr-2 rtl:mr-0 rtl:ml-5 md:mr-0 md:ml-0 min-w-fit'
                >
                  {t('abaya_type')}:
                </FormLabel>
                <Select dir={getLangDir(locale)}>
                  <FormControl>
                    <SelectTrigger className='h-9 [&_span]:text-xs [&_span]:md:text-base [&_span]:font-light'>
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
      </form>
    </Form>
  )
}
