import { queryOptions } from '@tanstack/react-query'

export const users = {
  all: () =>
    queryOptions({
      queryKey: ['users'],
    }),
  detail: (userId: string) =>
    queryOptions({
      queryKey: ['users', userId],
      queryFn: () => {
        return { id: userId, name: 'Luke' }
      },
    }),
}

// queries/index.ts
export const queryFactory = {
  users,
}
