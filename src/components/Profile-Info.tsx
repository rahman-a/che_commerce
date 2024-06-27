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
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='name' aria-required>
          {t('name')} <span className='text-secondary'>*</span>
        </Label>
        <Input id='name' name='name' type='text' />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='email' aria-required>
          {t('email')} <span className='text-secondary'>*</span>
        </Label>
        <Input id='email' name='email' type='email' />
      </div>
      <div className='grid w-full max-w-sm items-center gap-1.5'>
        <Label htmlFor='phone' aria-required>
          {t('phone')} <span className='text-secondary'>*</span>
        </Label>
        <PhoneInput onChange={setPhone} phone={phone} />
      </div>
    </>
  )
}
