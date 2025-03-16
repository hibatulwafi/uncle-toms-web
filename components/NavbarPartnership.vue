<template>
  <header class="ic-navbar absolute left-0 top-0 z-40 flex w-full items-center bg-transparent" role="banner"
    aria-label="Navigation bar">
    <div class="container">
      <div class="ic-navbar-container relative md:mx-8 flex items-center justify-between">
        <div class="w-60 lg:w-56 max-w-full px-5">
          <a href="." class="ic-navbar-logo block w-full py-5 text-golden-color">
            <img src="/assets/img/ut-logo.png" class="h-16">
          </a>
        </div>
        <div class="flex w-full items-center justify-between px-5">
          <div>
            <button type="button"
              class="ic-navbar-toggler absolute right-4 top-1/2 block -translate-y-1/2 rounded-md px-3 py-[6px] text-[22px]/none text-golden-color ring-primary focus:ring-2 lg:hidden"
              data-web-toggle="navbar-collapse" data-web-target="navbarMenu" aria-expanded="false"
              aria-label="Toggle navigation menu">
              <i class="lni lni-menu-hamburger-1"></i>
            </button>

            <nav id="navbarMenu"
              class="ic-navbar-collapse absolute right-4 top-[80px] w-full max-w-[250px] rounded-lg hidden bg-primary-light-1 py-5 shadow-lg dark:bg-primary-dark-1 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6">
              <ul class="block lg:flex" role="menu" aria-label="Navigation menu">

                <li class="group relative">
                  <a href="./"
                    class="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-golden dark:text-body-dark-12 lg:mx-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-golden-color lg:dark:text-golden-color lg:group-hover:text-golden lg:group-hover:opacity-70 active"
                    role="menuitem">Home</a>
                </li>

                <li class="group relative">
                  <a href="#form"
                    class="ic-page-scroll mx-8 flex py-2 text-base font-medium text-body-light-12 group-hover:text-golden dark:text-body-dark-12 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-golden-color lg:dark:text-golden-color lg:group-hover:text-golden lg:group-hover:opacity-70"
                    role="menuitem">Join</a>
                </li>

              </ul>
            </nav>
          </div>
          <div class="flex items-center justify-end pr-[52px] lg:pr-0">
            <button type="button" class="inline-flex items-center text-golden-color text-[24px]/none"
              aria-label="Switch theme" data-web-trigger="web-theme">
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
onMounted(() => {
  // Navbar
  const navbar = document.querySelector(".ic-navbar");
  const navbarToggler = navbar?.querySelector("[data-web-toggle=navbar-collapse]");

  navbarToggler?.addEventListener("click", function () {
    const dataTarget = this.dataset.webTarget;
    const targetElement = document.getElementById(dataTarget);
    const isExpanded = this.ariaExpanded === "true";

    if (!targetElement) return;

    navbar.classList.toggle("menu-show");
    this.ariaExpanded = !isExpanded;
    navbarToggler.innerHTML = navbar.classList.contains("menu-show")
      ? '<i class="lni lni-xmark"></i>'
      : '<i class="lni lni-menu-hamburger-1"></i>';
  });

  // Sticky navbar
  window.addEventListener("scroll", function () {
    if (this.scrollY >= 72) {
      navbar?.classList.add("sticky");
    } else {
      navbar?.classList.remove("sticky");
    }
  });

});
</script>

<style></style>