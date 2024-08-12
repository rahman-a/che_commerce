import { z } from 'zod'
import { type Value } from 'react-phone-number-input'
import { UseTranslationsType } from '@/types'

export const AddressSchema = (t: UseTranslationsType) =>
  z.object({
    id: z.string().optional(),
    country: z.string().min(1, {
      message: t('Form.field_required_value', { field: t('Profile.country') }),
    }),
    governorate: z.string().min(1, {
      message: t('Form.field_required_value', {
        field: t('Profile.governorate'),
      }),
    }),
    region: z.string().min(1, {
      message: t('Form.field_required_value', { field: t('Profile.region') }),
    }),
    block: z.string().optional(),
    street: z.string().optional(),
    neighborhood: z.string().optional(),
    building: z.string().optional(),
    floor: z.string().optional(),
    apartment: z.string().optional(),
    type: z.enum(['home', 'office', 'other']).optional(),
    primary: z.boolean().default(true).optional(),
    note: z.string().optional(),
  })

export const userSchema = (t: UseTranslationsType) =>
  z.object({
    name: z.string().min(1, {
      message: t('Form.field_required_value', { field: t('Profile.name') }),
    }),
    email: z
      .string()
      .email()
      .min(1, {
        message: t('Form.field_required_value', { field: t('Profile.email') }),
      }),
    password: z.string().min(6),
    phone: z.custom<Value>().refine((value) => value.length > 6, {
      message: t('Form.field_required_value', { field: t('Profile.phone') }),
      path: ['phone'],
    }),
    address: AddressSchema(t),
  })
