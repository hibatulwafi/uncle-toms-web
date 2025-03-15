<template>
  <section id="partnership" class="section-area !bg-primary-dark-1 !text-primary-color">
    <div class="container">
      <div class="scroll-revealed max-w-[750px] mx-auto">
        <h2 class="mb-8 text-inherit text-center text-lg md:text-xl">
          Become Our Premium Partner
        </h2>
        <p class="mb-8 text-justify ">
          We offer an exclusive opportunity to become our premium partner. With this partnership, you will gain access
          to benefits and resources that are not available to others. Let's build a future full of opportunities
          together!
        </p>

        <div class="flex justify-center items-center">
          <a href="/partnership" target="_blank"
            class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-2 px-4 rounded transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2">
            Partnership Details
          </a>
        </div>

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
