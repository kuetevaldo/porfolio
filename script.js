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

  const form = document.getElementById("contact-form");

  function showToast(message, type) {
    const toast = document.getElementById("toast");

    toast.innerText = message;
    toast.className = "show " + type;

    setTimeout(() => {
      toast.className = "";
    }, 3000);
  }

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
     "service_lkf6llo",   
      "template_c6phvmc",  
      this
    )
    .then(() => {
      showToast("Message sent successfully ✅", "success");
      form.reset();
    })
    .catch((error) => {
      showToast("Failed to send ❌", "error");
      console.log(error);
    });
  });
