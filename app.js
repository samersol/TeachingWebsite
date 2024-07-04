const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$(document).foundation();


var $scrollRevealOne = $('.scroll-reveal-one');

window.srOne = ScrollReveal({
  origin : "right",
  distance: "100px",
  scale: 1,
  duration: 1000,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

srOne.reveal('.scroll-reveal-one');

$.each($scrollRevealOne, function() {
  srOne.reveal(this, $(this).data());
});


var $scrollRevealTwo = $('.scroll-reveal-two');

window.srTwo = ScrollReveal({
  origin : "right",
  distance: "100px",
  scale: 1,
  duration: 1800,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

srTwo.reveal('.scroll-reveal-two');

$.each($scrollRevealTwo, function() {
  srTwo.reveal(this, $(this).data());
});



var $scrollRevealThr = $('.scroll-reveal-thr');

window.srThr = ScrollReveal({
  origin : "right",
  distance: "100px",
  scale: 1,
  duration: 2300,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

srThr.reveal('.scroll-reveal-thr');

$.each($scrollRevealThr, function() {
  srThr.reveal(this, $(this).data());
});







// Enable Scroll Reveal
var $scrollReveal = $('.scroll-reveal');

window.sr = ScrollReveal({
  origin: "left",
  distance: "50px",
  scale: 1,
  duration: 1000,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

sr.reveal('.scroll-reveal');

$.each($scrollReveal, function() {
  sr.reveal(this, $(this).data());
});



var $scrollRevealFade = $('.scroll-reveal-fade');

window.srFade = ScrollReveal({
  origin: 'top',
  distance: '50px',
  opacity: 0,
  scale: 1,
  duration: 1000,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

srFade.reveal('.scroll-reveal-fade');

$.each($scrollRevealFade, function() {
  srFade.reveal(this, $(this).data());
});


var $scrollRevealIntro = $('.scroll-reveal-intro');

window.srIntro = ScrollReveal({
  origin: 'bottom',
  distance: '200px',
  scale: 0.9,
  opacity: 0,
  duration: 1500,
  easing: 'cubic-bezier(0.77, 0, 0.175, 1)',
  mobile: true
});

srIntro.reveal('.scroll-reveal-intro');
$.each($scroll-reveal-intro, function() {
  srIntro.reveal(this, $(this).data());
});



