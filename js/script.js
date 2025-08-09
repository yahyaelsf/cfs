// Toggle for all dropdowns
document.querySelectorAll('.dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const menu = btn.nextElementSibling;
    menu.classList.toggle('hidden');
    // Close others
    document.querySelectorAll('.dropdown-menu').forEach(m => {
      if (m !== menu) m.classList.add('hidden');
    });
  });
});

// Mobile dropdown toggles
document.querySelectorAll('.mobile-dropdown-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('hidden');
  });
});

// Mobile menu toggle
document.getElementById('mobileToggle').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Language toggle (simple example)
function toggleLang(button) {
  if (button.innerText === 'EN') {
    button.innerText = 'AR';
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  } else {
    button.innerText = 'EN';
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        logo.classList.remove('md:w-28');
        logo.classList.remove('md:h-28');
        logo.classList.remove('md:mt-14');
        logo.classList.add('md:w-16');
        logo.classList.add('md:h-16');
        navbar.classList.add('shadow-lg');
      } else {
        logo.classList.remove('md:w-16');
        logo.classList.add('md:w-28');
        logo.classList.remove('md:h-16');
        logo.classList.add('md:h-28');
        logo.classList.add('md:mt-14');
        navbar.classList.remove('shadow-lg');
      }
    });
  });
      