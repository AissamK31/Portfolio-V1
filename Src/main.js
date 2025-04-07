/**
 * Script principal pour le portfolio
 * Gère les fonctionnalités interactives: thème, menu mobile, animations et formulaires
 */

// Éléments DOM principaux
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeToggleDesktop = document.getElementById("theme-toggle-desktop");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const sunIconDesktop = document.getElementById("sun-icon-desktop");
const moonIconDesktop = document.getElementById("moon-icon-desktop");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-nav-link");
const contactForm = document.getElementById("contact-form");
const heroSection = document.getElementById("accueil");
const projectCards = document.querySelectorAll(".project-card");
const skillTags = document.querySelectorAll(".skill-tag");
const navLinks = document.querySelectorAll(".nav-link");
const socialProofItems = document.querySelectorAll(".social-proof-item");

/**
 * Gestion du thème (clair/sombre)
 * Utilise localStorage pour persister les préférences utilisateur
 */
function initTheme() {
  // Vérification des préférences sauvegardées ou utilisation des préférences système
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Application du thème approprié selon les préférences
  if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

/**
 * Active le mode sombre et enregistre la préférence
 */
function enableDarkMode() {
  body.classList.add("dark-mode");
  // Mobile
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
  // Desktop
  sunIconDesktop.classList.add("hidden");
  moonIconDesktop.classList.remove("hidden");

  localStorage.setItem("theme", "dark");

  // Animation en douceur pour la section hero
  if (heroSection) {
    heroSection.style.transition = "opacity 0.5s ease";
    heroSection.style.opacity = "0";
    setTimeout(() => {
      heroSection.style.opacity = "1";
    }, 100);
  }
}

/**
 * Active le mode clair et enregistre la préférence
 */
function enableLightMode() {
  body.classList.remove("dark-mode");
  // Mobile
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
  // Desktop
  sunIconDesktop.classList.remove("hidden");
  moonIconDesktop.classList.add("hidden");

  localStorage.setItem("theme", "light");

  // Animation en douceur pour la section hero
  if (heroSection) {
    heroSection.style.transition = "opacity 0.5s ease";
    heroSection.style.opacity = "0";
    setTimeout(() => {
      heroSection.style.opacity = "1";
    }, 100);
  }
}

/**
 * Bascule entre les modes clair et sombre
 */
function toggleTheme() {
  if (body.classList.contains("dark-mode")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

/**
 * Gestion du menu mobile avec fermeture automatique
 */
function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  // Empêche le défilement du fond quand le menu est ouvert
  document.body.style.overflow = mobileMenu.classList.contains("active")
    ? "hidden"
    : "";

  // Minuteur pour fermer automatiquement le menu après 5 secondes d'inactivité
  if (mobileMenu.classList.contains("active")) {
    startMenuTimer();
  } else {
    clearMenuTimer();
  }
}

// Variable pour stocker la référence du minuteur
let menuTimer;

/**
 * Démarre le minuteur pour la fermeture automatique du menu
 */
function startMenuTimer() {
  clearMenuTimer(); // Effacer tout minuteur existant
  menuTimer = setTimeout(() => {
    if (mobileMenu.classList.contains("active")) {
      toggleMobileMenu();
    }
  }, 5000); // 5 secondes
}

/**
 * Efface le minuteur de fermeture automatique
 */
function clearMenuTimer() {
  if (menuTimer) {
    clearTimeout(menuTimer);
  }
}

/**
 * Réinitialise le minuteur lors d'une interaction avec le menu
 */
function resetMenuTimer() {
  if (mobileMenu.classList.contains("active")) {
    startMenuTimer();
  }
}

/**
 * Ferme explicitement le menu mobile
 * Assure que le menu est toujours fermé, indépendamment de son état actuel
 */
function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
  clearMenuTimer();
}

/**
 * Gère la soumission du formulaire de contact
 * Inclut validation basique et feedback utilisateur
 */
function handleFormSubmit(e) {
  e.preventDefault();

  // Récupération des données du formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Validation simple des champs
  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs.");
    return;
  }

  // Normalement, ces données seraient envoyées à un serveur
  // Pour cette démo, simple affichage d'un message de succès
  alert(`Merci ${name} pour votre message ! Je vous contacterai bientôt.`);

  // Réinitialisation du formulaire
  contactForm.reset();
}

/**
 * Animation au défilement pour les sections
 * Ajoute une classe pour déclencher les animations CSS
 */
function animateOnScroll() {
  const elements = document.querySelectorAll(".section, .card, .project-card");

  elements.forEach((element) => {
    const position = element.getBoundingClientRect();

    // Si l'élément est dans le viewport (avec marge de 10%)
    if (position.top < window.innerHeight * 0.9 && position.bottom >= 0) {
      element.classList.add("fade-in");
    }
  });
}

/**
 * Configure le défilement fluide pour les liens d'ancrage
 * Améliore l'expérience de navigation interne
 */
function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      // Seulement si ce n'est pas juste "#" (qui ramènerait en haut)
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Fermeture du menu mobile s'il est ouvert
          closeMobileMenu();

          // Défilement fluide vers la cible
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajustement pour la hauteur de l'en-tête
            behavior: "smooth",
          });
        }
      }
    });
  });
}

/**
 * Animation des cartes de projet au survol
 */
function setupProjectCardAnimations() {
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      // Ajoute une classe pour l'animation au survol
      this.classList.add("project-card-hover");

      // Anime l'image du projet
      const projectImage = this.querySelector(".project-image");
      if (projectImage) {
        projectImage.style.transform = "scale(1.05)";
        projectImage.style.transition = "transform 0.5s ease";
      }

      // Anime les tags du projet
      const tags = this.querySelectorAll(".project-tag");
      tags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.transform = "translateY(-5px)";
          tag.style.opacity = "1";
        }, 100 * index);
      });
    });

    card.addEventListener("mouseleave", function () {
      // Retire la classe d'animation au survol
      this.classList.remove("project-card-hover");

      // Réinitialise l'image du projet
      const projectImage = this.querySelector(".project-image");
      if (projectImage) {
        projectImage.style.transform = "scale(1)";
      }

      // Réinitialise les tags du projet
      const tags = this.querySelectorAll(".project-tag");
      tags.forEach((tag) => {
        tag.style.transform = "translateY(0)";
        tag.style.opacity = "0.8";
      });
    });
  });
}

/**
 * Animation d'entrée pour les tags de compétences
 */
function animateSkillTags() {
  skillTags.forEach((tag, index) => {
    // Position initiale
    tag.style.opacity = "0";
    tag.style.transform = "translateY(20px)";
    tag.style.transition = "opacity 0.3s ease, transform 0.3s ease";

    // Observer pour animer lors de l'entrée dans le viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              tag.style.opacity = "1";
              tag.style.transform = "translateY(0)";
            }, 100 * index);
            observer.unobserve(tag);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(tag);
  });
}

/**
 * Animation pour les items de preuve sociale (satisfaction client, etc.)
 */
function animateSocialProofItems() {
  socialProofItems.forEach((item, index) => {
    const value = item.querySelector(".social-proof-value");
    if (value) {
      // Observer pour animer lors de l'entrée dans le viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                value.classList.add("pulse-animation");
              }, 300 * index);
              observer.unobserve(item);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(item);
    }
  });
}

/**
 * Effet de typage pour le titre principal
 */
function setupTypingEffect() {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const secondLine = heroTitle.querySelector("span:not(.text-primary)");
    if (secondLine) {
      const text = secondLine.textContent;
      secondLine.textContent = "";
      secondLine.style.display = "inline-block";

      // Délai initial
      setTimeout(() => {
        let i = 0;
        const typing = setInterval(() => {
          if (i < text.length) {
            secondLine.textContent += text.charAt(i);
            i++;
          } else {
            clearInterval(typing);
            secondLine.classList.add("typed");
          }
        }, 80);
      }, 1000);
    }
  }
}

/**
 * Effet de flottement pour les éléments
 */
function setupFloatingElements() {
  const floatingElements = document.querySelectorAll(
    ".btn, .social-icon, .logo"
  );

  floatingElements.forEach((element) => {
    // Animation aléatoire légère de flottement
    setInterval(() => {
      const randomY = (Math.random() - 0.5) * 5;
      element.style.transform = `translateY(${randomY}px)`;
      element.style.transition = "transform 2s ease-in-out";
    }, 2000 + Math.random() * 1000);
  });
}

/**
 * Ajoute les styles CSS nécessaires aux animations
 */
function addAnimationStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .section, .card, .project-card {
      opacity: 0;
      transform: translateY(20px);
    }
    
    .fade-in {
      animation: fadeIn 0.6s ease-out forwards;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .pulse-animation {
      animation: pulse 1s ease-in-out 2;
    }
    
    .project-card-hover {
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .project-tag {
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .typed::after {
      content: '|';
      display: inline-block;
      animation: blink 0.7s infinite;
    }
    
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    
    .hero-content {
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
}

/**
 * Initialisation à chargement du DOM
 * Configure tous les écouteurs d'événements et états initiaux
 */
document.addEventListener("DOMContentLoaded", function () {
  // Ajout des styles d'animation
  addAnimationStyles();

  // Initialisation du thème
  initTheme();

  // Configuration du défilement fluide
  setupSmoothScroll();

  // Bascule de thème
  themeToggle.addEventListener("click", toggleTheme);
  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener("click", toggleTheme);
  }

  // Bascule du menu mobile
  menuToggle.addEventListener("click", toggleMobileMenu);

  // Fermeture du menu mobile lors du clic sur un lien
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Réinitialisation du minuteur lors d'une interaction avec le menu
  mobileMenu.addEventListener("click", resetMenuTimer);
  mobileMenu.addEventListener("touchmove", resetMenuTimer);

  // Soumission du formulaire
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // Vérification initiale des animations
  animateOnScroll();

  // Initialisation des nouvelles animations
  setupProjectCardAnimations();
  animateSkillTags();
  animateSocialProofItems();
  setupTypingEffect();
  setTimeout(setupFloatingElements, 2000); // Délai pour démarrer l'effet de flottement

  // Événement de défilement pour les animations
  window.addEventListener("scroll", animateOnScroll);
});

/**
 * Gestion des changements de thème système
 * S'adapte automatiquement sauf si l'utilisateur a défini manuellement sa préférence
 */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const savedTheme = localStorage.getItem("theme");

    // Changement automatique uniquement si l'utilisateur n'a pas défini manuellement sa préférence
    if (!savedTheme) {
      if (e.matches) {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    }
  });
