import axios, { type AxiosError } from 'axios'

export const client = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청에 대한 오류 처리
client.interceptors.response.use(
  (response) => {
    // 성공적인 응답 처리
    return response
  },
  (error: AxiosError) => {
    const url = error.config?.url

    // eslint-disable-next-line no-console -- log error
    console.error('🐛 에러 발생:', url, error.message)
    return Promise.reject(error)
  }
)
