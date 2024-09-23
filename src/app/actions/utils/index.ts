import { type AxiosRequestConfig } from 'axios'
import { unstable_cache as unstableCache } from 'next/cache'
import { client } from '@/shared/lib/axios/client'
import { type Endpoint } from './api-endpoint'

type Cache = Parameters<typeof unstableCache>[2]

export const apiClient = async <T>({
  endpoint,
  data,
  cache,
}: {
  endpoint: Endpoint
  data?: Record<string, unknown>
  cache?: Cache
}) => {
  const config = {
    url: endpoint.url,
    method: endpoint.method,
    headers: {} as Record<string, string>,
    data,
  } satisfies AxiosRequestConfig
  // Attach Authorization header if required
  //   if (endpoint.auth) {
  //     const session = await auth()
  //     if (!session) {
  //       throw new Error('Unauthorized')
  //     }
  //     config.headers.Authorization = `Bearer ${session.user.accessToken}`
  //   }
  if (cache) {
    return unstableCache(
      async () => {
        return (await client<T>(config)).data
      },
      [config.url],
      cache
    )()
  }

  return (await client<T>(config)).data
}
