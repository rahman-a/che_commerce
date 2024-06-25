import React from 'react'
import { useTranslations } from 'next-intl'
import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from './ui/badge'
import OrdersItems from './Orders-Items'
type Props = {}

export default function OrderProductRow({}: Props) {
  const t = useTranslations('General')
  const to = useTranslations('Orders')
  return (
    <TableRow>
      <TableCell className='font-medium'>#85462</TableCell>
      <TableCell>
        <OrdersItems />
      </TableCell>
      <TableCell>12</TableCell>
      <TableCell>12/05/2024</TableCell>
      <TableCell>30/05/2024</TableCell>
      <TableCell>
        <Badge className='text-secondary' variant='outline'>
          {to('in_progress')}
        </Badge>
      </TableCell>
      <TableCell className='text-right'>250.00 {t('kw')}</TableCell>
    </TableRow>
  )
}
