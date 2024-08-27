'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { useState, type PropsWithChildren } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '@/shared/lib/tanstack-query/client'

export type ProvidersProps = PropsWithChildren

export function Providers({ children }: ProvidersProps) {
  // eslint-disable-next-line react/hook-use-state -- no need set state
  const [client] = useState(() => queryClient)
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  )
}
