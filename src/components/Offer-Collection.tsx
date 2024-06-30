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
}

// Define the schema for the form fields [sizes, types,note, quantity]

export default function OfferCollection({ className }: Props) {
  const t = useTranslations('Product')
  const tm = useTranslations('Main_Page')
  const to = useTranslations('Orders')
  const locale = useLocale()

  return (
    <div
      className={cn(
        `relative flex flex-col h-full space-y-10 after:content-[""] after:w-1 after:bg-primary
        after:h-60 after:absolute after:bottom-8 after:right-10 after:rtl:right-auto after:rtl:left-10 
        after:z-10 after:rounded-t-2xl after:hidden`,
        className
      )}
    >
      <h2 className='text-2xl sm:text-3xl tracking-wider'>
        {t('first_choice')}
      </h2>
      <div className='flex flex-col justify-center space-y-5'>
        {/* /////////////////////////////////////////////// */}
        <div className='flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 md:space-x-3 rtl:space-x-0'>
          <div className='flex items-center space-x-3 w-24'>
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
            <SelectTrigger className='xl:w-60 rtl:!mr-2'>
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
        <div className='flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 space-x-0 md:space-x-3 rtl:space-x-0'>
          <div className='flex items-center space-x-1 w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('size')}
            </Label>
            <SizesTablePopover className='w-4 h-4 md:w-6 md:h-6 text-xs rtl:!mr-1' />
          </div>
          <Select dir={getLangDir(locale)}>
            <SelectTrigger className='xl:w-60 rtl:!mr-2'>
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
        <div className='flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 space-x-0 md:space-x-3 rtl:space-x-0'>
          <div className='flex items-center space-x-3 w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('type')}
            </Label>
          </div>
          <Select dir={getLangDir(locale)}>
            <SelectTrigger className='xl:w-60 rtl:!mr-2'>
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
        <div className='flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 space-x-0 md:space-x-3 rtl:space-x-0'>
          <div className='flex items-center space-x-3 w-24'>
            <Label className='text-lg md:text-2xl' htmlFor='abaya'>
              {t('notes')}
            </Label>
          </div>
          <Textarea
            className='xl:w-60 rtl:!mr-2'
            placeholder={t('enter_notes')}
          />
        </div>
      </div>
    </div>
  )
}
