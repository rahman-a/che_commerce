'use client'
import React from 'react'
import { getLangDir } from 'rtl-detect'
import PhoneInputNumber, { type Value } from 'react-phone-number-input'
import ar from 'react-phone-number-input/locale/ar'
import { useTranslations, useLocale } from 'next-intl'
import 'react-phone-number-input/style.css'
type Props = {
  onChange: (value: Value) => void
  phone?: Value
}

export default function PhoneInput({ onChange, phone }: Props) {
  const t = useTranslations('Profile')
  const locale = useLocale()
  return (
    <PhoneInputNumber
      placeholder={t('enter_phone_number')}
      labels={ar}
      direction={getLangDir(locale)}
      className='[&>input]:p-2 [&>input]:border [&>input]:rounded-md 
      [&>input]:rtl:text-right [&>div]:rtl:ml-1'
      value={phone}
      onChange={onChange}
    />
  )
}
