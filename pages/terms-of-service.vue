<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '~/components/NavbarPartnership.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center" style="background-image: url('/img/terms.jpg')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Terms of Service</h1>
        <p class="text-lg mt-2">Understand the terms of using our services.</p>
      </div>
    </div>
  </section>

  <section id="terms-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Terms & Conditions</h2>

    <div class="flex flex-col space-y-6 mt-6">
      <p class="text-base leading-relaxed">
        These Terms of Service ("Terms") govern your access to and use of Uncle Tom's Barbershop website and services.
        By using our services, you agree to these Terms.
      </p>

      <div class="text-base">
        <h3 class="font-semibold text-xl">1. Use of Our Services</h3>
        <p class="mt-2">
          Our services are intended for personal and non-commercial use. You agree to use our services lawfully and
          ethically.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">2. Account Registration</h3>
        <p class="mt-2">
          If you create an account on our website, you are responsible for maintaining the confidentiality of your
          account information and password.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">3. Booking and Payments</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>All bookings are subject to availability.</li>
          <li>Payments must be completed as per the service terms.</li>
          <li>We reserve the right to cancel any booking due to unforeseen circumstances.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">4. Cancellations & Refunds</h3>
        <p class="mt-2">
          Cancellation and refund policies are subject to our company’s terms. Refund requests must be submitted within
          a reasonable timeframe.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">5. Prohibited Activities</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Using our services for illegal or fraudulent purposes.</li>
          <li>Harassing, abusing, or harming our staff or customers.</li>
          <li>Copying or modifying our website content without permission.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">6. Service Modifications</h3>
        <p class="mt-2">
          We reserve the right to modify or discontinue any aspect of our services at any time without prior notice.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">7. Limitation of Liability</h3>
        <p class="mt-2">
          We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">8. Changes to Terms</h3>
        <p class="mt-2">
          We may update these Terms periodically. Your continued use of our services constitutes acceptance of the
          updated Terms.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">9. Contact</h3>
        <p class="mt-2">
          If you have any questions about these Terms, please contact us at [Your Email Address or Phone Number].
        </p>
      </div>
    </div>
  </section>

  <Footer />
  <ScrollUp />
</template>
