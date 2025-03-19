<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '~/components/NavbarPartnership.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center" style="background-image: url('/img/about.jpg')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">About Us</h1>
        <p class="text-lg mt-2">The story behind Uncle Tom's Barbershop.</p>
      </div>
    </div>
  </section>

  <section id="about-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Who We Are</h2>

    <div class="flex flex-col space-y-6 mt-6">
      <p class="text-base leading-relaxed">
        Uncle Tom's Barbershop is more than just a place for haircuts—it's a community where style, confidence, and
        craftsmanship come together. Founded with passion and dedication, we aim to provide the best grooming experience
        for every customer.
      </p>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Our Mission</h3>
        <p class="mt-2">
          Our mission is to deliver top-notch barbering services while creating a welcoming space for everyone. We
          believe in quality, precision, and exceptional customer care.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Why Choose Us?</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Experienced barbers with a passion for styling.</li>
          <li>High-quality grooming services for all hair types.</li>
          <li>Comfortable and stylish barbershop atmosphere.</li>
          <li>Commitment to customer satisfaction.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Our Team</h3>
        <p class="mt-2">
          Our team consists of highly skilled barbers who are not only experts in their craft but also dedicated to
          making every visit an enjoyable experience.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Visit Us</h3>
        <p class="mt-2">
          Come and experience the best haircut in town! We are located at [Your Barbershop Address], ready to serve you
          with our exceptional services.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Contact Us</h3>
        <p class="mt-2">
          Have any questions? Reach out to us at [Your Email Address or Phone Number]. We’d love to hear from you!
        </p>
      </div>
    </div>
  </section>

  <Footer />
  <ScrollUp />
</template>
