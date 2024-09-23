import { type Method } from 'axios'

export interface Endpoint {
  url: string
  method: Method
  auth?: boolean
}

const createEndpoint = ({
  url,
  method,
  auth = false,
}: {
  url: string
  method: Method
  auth?: boolean
}): Endpoint => ({
  url,
  method,
  auth,
})

export const API_ENDPOINT = {
  auth: {
    signIn: () => createEndpoint({ url: '/api/auth/oauth', method: 'POST' }),
    refreshToken: () =>
      createEndpoint({ url: '/api/auth/refresh', method: 'POST' }),
  },
  user: {
    getCurrentUser: () =>
      createEndpoint({ url: '/api/users/me', method: 'GET', auth: true }),
    patchUser: () =>
      createEndpoint({ url: '/api/users/me', method: 'PATCH', auth: true }),
    deleteUser: () =>
      createEndpoint({ url: '/api/users/me', method: 'DELETE', auth: true }),
  },
}
