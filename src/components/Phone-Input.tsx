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
  name?: string
}

export function PhoneInput({ onChange, phone, name }: Props) {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <div className='flex flex-col space-y-2'>
      <PhoneInputNumber
        placeholder={t('Profile.enter_phone_number_with_no_code')}
        labels={locale === 'ar' ? ar : undefined}
        direction={getLangDir(locale)}
        className='[&>input]:p-2 [&>input]:border [&>input]:rounded-md 
      [&>input]:rtl:text-right [&>div]:rtl:ml-1 [&>input]:placeholder:text-gray-400
      [&>input]:placeholder:text-sm'
        value={phone}
        onChange={onChange}
        defaultCountry='KW'
        name={name || 'phone'}
      />
      <span className='text-xs text-gray-400 translate-x-12 rtl:-translate-x-12'>
        {t('Form.choose_country_first')}
      </span>
    </div>
  )
}
