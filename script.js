"use strict";

// SLIDER CONTROL
const testimonialSlider = document.querySelector(".slider");
const testimonialRight = document.querySelector(".slider-right");
const testimonialLeft = document.querySelector(".slider-left");
const toggleMobile = document.querySelector(".mobile-toggler");
const mobileNav = document.querySelector(".mobile-nav");
testimonialRight.addEventListener("click", function () {
  testimonialSlider.style.marginLeft = "-100rem";
  testimonialSlider.style.transition = "all 0.5s";
});

testimonialLeft.addEventListener("click", function () {
  testimonialSlider.style.marginLeft = "0.5rem";
  testimonialSlider.style.transition = "all 0.5s";
});

testimonialRight.addEventListener("mouseenter", function () {
  this.style.cursor = "pointer";
});

testimonialLeft.addEventListener("mouseenter", function () {
  this.style.cursor = "pointer";
});

// Function to toggle the mobile navigation menu
function toggleMobileNav() {
  // Toggle the 'display-mobile-nav' class to show/hide the mobile navigation
  mobileNav.classList.toggle("display-mobile-nav");
}

// Add event listener to the mobile-toggler element to toggle the mobile nav
toggleMobile.addEventListener("click", toggleMobileNav);
