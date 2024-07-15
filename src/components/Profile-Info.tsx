'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { type Value } from 'react-phone-number-input'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import PhoneInput from './Phone-Input'
type Props = {}

export default function ProfileInfo({}: Props) {
  const t = useTranslations('Profile')
  const [phone, setPhone] = React.useState<Value>()

  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='name' className='font-bold' aria-required>
          {t('name')}: <span className='text-secondary'>*</span>
        </Label>
        <Input
          id='name'
          name='name'
          type='text'
          className='placeholder:text-gray-400'
          placeholder={t('enter_name')}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='phone' className='font-bold' aria-required>
          {t('phone')}: <span className='text-secondary'>*</span>
        </Label>
        <PhoneInput onChange={setPhone} phone={phone} />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <Label htmlFor='email' className='font-bold' aria-required>
          {t('email')}: <span className='text-secondary'>*</span>
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          className='placeholder:text-gray-400'
          placeholder={t('enter_email')}
        />
      </div>
    </>
  )
}
