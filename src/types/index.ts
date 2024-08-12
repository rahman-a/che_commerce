import { userSchema } from '@/schema'
import { MessageKeys, useTranslations } from 'next-intl'
import { z } from 'zod'
export type TranslationKeys = MessageKeys<IntlMessages, keyof IntlMessages>
export type UseTranslationsType = ReturnType<
  typeof useTranslations<TranslationKeys>
>

export type User = z.infer<ReturnType<typeof userSchema>>
