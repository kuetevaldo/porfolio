type='text/javascript'>document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})

function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// ================= NAVBAR =================
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// TOGGLE MENU
hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// CLOSE MENU WHEN CLICKING ANYWHERE
document.addEventListener('click', () => {
  navLinks.classList.remove('active');
  hamburger.classList.remove('active');
});

// PREVENT CLOSING WHEN CLICKING INSIDE MENU
navLinks.addEventListener('click', (e) => {
  e.stopPropagation();
});


// ================= SCROLL ANIMATION =================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
// CLOSE MENU WHEN CLICKING A LINK
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});