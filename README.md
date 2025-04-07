# Portfolio Interactif

Ce portfolio utilise JavaScript pour offrir une expérience utilisateur interactive, responsive et animée, avec un design hexagonal inspiré de l'univers gaming.

## Fonctionnalités

### Design Hexagonal Gaming

- **Motif de fond hexagonal** subtil et réactif au thème clair/sombre
- **Bordures et formes hexagonales** sur les cartes de projet et éléments interactifs
- **Effets de lueur (glow)** sur les éléments au survol
- **Dégradés de couleur animés** sur les titres et boutons
- **Menu mobile amélioré** avec animations et décorations hexagonales

### Gestion du thème

- Bascule entre thèmes clair et sombre
- Détection automatique des préférences système
- Persistance des préférences via localStorage
- Support complet sur mobile et desktop

### Menu mobile

- Menu adaptatif pour appareils mobiles avec thème hexagonal
- Animation du bouton hamburger en croix lors de l'ouverture
- Hexagone décoratif rotatif dans le menu
- Effets de survol améliorés sur les liens
- Fermeture automatique après 5 secondes d'inactivité
- Désactivation du défilement arrière-plan lors de l'ouverture
- Positionnement optimisé des icônes dans l'en-tête

### Navigation

- Défilement fluide vers les sections lors des clics sur les liens
- Fermeture automatique du menu mobile après navigation

### Animations avancées

- **Dégradés de couleur animés** sur titres et éléments textuels
- **Effet de typage** sur le titre principal avec curseur clignotant
- **Animation des cartes projet** au survol (zoom image, élévation, animation des tags)
- **Animations séquentielles** pour les badges de compétences
- **Effet de pulsation** sur les chiffres-clés (satisfaction client, etc.)
- **Micro-animations** de flottement sur les boutons et icônes
- **Effet de passage lumineux** (light pass) sur les éléments interactifs
- Effets de fondu à l'entrée des sections pendant le défilement
- Déclenchement intelligent basé sur la visibilité dans le viewport via Intersection Observer

### Formulaire de contact

- Validation basique des champs obligatoires
- Feedback utilisateur après soumission

### Optimisations

- Animations optimisées pour les performances
- Support cross-browser
- Adaptabilité aux différentes tailles d'écran
- Réduction de l'opacité des sections pour mettre en valeur le motif hexagonal

## Structure du code

Le script est organisé en modules fonctionnels:

1. Sélecteurs d'éléments DOM
2. Gestion du thème (desktop et mobile)
3. Gestion du menu mobile
4. Traitement du formulaire
5. Animations au défilement et interactions
6. Effets visuels avancés (typage, flottement, dégradés animés, etc.)
7. Navigation fluide
8. Initialisation et écouteurs d'événements

## Utilisation

Inclure le script dans votre HTML:

```html
<script src="main.js"></script>
```

Assurez-vous d'avoir les éléments DOM correspondants dans votre HTML:

- Boutons de changement de thème avec IDs "theme-toggle" et "theme-toggle-desktop"
- Icônes soleil/lune avec IDs correspondants pour desktop et mobile
- Menu mobile avec ID "mobile-menu"
- Structure de projet avec classes ".project-card", ".project-image", etc.
- Badges de compétences avec classe ".skill-tag"
- Formulaire de contact avec ID "contact-form"

## Modifications récentes

- Ajout d'un thème hexagonal inspiré des jeux vidéo
- Amélioration du menu mobile avec animations et décorations hexagonales
- Ajout d'effets de dégradés animés sur les titres et éléments textuels
- Optimisation de la visibilité du motif hexagonal (réduction de l'opacité des sections)
- Correction du centrage des titres de projets dans les cartes
- Ajout d'animations avancées pour améliorer l'engagement utilisateur
- Optimisation de l'interface mobile avec meilleur positionnement des icônes
- Amélioration du pied de page en disposition horizontale
- Correction de problèmes de visibilité en mode sombre
- Unification des scripts JavaScript en un seul fichier main.js

## Améliorations potentielles

### Techniques et Performances

- **Gestion de la mémoire** - Implémentation d'un système de nettoyage pour les intervalles et événements
- **Validation avancée des formulaires** - Ajout de validation plus robuste et protection XSS
- **Compatibilité navigateurs** - Polyfill pour IntersectionObserver et ajout de préfixes vendor
- **Optimisation pour appareils à faible puissance** - Détection et réduction des animations
- **Throttling des événements** - Limitation de la fréquence des événements onScroll pour de meilleures performances
- **Mode sombre automatique** - Basculement automatique du thème en fonction de l'heure de la journée

### SEO et Accessibilité

- **Meta tags enrichis** - Amélioration des balises meta pour un meilleur référencement
- **Open Graph et Twitter Cards** - Pour un meilleur partage sur les réseaux sociaux
- **Amélioration de l'accessibilité** - Ajout d'attributs ARIA et amélioration de la navigation au clavier
- **Images optimisées** - Utilisation de l'attribut loading="lazy" et définition des dimensions
- **Support de prefers-reduced-motion** - Pour respecter les préférences utilisateur concernant les animations

### Fonctionnalités additionnelles

- **Système de blog technique** - Pour partager votre expertise et améliorer le référencement
- **Section témoignages clients** - Pour renforcer la crédibilité professionnelle
- **Section technologies maîtrisées** - Avec indicateurs de niveau et barre de progression
- **Chatbot simple** - Pour les visiteurs qui souhaitent des informations rapides
- **Pages détaillées pour chaque projet** - Avec gallerie d'images et explications approfondies
- **Filtrage des projets** - Par technologie, type de projet ou secteur d'activité
- **Téléchargement de CV** - Ajout d'un bouton pour télécharger votre CV au format PDF
- **Calendrier de disponibilité** - Pour faciliter la prise de rendez-vous
- **Analytics respectueux de la vie privée** - Intégration d'outils comme Plausible ou Fathom
- **Newsletter** - Pour permettre aux visiteurs de suivre vos actualités professionnelles

### Multimédia et Contenus

- **Vidéo de présentation** - Intégration d'une vidéo courte présentant votre profil et compétences
- **Gallerie de projets interactive** - Avec filtres et effets de transition
- **Intégration de modèles 3D** - Pour présenter certains projets de manière immersive
- **Démonstrations interactives** - Mini-applications illustrant vos compétences techniques
- **Timeline de carrière interactive** - Pour présenter votre parcours de manière engageante
