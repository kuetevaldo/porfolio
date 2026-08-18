// ================= MOBILE NAVIGATION =================

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

function closeNavigation() {
  if (!hamburger || !navLinks) return;

  navLinks.classList.remove('active');
  hamburger.classList.remove('active');

  hamburger.setAttribute('aria-expanded', 'false');
  hamburger.setAttribute('aria-label', 'Open navigation menu');
}

if (hamburger && navLinks) {

  hamburger.addEventListener('click', (event) => {
    event.stopPropagation();

    const isOpen = navLinks.classList.toggle('active');

    hamburger.classList.toggle('active', isOpen);

    hamburger.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

    hamburger.setAttribute(
      'aria-label',
      isOpen
        ? 'Close navigation menu'
        : 'Open navigation menu'
    );
  });


  // Prevent outside click handler from firing
  // when clicking inside the mobile menu.
  navLinks.addEventListener('click', (event) => {
    event.stopPropagation();
  });


  // Close menu when clicking outside.
  document.addEventListener('click', closeNavigation);


  // Close menu after clicking a navigation link.
  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });


  // Close menu with Escape key.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeNavigation();
    }
  });

}


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll('.reveal');

if (
  'IntersectionObserver' in window &&
  revealElements.length
) {

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {
          entry.target.classList.add('active');

          // Stop observing after the element
          // has appeared once.
          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.12
    }
  );


  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

} else {

  // Fallback for older browsers.
  revealElements.forEach((element) => {
    element.classList.add('active');
  });

}


// ================= TOAST MESSAGE =================

let toastTimer;

function showToast(message, type = '') {

  const toast = document.getElementById('toast');

  if (!toast) return;


  // Prevent multiple timers from overlapping.
  window.clearTimeout(toastTimer);


  toast.textContent = message;

  toast.className = type
    ? `show ${type}`
    : 'show';


  toastTimer = window.setTimeout(() => {
    toast.className = '';
  }, 3000);

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById('contact-form');

if (contactForm) {

  contactForm.addEventListener(
    'submit',
    function (event) {

      event.preventDefault();


      // Make sure EmailJS loaded correctly.
      if (typeof emailjs === 'undefined') {

        showToast(
          'Email service is unavailable. Please try again later.',
          'error'
        );

        return;
      }


      const submitButton = contactForm.querySelector(
        'button[type="submit"]'
      );


      // Prevent duplicate submissions.
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }


      emailjs
        .sendForm(
          'service_lkf6llo',
          'template_c6phvmc',
          contactForm
        )

        .then(() => {

          showToast(
            'Message sent successfully ✅',
            'success'
          );

          contactForm.reset();

        })

        .catch((error) => {

          console.error(
            'EmailJS error:',
            error
          );

          showToast(
            'Failed to send. Please try again.',
            'error'
          );

        })

        .finally(() => {

          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
          }

        });

    }
  );

}