'use client'
import React from 'react'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'
type Props = {
  section: string
  className?: string
}

export default function ScrollToSection({ section, className }: Props) {
  // scroll to section
  const scrollToSection = () => {
    const element = document.getElementById(section)
    element?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <button
      className={cn(
        `flex items-center justify-center absolute bottom-10 
        left-2/4 bg-gray-600/50 p-2 rounded-full w-14 h-14 -translate-x-2/4 z-20 text-white`,
        className
      )}
      onClick={scrollToSection}
    >
      <ArrowDown size={30} />
    </button>
  )
}
