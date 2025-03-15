<template>
  <div>
    <button type="button"
      class="inline-flex w-12 h-12 rounded-md items-center justify-center text-lg/none bg-gold text-primary-color hover:bg-primary-light-10 dark:hover:bg-primary-dark-10 focus:bg-primary-light-10 dark:focus:bg-primary-dark-10 fixed bottom-4 right-4 hover:-translate-y-1 opacity-100 visible z-50 is-hided"
      data-web-trigger="scroll-top" aria-label="Scroll to top">
      <i class="lni lni-chevron-up"></i>
    </button>
  </div>
</template>

<script setup>
onMounted(() => {
  // Scrollspy
  function scrollspy() {
    let links = document.querySelectorAll(".ic-page-scroll");
    let scrollpos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    links.forEach(link => {
      let dataTarget = link.getAttribute("href");
      let targetElement = document.querySelector(dataTarget);
      let topminus = scrollpos + 74;

      if (targetElement) {
        if (targetElement.offsetTop <= topminus && targetElement.offsetTop + targetElement.offsetHeight > topminus) {
          document.querySelector(".ic-page-scroll")?.classList.remove("active");
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    });
  }
  window.document.addEventListener("scroll", scrollspy);

  // Scroll to top
  let scrollTopBtn = document.querySelector("[data-web-trigger=scroll-top]");
  if (scrollTopBtn) {
    window.onscroll = function () {
      scrollTopBtn.classList.toggle("is-hided", window.scrollY < 50);
    };

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

</script>

<style></style>