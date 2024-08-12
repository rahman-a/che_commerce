'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PhoneInput } from './Phone-Input'
import { useFormContext } from 'react-hook-form'
type Props = {}

export default function ProfileInfo({}: Props) {
  const t = useTranslations('Profile')
  const form = useFormContext()
  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                {t('name')}: <span className='text-secondary'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='placeholder:text-gray-400'
                  placeholder={t('enter_name')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                {t('phone')}: <span className='text-secondary'>*</span>
              </FormLabel>
              <FormControl>
                <PhoneInput onChange={field.onChange} phone={field.value} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                {t('email')}: <span className='text-secondary'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className='placeholder:text-gray-400'
                  placeholder={t('enter_name')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='font-bold'>
                {t('password')}: <span className='text-secondary'>*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='password'
                  className='placeholder:text-gray-400'
                  placeholder={t('enter_password')}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}
