import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const api = axios.create({
        baseURL: config.public.apiBase || 'https://api.example.com',
        timeout: 10000,
    })

    api.interceptors.request.use(
        (config) => {
            console.log(`Request ke: ${config.url}`)
            return config
        },
        (error) => Promise.reject(error)
    )

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            console.error('Terjadi kesalahan pada API:', error)
            return Promise.reject(error)
        }
    )

    return {
        provide: {
            api
        }
    }
})
