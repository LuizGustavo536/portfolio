// ==========================================================================
// PORTFOLIO JAVASCRIPT - LUIZ GUSTAVO
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar Ano no Rodapé
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Efeito de Digitação Dinâmica no Hero (Typing Effect)
  const typingElement = document.getElementById('typing-text');
  const phrases = [
    'Desenvolvedor Full Stack & Backend.',
    'Especialista em Python & FastAPI.',
    'Criador de APIs REST & Microsserviços.',
    'Automações, Bots para Discord & Cloud.'
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, letterIndex - 1);
      letterIndex--;
      typingSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, letterIndex + 1);
      letterIndex++;
      typingSpeed = 90;
    }

    if (!isDeleting && letterIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pausa após digitar a frase inteira
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 500; // Pausa antes de digitar a nova frase
    }

    setTimeout(type, typingSpeed);
  }

  if (typingElement) {
    setTimeout(type, 800);
  }

  // 3. Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 4. Highlight de Link Ativo no Scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*='${sectionId}']`);

      if (navItem) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navItem.classList.add('active');
        } else {
          navItem.classList.remove('active');
        }
      }
    });
  });

  // 5. Efeito Hover Interativo nos Glow Cards
  const cards = document.querySelectorAll('.glow-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
