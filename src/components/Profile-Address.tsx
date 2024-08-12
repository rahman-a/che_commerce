'use client'
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Label } from './ui/label'
import { Input } from './ui/input'
import SelectInput from './Select-Input'
import { Textarea } from './ui/textarea'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormContext } from 'react-hook-form'
import { RequiredAsterisk } from './Required-Asterisk'
import { getLangDir } from 'rtl-detect'
import countries from '../../countries.json'
type Props = {}

export default function ProfileAddress({}: Props) {
  const [states, setStates] = React.useState<any[]>([])
  const [cities, setCities] = React.useState<any[]>([])
  const t = useTranslations()
  const locale = useLocale() as 'en' | 'ar'
  const { control, formState, watch } = useFormContext()
  const countryName = watch('address.country')
  const governorate = watch('address.governorate')

  React.useEffect(() => {
    if (countryName) {
      countries.map((country) => {
        if (
          country.name[locale].toLocaleLowerCase() ===
          countryName.toLocaleLowerCase()
        ) {
          setStates(country.states)
        }
      })
    }
  }, [countryName, locale])
  React.useEffect(() => {
    if (governorate) {
      setCities([])
      countries.map((country) => {
        if (
          country.name[locale].toLocaleLowerCase() ===
          countryName.toLocaleLowerCase()
        ) {
          country.states.map((state) => {
            if (
              state.name[locale].toLocaleLowerCase() ===
              governorate.toLocaleLowerCase()
            ) {
              setCities(state.cities)
            }
          })
        }
      })
    }
  }, [governorate, locale, countryName])
  return (
    <>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.country'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('Profile.country')}
                <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Select
                  dir={getLangDir(locale)}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue
                      placeholder={t('Form.select_country')}
                      onFocus={(e) => e.stopPropagation()}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t('Profile.countries')}</SelectLabel>
                      {countries.map((country) => (
                        <SelectItem
                          key={country.id}
                          value={country.name[locale]}
                        >
                          {country.name[locale]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.governorate'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('Profile.governorate')}
                <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Select
                  dir={getLangDir(locale)}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Form.select_governorate')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t('Profile.governorate')}</SelectLabel>
                      {states.map((state) => (
                        <SelectItem key={state.id} value={state.name[locale]}>
                          {state.name[locale]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.region'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                {t('Profile.region')}
                <RequiredAsterisk />
              </FormLabel>
              <FormControl>
                <Select
                  dir={getLangDir(locale)}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder={t('Form.select_region')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>{t('Profile.region')}</SelectLabel>
                      {cities.map((city) => (
                        <SelectItem key={city.id} value={city.name[locale]}>
                          {city.name[locale]}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.block'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.block')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_block')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.street'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.street')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_street')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.neighborhood'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.neighborhood')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_neighborhood')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.building'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.building')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_building')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.floor'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.floor')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_floor')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.apartment'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.apartment')}</FormLabel>
              <FormControl>
                <Input placeholder={t('Form.enter_apartment')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className='grid w-full max-w-sm items-center gap-4'>
        <FormField
          control={control}
          name='address.note'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('Profile.other_details')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={t('Form.other_address_details_needed')}
                  {...field}
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
