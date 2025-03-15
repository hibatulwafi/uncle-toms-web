<template>
  <section id="call-action" class="section-area !bg-primary-dark-1 !text-primary-color">
    <div class="container pb-3">
      <div class="scroll-revealed text-center  max-w-[750px] mx-auto">
        <h2 class="mb-8 text-inherit text-lg md:text-xl">
          💈 Look Sharp, Feel Confident 💈
        </h2>
        <p class="mb-8">
          A great haircut is more than just a style—it’s a statement.
          At <strong>Uncle Tom's</strong>, we provide top-notch grooming services
          with expert techniques, modern trends, and a comfortable atmosphere.
        </p>
        <!-- Booking Button -->
        <ButtonBooking />

      </div>
    </div>
  </section>
</template>

<script setup>
const selectedDateTime = ref("");
import ButtonBooking from '~/components/ButtonBooking.vue';


const bookNow = () => {
  if (!selectedDateTime.value) {
    alert("Please select a date and time first!");
  } else {
    alert(`Booking confirmed for: ${selectedDateTime.value}`);
  }
};

</script>

<style></style>
