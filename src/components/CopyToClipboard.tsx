'use client'
import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Button } from './ui/button'
import { Clipboard, CheckCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

type Props = {
  text: string
  className?: string
  title?: string
}

export default function CopyToClipboardComponent({
  text,
  className,
  title,
}: Props) {
  const [isCopied, setIsCopied] = React.useState(false)

  React.useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [isCopied])
  return (
    <CopyToClipboard text={text} onCopy={() => setIsCopied(true)}>
      <Button
        variant='outline'
        size='icon'
        onClick={(e) => e.stopPropagation()}
        className={cn('w-6 h-6', className)}
        title={title ?? 'Copy to clipboard'}
      >
        {isCopied ? <CheckCheck size={12} /> : <Clipboard size={12} />}
      </Button>
    </CopyToClipboard>
  )
}
