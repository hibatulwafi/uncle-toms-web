export default defineNuxtPlugin(() => {
  if (process.client) {
    "use strict";

    // Page loading
    const pageLoading = document.querySelector(".page-loading");
    if (pageLoading) {
      window.addEventListener("load", () => {
        pageLoading.classList.add("hide");
        setTimeout(() => {
          pageLoading.style.display = "none";
        }, 1000);
      });
    }

    // Navbar
    const navbar = document.querySelector(".ic-navbar"),
      navbarToggler = navbar?.querySelector("[data-web-toggle=navbar-collapse]");

    navbarToggler?.addEventListener("click", function () {
      const dataTarget = this.dataset.webTarget,
        targetElement = document.getElementById(dataTarget),
        isExpanded = this.ariaExpanded === "true";

      if (!targetElement) return;

      navbar.classList.toggle("menu-show");
      this.ariaExpanded = !isExpanded;
      navbarToggler.innerHTML = navbar.classList.contains("menu-show")
        ? '<i class="lni lni-close"></i>'
        : '<i class="lni lni-menu"></i>';
    });

    // Sticky navbar
    window.addEventListener("scroll", function () {
      if (this.scrollY >= 72) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }
    });

    // Web theme
    const webTheme = document.querySelector("[data-web-trigger=web-theme]"),
      html = document.querySelector("html");

    window.addEventListener("load", function () {
      let theme = localStorage.getItem("My_WebTheme") || "light";
      webTheme.innerHTML = theme === "dark"
        ? '<i class="lni lni-night"></i>'
        : '<i class="lni lni-sun"></i>';
      html.dataset.webTheme = theme;
      localStorage.setItem("My_WebTheme", theme);

      console.log(theme);
    });

    webTheme?.addEventListener("click", function () {
      let theme = localStorage.getItem("My_WebTheme") === "dark" ? "light" : "dark";
      webTheme.innerHTML = theme === "dark"
        ? '<i class="lni lni-night"></i>'
        : '<i class="lni lni-sun"></i>';
      localStorage.setItem("My_WebTheme", theme);
      html.dataset.webTheme = theme;
    });

    // Scrollspy
    function scrollspy() {
      let links = document.querySelectorAll(".ic-page-scroll"),
        scrollpos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

      links.forEach(link => {
        let dataTarget = link.getAttribute("href"),
          targetElement = document.querySelector(dataTarget),
          topminus = scrollpos + 74;

        if (targetElement) {
          if (targetElement.offsetTop <= topminus && targetElement.offsetTop + targetElement.offsetHeight > topminus) {
            document.querySelector(".ic-page-scroll").classList.remove("active");
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
  }
});
