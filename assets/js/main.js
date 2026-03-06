/* ============================================
   MRF Website - Main JavaScript
   Vanilla ES6+ | No frameworks
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ------------------------------------------
     1. Header Scroll Effect
     ------------------------------------------ */
  const initHeaderScroll = () => {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  /* ------------------------------------------
     2. Mobile Navigation
     ------------------------------------------ */
  const initMobileNav = () => {
    const hamburger = document.querySelector('.hamburger');
    const navOverlay = document.querySelector('.nav-overlay');
    const header = document.querySelector('.header');
    if (!hamburger || !navOverlay || !header) return;

    const closeNav = () => {
      hamburger.classList.remove('active');
      navOverlay.classList.remove('active');
      header.classList.remove('nav-open');
      document.body.style.overflow = '';
    };

    const toggleNav = () => {
      const isOpen = hamburger.classList.toggle('active');
      navOverlay.classList.toggle('active');
      header.classList.toggle('nav-open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    hamburger.addEventListener('click', toggleNav);

    navOverlay.querySelectorAll('.nav__link, .btn').forEach(link => {
      link.addEventListener('click', closeNav);
    });
  };

  /* ------------------------------------------
     3. Hero Carousel
     ------------------------------------------ */
  const initHeroCarousel = () => {
    const slidesContainer = document.querySelector('.hero__slides');
    const slides = document.querySelectorAll('.hero__slides .hero__slide');
    const dots = document.querySelectorAll('.hero__dot');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    let autoPlayInterval;

    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === 0);
    });

    const updateDots = () => {
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    };

    const goToSlide = (index) => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (index + slides.length) % slides.length;
      slides[currentIndex].classList.add('active');
      updateDots();
    };

    const startAutoPlay = () => {
      autoPlayInterval = setInterval(() => goToSlide(currentIndex + 1), 5000);
    };

    const resetAutoPlay = () => {
      clearInterval(autoPlayInterval);
      startAutoPlay();
    };

    // Dot click navigation
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoPlay();
      });
    });

    startAutoPlay();

    // Swipe support for mobile
    if (slidesContainer) {
      let startX = 0;
      let startY = 0;

      slidesContainer.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
      }, { passive: true });

      slidesContainer.addEventListener('touchend', (e) => {
        const diffX = startX - e.changedTouches[0].screenX;
        const diffY = Math.abs(e.changedTouches[0].screenY - startY);

        if (Math.abs(diffX) > 50 && diffY < 100) {
          goToSlide(diffX > 0 ? currentIndex + 1 : currentIndex - 1);
          resetAutoPlay();
        }
      });
    }
  };

  /* ------------------------------------------
     4. Tab System
     ------------------------------------------ */
  const initTabs = () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetId);
        if (!targetPanel) return;

        const tabContainer = btn.closest('.tabs');
        const tabsWrapper = tabContainer ? tabContainer.closest('.tabs-wrapper') : null;
        const panelContainer = tabsWrapper ? tabsWrapper.parentElement : document;

        const siblingBtns = tabContainer
          ? tabContainer.querySelectorAll('.tab-btn')
          : tabButtons;
        siblingBtns.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });

        panelContainer.querySelectorAll('.tab-panel').forEach(p => {
          p.classList.remove('active');
        });

        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        targetPanel.classList.add('active');
      });
    });

    // Open tab from URL hash
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      const matchingBtn = document.querySelector(`.tab-btn[data-tab="${hashId}"]`);
      if (matchingBtn) {
        matchingBtn.click();
      }
    }
  };

  /* ------------------------------------------
     5. Counter Animation
     ------------------------------------------ */
  const initCounters = () => {
    const counters = document.querySelectorAll('.stat__number[data-target]');
    if (!counters.length) return;

    const DURATION = 2000;

    const animateCounter = (el) => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      const noPlus = el.hasAttribute('data-no-plus');
      const start = performance.now();

      const step = (timestamp) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        el.textContent = current.toLocaleString() + (noPlus ? '' : '+');

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString() + (noPlus ? '' : '+');
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(counter => observer.observe(counter));
  };

  /* ------------------------------------------
     6. Accordion
     ------------------------------------------ */
  const initAccordion = () => {
    const headers = document.querySelectorAll('.accordion__header');
    if (!headers.length) return;

    headers.forEach(header => {
      header.addEventListener('click', () => {
        const isOpen = header.classList.contains('active');
        const body = header.nextElementSibling;

        // Close all
        headers.forEach(h => {
          h.classList.remove('active');
          h.setAttribute('aria-expanded', 'false');
          const b = h.nextElementSibling;
          if (b && b.classList.contains('accordion__body')) {
            b.style.maxHeight = '0';
          }
        });

        // Open if was closed
        if (!isOpen && body) {
          header.classList.add('active');
          header.setAttribute('aria-expanded', 'true');
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      });
    });

    // Open from URL hash
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const btn = target.querySelector('.accordion__header');
        if (btn) {
          setTimeout(() => {
            btn.click();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 300);
        }
      }
    }
  };

  /* ------------------------------------------
     7. Scroll Reveal Animations
     ------------------------------------------ */
  const initScrollReveal = () => {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  };

  /* ------------------------------------------
     8. Gallery Lightbox
     ------------------------------------------ */
  const initLightbox = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    if (!galleryItems.length || !lightbox) return;

    const lightboxImg = lightbox.querySelector('.lightbox__img');
    const closeBtn = lightbox.querySelector('.lightbox__close');
    const prevBtn = lightbox.querySelector('.lightbox__prev');
    const nextBtn = lightbox.querySelector('.lightbox__next');

    const images = Array.from(galleryItems).map(item => {
      const img = item.querySelector('img');
      return img ? img.src : '';
    });

    let currentIndex = 0;

    const openLightbox = (index) => {
      currentIndex = index;
      lightboxImg.src = images[currentIndex];
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    const showImage = (index) => {
      if (index < 0) currentIndex = images.length - 1;
      else if (index >= images.length) currentIndex = 0;
      else currentIndex = index;
      lightboxImg.src = images[currentIndex];
    };

    galleryItems.forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showImage(currentIndex + 1); });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
      else if (e.key === 'ArrowRight') showImage(currentIndex + 1);
    });

    // Swipe gesture support for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      const diffX = touchStartX - e.changedTouches[0].screenX;
      const diffY = Math.abs(e.changedTouches[0].screenY - touchStartY);

      if (Math.abs(diffX) > 50 && diffY < 100) {
        if (diffX > 0) {
          showImage(currentIndex + 1);
        } else {
          showImage(currentIndex - 1);
        }
      }
    });
  };

  /* ------------------------------------------
     9. Contact Form Validation
     ------------------------------------------ */
  const initContactForm = () => {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const successDiv = document.getElementById('form-success');

    const clearError = (field) => { field.style.border = ''; };
    const setError = (field) => { field.style.border = '2px solid #E31B23'; };

    const validate = (field) => {
      const value = field.value.trim();
      if (field.hasAttribute('required') && !value) { setError(field); return false; }
      if (field.type === 'email' && value && !EMAIL_REGEX.test(value)) { setError(field); return false; }
      clearError(field);
      return true;
    };

    const fields = form.querySelectorAll('input, textarea, select');
    fields.forEach(f => f.addEventListener('input', () => clearError(f)));

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      fields.forEach(f => { if (!validate(f)) valid = false; });
      if (!valid) return;

      form.style.display = 'none';
      if (successDiv) successDiv.style.display = 'block';
    });
  };

  /* ------------------------------------------
     10. Smooth Scroll
     ------------------------------------------ */
  const initSmoothScroll = () => {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  };

  /* ------------------------------------------
     11. Active Nav Link
     ------------------------------------------ */
  const initActiveNavLink = () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const linkPage = href.split('/').pop().split('#')[0];
      if (linkPage === currentPage) {
        link.classList.add('active');
      }
    });
  };

  /* ------------------------------------------
     12. Tab Scroll Indicators
     ------------------------------------------ */
  const initTabScrollIndicators = () => {
    const wrappers = document.querySelectorAll('.tabs-wrapper');
    if (!wrappers.length) return;

    wrappers.forEach(wrapper => {
      const tabs = wrapper.querySelector('.tabs');
      if (!tabs) return;

      const updateIndicators = () => {
        const { scrollLeft, scrollWidth, clientWidth } = tabs;
        wrapper.classList.toggle('can-scroll-left', scrollLeft > 5);
        wrapper.classList.toggle('can-scroll-right', scrollLeft < scrollWidth - clientWidth - 5);
      };

      tabs.addEventListener('scroll', updateIndicators, { passive: true });
      window.addEventListener('resize', updateIndicators, { passive: true });
      requestAnimationFrame(updateIndicators);
    });
  };

  /* ------------------------------------------
     13. Mobile Sticky Donate CTA
     ------------------------------------------ */
  const initStickyDonate = () => {
    const cta = document.getElementById('mobile-sticky-cta');
    const hero = document.querySelector('.hero');
    if (!cta || !hero) return;

    const showAfter = hero.offsetHeight;

    const handleScroll = () => {
      cta.classList.toggle('visible', window.scrollY > showAfter);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  };

  /* ------------------------------------------
     Initialize All
     ------------------------------------------ */
  initHeaderScroll();
  initMobileNav();
  initHeroCarousel();
  initTabs();
  initCounters();
  initAccordion();
  initScrollReveal();
  initLightbox();
  initContactForm();
  initSmoothScroll();
  initActiveNavLink();
  initTabScrollIndicators();
  initStickyDonate();
});
