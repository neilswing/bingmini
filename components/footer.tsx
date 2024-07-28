import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-zinc-500',
        className
      )}
      {...props}
    >
      Open source AI chatbot built by{' '}
      <ExternalLink href="https://bingblong.com">
        Swing Media
      </ExternalLink>
      , <ExternalLink href="https://google.com">Google</ExternalLink> All Rights Reserved @2024 .
    </p>
  )
}
