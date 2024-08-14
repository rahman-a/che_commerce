'use client'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

type LoginWithProps = {
  resetType: string
  setResetType: React.Dispatch<React.SetStateAction<string>>
  className?: string
}

export default function LoginWith({
  resetType,
  setResetType,
  className,
}: LoginWithProps) {
  const t = useTranslations()
  return (
    <div className={cn('flex flex-col space-y-4 my-2', className)}>
      <Label>{t('Form.reset_with')}</Label>
      <RadioGroup
        defaultValue={resetType}
        onValueChange={setResetType}
        className='flex rtl:flex-row-reverse items-center space-x-2'
      >
        <div
          className='flex rtl:flex-row-reverse items-center space-x-2 
                rtl:space-x-reverse cursor-pointer'
        >
          <RadioGroupItem value='email' id='r1' />
          <Label htmlFor='r1'>{t('Profile.email')}</Label>
        </div>
        <div
          className='flex rtl:flex-row-reverse items-center space-x-2 
                rtl:space-x-reverse cursor-pointer'
        >
          <RadioGroupItem value='phone' id='r2' />
          <Label htmlFor='r2'>{t('Profile.phone')}</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
