'use client'

import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'span' | 'li'
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref as never}
      className={cn(
        'transition-[opacity,transform] duration-1000 ease-out motion-reduce:transition-none',
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
