'use client'
import React from 'react'
import OfferCollection from './Offer-Collection'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, ControllerRenderProps } from 'react-hook-form'
import { Separator } from '@/components/ui/separator'

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
    <div
      className='grid grid-col-1 xl:grid-cols-3 grid-flow-row gap-8 
    xl:gap-2 [&>div:not(:last-child)]:after:xl:flex mt-10 md:mt-0'
      id='offer-collections'
    >
      <OfferCollection />
      <OfferCollection />
      <OfferCollection />
    </div>
  )
}
