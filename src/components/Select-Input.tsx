import * as React from 'react'
import { getLangDir } from 'rtl-detect'
import { useLocale } from 'next-intl'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Props = {
  children: React.ReactNode
  className?: string
  placeholder?: string
  onValueChange: (value: string) => void
} & React.ComponentProps<typeof SelectContent>

export default function SelectInput({
  children,
  className,
  placeholder,
  onValueChange,
  ...props
}: Props) {
  const locale = useLocale()
  return (
    <Select onValueChange={onValueChange} dir={getLangDir(locale)}>
      <SelectTrigger className='w-full md:w-60'>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className={className} {...props}>
        <SelectGroup>{children}</SelectGroup>
      </SelectContent>
    </Select>
  )
}

export { SelectItem, SelectLabel }
