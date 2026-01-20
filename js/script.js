document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav ul li a");

  if (!hamburger || !navMenu) return;

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

  hamburger.setAttribute("role", "button");
  hamburger.setAttribute("tabindex", "0");
  hamburger.setAttribute("aria-expanded", "false");

  hamburger.addEventListener("click", () => {
    navMenu.classList.contains("show") ? closeMenu() : openMenu();
  });

  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navMenu.classList.contains("show") ? closeMenu() : openMenu();
    }
  });

  navLinks.forEach(link => link.addEventListener("click", closeMenu));
  overlay.addEventListener("click", closeMenu);
  window.addEventListener("scroll", closeMenu);
});
