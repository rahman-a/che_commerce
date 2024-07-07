'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { Label } from './ui/label'
import { Input } from './ui/input'
import SelectInput, { SelectItem, SelectLabel } from './Select-Input'
import { Textarea } from './ui/textarea'

type Props = {}

export default function ProfileAddress({}: Props) {
  const t = useTranslations('Profile')
  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='country' aria-required>
          {t('country')} <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='country'
          onValueChange={(value) => console.log('Country: ', value)}
        >
          <SelectLabel>{t('select_country')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='governorate' aria-required>
          {t('governorate')} <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='governorate'
          onValueChange={(value) => console.log('governorate: ', value)}
        >
          <SelectLabel>{t('select_governorate')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='region' aria-required>
          {t('region')} <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='region'
          onValueChange={(value) => console.log('region: ', value)}
        >
          <SelectLabel>{t('select_region')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='address' aria-required>
          {t('address')} <span className='text-secondary'>*</span>
        </Label>
        <Textarea id='address' name='address' />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='details' aria-required>
          {t('other_details')} <span className='text-secondary'>*</span>
        </Label>
        <Textarea id='details' name='details' />
      </div>
    </>
  )
}
