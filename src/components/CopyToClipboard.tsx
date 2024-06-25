'use client'
import React from 'react'
import { Button } from './ui/button'
import { Clipboard, CheckCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
type Props = {
  text: string
  className?: string
  title?: string
}

export default function CopyToClipboard({ text, className, title }: Props) {
  const [isCopied, setIsCopied] = React.useState(false)
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
    } catch (error: any) {
      throw new Error('Failed to copy: ' + error.message)
    }
  }

  React.useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])
  return (
    <Button
      variant='outline'
      size='icon'
      className={cn('w-6 h-6', className)}
      onClick={copyToClipboard}
      title={title ?? 'Copy to clipboard'}
    >
      {isCopied ? <CheckCheck size={12} /> : <Clipboard size={12} />}
    </Button>
  )
}
