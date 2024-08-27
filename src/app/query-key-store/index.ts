import { mergeQueryKeys } from '@lukemorales/query-key-factory'

// // queries/users.ts
// export const users = createQueryKeys('users', {
//   all: null,
//   detail: (userId: string) => ({
//     queryKey: [userId],
//     queryFn: () => api.getUser(userId),
//   }),
// });

// // queries/todos.ts
// export const todos = createQueryKeys('todos', {
//   detail: (todoId: string) => [todoId],
//   list: (filters: TodoFilters) => ({
//     queryKey: [{ filters }],
//     queryFn: (ctx) => api.getTodos({ filters, page: ctx.pageParam }),
//     contextQueries: {
//       search: (query: string, limit = 15) => ({
//         queryKey: [query, limit],
//         queryFn: (ctx) => api.getSearchTodos({
//           page: ctx.pageParam,
//           filters,
//           limit,
//           query,
//         }),
//       }),
//     },
//   }),
// });

// queries/index.ts
export const queries = mergeQueryKeys()
