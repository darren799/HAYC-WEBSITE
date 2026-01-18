document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");

  // Create overlay
  const overlay = document.createElement("div");
  overlay.classList.add("nav-overlay");
  document.body.appendChild(overlay);

  function openMenu() {
    navMenu.classList.add("show");
    overlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    navMenu.classList.remove("show");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  if (hamburger && navMenu) {
    hamburger.setAttribute("role", "button");
    hamburger.setAttribute("tabindex", "0");
    hamburger.setAttribute("aria-expanded", "false");

    // Toggle menu
    hamburger.addEventListener("click", function () {
      navMenu.classList.contains("show") ? closeMenu() : openMenu();
    });

    // Keyboard accessibility
    hamburger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navMenu.classList.contains("show") ? closeMenu() : openMenu();
      }
    });

    // Close on link click
    navLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Close on overlay click
    overlay.addEventListener("click", closeMenu);

    // Close on scroll
    window.addEventListener("scroll", closeMenu);
  }
});
