'use client'

import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

/**
 * Reveals a traced symbol mark with a directional sweep, simulating the
 * mark being "resolved" out of noise the first time it enters view.
 */
export function TracedMark({
  src,
  alt,
  className,
  size = 96,
}: {
  src: string
  alt: string
  className?: string
  size?: number
}) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('relative', className)}
      style={{ width: size, height: size }}
    >
      <img
        src={src || '/placeholder.svg'}
        alt={alt}
        width={size}
        height={size}
        className={cn(
          'h-full w-full object-contain transition-opacity duration-[1400ms] ease-out motion-reduce:transition-none',
          inView ? 'opacity-90' : 'opacity-0',
        )}
        style={{
          maskImage: inView
            ? 'linear-gradient(100deg, black 0%, black 100%)'
            : 'linear-gradient(100deg, black 0%, transparent 0%)',
          WebkitMaskImage: inView
            ? 'linear-gradient(100deg, black 0%, black 100%)'
            : 'linear-gradient(100deg, black 0%, transparent 0%)',
          transition: 'mask-image 1400ms ease-out, -webkit-mask-image 1400ms ease-out, opacity 1400ms ease-out',
        }}
      />
    </div>
  )
}
