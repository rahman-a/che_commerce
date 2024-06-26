import React from 'react'
import { useTranslations } from 'next-intl'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
type Props = {}

export default function ProfileInfo({}: Props) {
  const t = useTranslations('Profile')
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
        <Input id='phone' name='phone' type='text' />
      </div>
    </>
  )
}
