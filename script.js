'use strict';

// SLIDER CONTROL
const testimonialSlider = document.querySelector('.slider');
const testimonialRight = document.querySelector(".slider-right");
const testimonialLeft = document.querySelector(".slider-left");


testimonialRight.addEventListener('click',function(){
  testimonialSlider.style.marginLeft='-80rem';
  testimonialSlider.style.transition='all 0.5s';
  testimonialLeft.style.display = "block";
  this.style.display='none';
})

testimonialLeft.addEventListener("click", function () {
  testimonialSlider.style.marginLeft = "0.5rem";
  testimonialSlider.style.transition = "all 0.5s";
  testimonialRight.style.display='block';
  this.style.display='none';
});

testimonialRight.addEventListener('mouseenter',function(){
  this.style.cursor='pointer';
})

testimonialLeft.addEventListener("mouseenter", function () {
  this.style.cursor = "pointer";
});