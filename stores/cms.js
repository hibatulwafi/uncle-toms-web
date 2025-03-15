import { defineStore } from 'pinia';

export const useCmsStore = defineStore('cms', {
  state: () => ({
    about: null,
    pricing: null,
    location: null,
    capster: null,
    faq: null,
    bookingResponse: null,
    loading: true, // Tambahkan state loading
    timeout: null, // Tambahkan state timeout
  }),

  actions: {
    async fetchCmsData(endpoint) {
      this.loading = true; // Set loading ke true saat fetch dimulai
      this.timeout = setTimeout(() => {
        if (this[endpoint] === null) {
          this.loading = false;
          // Redirect ke halaman 404
          window.location.href = '/404';
        }
      }, 10000); // 10 detik timeout

      try {
        const response = await fetch(`/json/${endpoint}.json`);
        const data = await response.json();
        if (data) {
          this[endpoint] = data;
        } else {
          console.error(`Data untuk ${endpoint} tidak ditemukan`);
        }
      } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        window.location.href = '/404';
      } finally {
        this.loading = false;
        clearTimeout(this.timeout);
      }
    },

    async postBooking(data) {
      console.log('Simulasi mengirim data booking:', data);
      this.bookingResponse = { success: true, message: 'Booking berhasil!' };
    },
  },
});