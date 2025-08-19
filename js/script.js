
document.addEventListener("DOMContentLoaded", () => {
    // Desktop dropdowns
 const wrappers = document.querySelectorAll(".dropdown");

  wrappers.forEach(wrapper => {
    const menu = wrapper.querySelector(".dropdown-menu");
    let closeTimeout;

    wrapper.addEventListener("mouseenter", () => {
      clearTimeout(closeTimeout); // إذا دخل الماوس، ألغِ الإغلاق
      document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.add("hidden"));
      menu.classList.remove("hidden");
    });

    wrapper.addEventListener("mouseleave", () => {
      // أضف تأخير بسيط قبل الإغلاق
      closeTimeout = setTimeout(() => {
        menu.classList.add("hidden");
      }, 200); // 200 ملي ثانية كافية
    });
  });


  // Mobile dropdowns
  const mobileButtons = document.querySelectorAll(".mobile-dropdown-btn");
  mobileButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Close all others first
      document.querySelectorAll(".mobile-dropdown-menu").forEach(menu => {
        if (menu !== btn.nextElementSibling) menu.classList.add("hidden");
      });
      // Toggle the clicked one
      btn.nextElementSibling.classList.toggle("hidden");
    });
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
        logo.classList.remove('w-20');
        logo.classList.remove('h-20');
        logo.classList.remove('mt-6');
        logo.classList.add('w-16');
        logo.classList.add('h-16');
      } else {
        logo.classList.remove('md:w-16');
        logo.classList.add('md:w-28');
        logo.classList.remove('md:h-16');
        logo.classList.add('md:h-28');
        logo.classList.add('md:mt-14');
        navbar.classList.remove('shadow-lg');
        logo.classList.add('w-20');
        logo.classList.add('h-20');
        logo.classList.add('mt-6');
        logo.classList.remove('w-16');
        logo.classList.remove('h-16');
      }
    });
  });
      
 document.querySelectorAll('#statsSection .bg-white').forEach(card => {
        const svg = card.querySelector('.animated-svg');
        if (!svg) return;

        const dashLength = svg.getAttribute('stroke-dasharray') || 500;

        card.addEventListener('mouseenter', () => {
            // Reset stroke dashoffset to full length immediately (invisible stroke)
            svg.style.transition = 'none';
            svg.style.strokeDashoffset = dashLength;

            // Force reflow to apply style immediately
            void svg.offsetWidth;

            // Animate stroke dashoffset to 0 (fully visible stroke)
            svg.style.transition = 'stroke-dashoffset 1.2s ease';
            svg.style.strokeDashoffset = '0';
        });

        // Optional: keep it painted after hover, no action needed on mouse leave
    });
      const btn = document.getElementById("langDropdownBtn");
  const menu = document.getElementById("langDropdownMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add("hidden");
    }
  });