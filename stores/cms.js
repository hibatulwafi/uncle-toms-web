import { defineStore } from 'pinia';

export const useCmsStore = defineStore('cms', {
  state: () => ({
    about: null,
    pricing: null,
    location: null,
    capster: null,
    faq: null,
    bookingResponse: null,
    loading: true,
    timeout: null,
    kemitraan: [],
    booking: [],

  }),

  actions: {
    async fetchCmsData(endpoint) {
      this.loading = true;
      this.timeout = setTimeout(() => {
        if (this[endpoint] === null) {
          this.loading = false;
          window.location.href = '/404';
        }
      }, 10000);

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

    async saveBooking(data) {
      try {
        const response = await $fetch('/api/booking', {
          method: 'POST',
          body: data,
        });
        if (response.success) {
          this.booking.push(data);
          return { success: true, message: 'Data berhasil disimpan.' };
        } else {
          return { success: false, message: 'Gagal menyimpan data .' };
        }
      } catch (error) {
        console.error('Error saving :', error);
        return { success: false, message: 'Terjadi kesalahan saat menyimpan data .' };
      }
    },

    async saveKemitraan(data) {
      try {
        const response = await $fetch('/api/kemitraan', {
          method: 'POST',
          body: data,
        });
        if (response.success) {
          this.kemitraan.push(data);
          return { success: true, message: 'Data kemitraan berhasil disimpan.' };
        } else {
          return { success: false, message: 'Gagal menyimpan data kemitraan.' };
        }
      } catch (error) {
        console.error('Error saving kemitraan:', error);
        return { success: false, message: 'Terjadi kesalahan saat menyimpan data kemitraan.' };
      }
    },
  },
});