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
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='country' className='hidden md:flex' aria-required>
          {t('country')}: <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='country'
          onValueChange={(value) => console.log('Country: ', value)}
          placeholder={t('enter_country')}
        >
          <SelectLabel>{t('select_country')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='governorate' className='hidden md:flex' aria-required>
          {t('governorate')}: <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='governorate'
          onValueChange={(value) => console.log('governorate: ', value)}
          placeholder={t('enter_governorate')}
        >
          <SelectLabel>{t('select_governorate')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='region' className='hidden md:flex' aria-required>
          {t('region')}: <span className='text-secondary'>*</span>
        </Label>
        <SelectInput
          id='region'
          onValueChange={(value) => console.log('region: ', value)}
          placeholder={t('enter_region')}
        >
          <SelectLabel>{t('select_region')}</SelectLabel>
          <SelectItem value='kuwait'>Kuwait</SelectItem>
          <SelectItem value='egypt'>Egypt</SelectItem>
          <SelectItem value='usa'>USA</SelectItem>
          <SelectItem value='canada'>Canada</SelectItem>
        </SelectInput>
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='block'>{t('block')}:</Label>
        <Input
          name='block'
          className='placeholder:text-gray-400'
          placeholder={t('enter_block')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='street'>{t('street')}:</Label>
        <Input
          name='street'
          className='placeholder:text-gray-400'
          placeholder={t('enter_street')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='neighborhood'>{t('neighborhood')}:</Label>
        <Input
          name='neighborhood'
          className='placeholder:text-gray-400'
          placeholder={t('enter_neighborhood')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='building'>{t('building')}:</Label>
        <Input
          name='building'
          className='placeholder:text-gray-400'
          placeholder={t('enter_building')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='floor'>{t('floor')}:</Label>
        <Input
          name='floor'
          className='placeholder:text-gray-400'
          placeholder={t('enter_floor')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='apartment'>{t('apartment')}:</Label>
        <Input
          name='apartment'
          className='placeholder:text-gray-400'
          placeholder={t('enter_apartment')}
        />
      </div>
      {/* <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='address'>
          {t('address')}
        </Label>
        <Textarea
          id='address'
          name='address'
          className='placeholder:text-gray-400'
          placeholder={t('enter_address')}
        />
      </div> */}
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='details'>{t('other_details')}:</Label>
        <Textarea
          id='details'
          name='details'
          className='placeholder:text-gray-400'
          placeholder={t('other_details_needed')}
        />
      </div>
    </>
  )
}
