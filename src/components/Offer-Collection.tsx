'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select'
import { getLangDir } from 'rtl-detect'
import { cn } from '@/lib/utils'
import { Textarea } from './ui/textarea'
import { Input } from './ui/input'
import SizesTablePopover from './Sizes-Table-Popover'
import { Label } from './ui/label'
import ProductDetails from './Product-Details'
import { demoProductDescription, abayaTypes, abayaSizes } from '@/demo/products'
type Props = {
  className?: string
  group: string
}

// Define the schema for the form fields [sizes, types,note, quantity]

export default function OfferCollection({ className, group }: Props) {
  const t = useTranslations('Product')
  const tm = useTranslations('Main_Page')
  const to = useTranslations('Orders')
  const locale = useLocale()

  return (
    <div
      className={cn(
        `relative flex flex-col h-full space-y-5 lg:space-y-20 after:content-[""] after:w-0.5 after:bg-primary
        after:h-60 after:absolute after:bottom-8 after:right-10 after:rtl:right-auto after:rtl:left-10 
        after:z-10 after:rounded-t-2xl after:hidden`,
        className
      )}
    >
      <h2 className='text-sm sm:text-xl md:text-3xl xl:text-4xl font-semibold xl:font-medium'>
        {group}
      </h2>
      <div className='flex flex-col justify-center space-y-4'>
        {/* /////////////////////////////////////////////// */}
        <div className='flex items-center space-x-3 md:space-y-0 md:space-x-3 rtl:space-x-reverse'>
          <div className='flex items-center justify-between space-x-3 rtl:space-x-reverse w-20 md:w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('abaya')}
            </Label>
            <SizesTablePopover className='w-4 h-4 md:w-6 md:h-6 text-xs'>
              <ProductDetails
                description={demoProductDescription}
                className='[&>article]:bg-white'
              />
            </SizesTablePopover>
          </div>
          <Select dir={getLangDir(locale)}>
            <SelectTrigger className='w-64 h-9 md:w-full [&_span]:text-xs [&_span]:md:text-base [&_span]:font-light xl:w-60'>
              <SelectValue placeholder={t('select_abaya')} />
            </SelectTrigger>
            <SelectContent id='abaya'>
              <SelectGroup>
                {abayaTypes(t).map((type) => (
                  <SelectItem key={type.id} value={type.name}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* /////////////////////////////////////////////// */}
        <div className='flex items-center space-x-3 md:space-y-0  md:space-x-3 rtl:space-x-reverse'>
          <div className='flex items-center justify-between space-x-3 rtl:space-x-reverse w-20 md:w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('size')}
            </Label>
            <SizesTablePopover className='w-4 h-4 text-xs' />
          </div>
          <Select dir={getLangDir(locale)}>
            <SelectTrigger className='w-64 h-9 md:w-full [&_span]:text-xs [&_span]:md:text-base [&_span]:font-light xl:w-60'>
              <SelectValue placeholder={t('select_abaya_size')} />
            </SelectTrigger>
            <SelectContent id='abaya'>
              <SelectGroup>
                {abayaSizes(t).map((size) => (
                  <SelectItem key={size.id} value={size.name}>
                    {size.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* /////////////////////////////////////////////// */}
        <div className='flex items-center space-x-3 md:space-y-0  md:space-x-3 rtl:space-x-reverse'>
          <div className='flex items-center justify-between space-x-3 rtl:space-x-reverse w-20 md:w-[7rem] lg:w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('type')}
            </Label>
          </div>
          <Select dir={getLangDir(locale)}>
            <SelectTrigger
              className='w-64 h-9 md:w-full [&_span]:text-xs [&_span]:md:text-base [&_span]:font-light 
            xl:w-60 sm:rtl:!mr-2 lg:rtl:!mr-4 xl:rtl:!mr-2'
            >
              <SelectValue placeholder={t('select_abaya_type')} />
            </SelectTrigger>
            <SelectContent id='abaya'>
              <SelectGroup>
                {abayaTypes(t).map((type) => (
                  <SelectItem key={type.id} value={type.name}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* /////////////////////////////////////////////// */}
        <div className='flex items-center  md:space-y-0 space-x-3 md:space-x-3 rtl:space-x-reverse'>
          <div className='flex items-center justify-between space-x-3 rtl:space-x-reverse w-20 md:w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('notes')}
            </Label>
          </div>
          <Textarea
            className='w-64 md:w-full xl:w-60 sm:rtl:!mr-2 
            placeholder:text-xs placeholder:font-light md:placeholder:text-base'
            placeholder={t('enter_notes')}
          />
        </div>
      </div>
    </div>
  )
}
