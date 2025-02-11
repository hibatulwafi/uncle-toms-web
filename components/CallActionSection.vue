<template>
  <section id="call-action" class="section-area !bg-body-dark-1 !text-primary-color">
    <div class="container">
      <div class="scroll-revealed text-center  max-w-[750px] mx-auto">
        <h2 class="mb-8 text-inherit">
          💈 Look Sharp, Feel Confident 💈
        </h2>
        <p class="mb-8">
          A great haircut is more than just a style—it’s a statement.
          At <strong>[Your Barbershop Name]</strong>, we provide top-notch grooming services
          with expert techniques, modern trends, and a comfortable atmosphere.
        </p>

        <div
          class="relative left-1/2 -translate-x-1/2 bg-black bg-opacity-75 shadow-lg rounded-xl p-3 md:w-[500px] w-2/4 flex items-end gap-3 z-10">

          <!-- Date & Time Selection -->
          <div class="flex-1">
            <p class="text-gray-500 text-sm mb-1">Select Your Appointment Date & Time</p>
            <input type="datetime-local" v-model="selectedDateTime"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
          </div>

          <!-- Booking Button -->
          <button
            class="px-6 py-2.5 font-semibold rounded-lg text-primary-dark-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
            @click="bookNow">
            Book Now 🔥
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const selectedDateTime = ref("");


const bookNow = () => {
  if (!selectedDateTime.value) {
    alert("Please select a date and time first!");
  } else {
    alert(`Booking confirmed for: ${selectedDateTime.value}`);
  }
};

</script>

<style></style>
