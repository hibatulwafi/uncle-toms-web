import { defineStore } from 'pinia'

export const useCmsStore = defineStore('cms', {
  state: () => ({
    about: null,
    pricing: null,
    location: null,
    caster: null,
    faq: null,
    bookingResponse: null
  }),

  actions: {
    async fetchCmsData(endpoint) {
      try {
        const response = await fetch(`/json/${endpoint}.json`)
        const data = await response.json()
        if (data) {
          this[endpoint] = data
        } else {
          console.error(`Data untuk ${endpoint} tidak ditemukan`)
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error)
      }
    },

    async postBooking(data) {
      console.log("Simulasi mengirim data booking:", data)
      this.bookingResponse = { success: true, message: "Booking berhasil!" }
    }
  }
})
