'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Separator } from '@/components/ui/separator'
import OfferCollection from './Offer-Collection'
import AddToCart from './Add-To-Cart'
import { Form } from './ui/form'

type Props = {}

// Define the schema for the form fields [sizes, types,note, quantity]
const schema = z.object({
  first_choice: z.object({
    name: z.string(),
    size: z.string(),
    type: z.string(),
    note: z.string(),
  }),
  second_choice: z.object({
    name: z.string(),
    size: z.string(),
    type: z.string(),
    note: z.string(),
  }),
  third_choice: z.object({
    name: z.string(),
    size: z.string(),
    type: z.string(),
    note: z.string(),
  }),
})

export default function OfferCollections({}: Props) {
  const t = useTranslations('Product')
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      first_choice: {
        name: '',
        size: '',
        type: '',
        note: '',
      },
      second_choice: {
        name: '',
        size: '',
        type: '',
        note: '',
      },
      third_choice: {
        name: '',
        size: '',
        type: '',
        note: '',
      },
    },
  })

  return (
    <form id='offer-collections'>
      <div
        className='grid grid-col-1 xl:grid-cols-3 grid-flow-row gap-8 
    xl:gap-2 [&>div:not(:last-child)]:after:xl:flex'
      >
        <OfferCollection group={t('first_choice')} />
        <div className='block xl:hidden w-full h-1 bg-primary rounded-full -my-1'></div>
        <OfferCollection group={t('second_choice')} />
        <div className='block xl:hidden w-full h-1 bg-primary rounded-full -my-1'></div>
        <OfferCollection group={t('third_choice')} />
      </div>
      <Form {...form}>
        <div className='flex justify-start md:justify-center px-1 rtl:px-0'>
          <AddToCart className='[&>div]:hidden mt-8 [&>button]:lg:w-64 [&>button]:lg:text-xl' />
        </div>
      </Form>
    </form>
  )
}
