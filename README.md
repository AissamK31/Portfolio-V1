# Portfolio Interactif

Ce portfolio utilise JavaScript pour offrir une expérience utilisateur interactive, responsive et animée.

## Fonctionnalités

### Gestion du thème

- Bascule entre thèmes clair et sombre
- Détection automatique des préférences système
- Persistance des préférences via localStorage
- Support complet sur mobile et desktop

### Menu mobile

- Menu adaptatif pour appareils mobiles
- Fermeture automatique après 5 secondes d'inactivité
- Désactivation du défilement arrière-plan lors de l'ouverture
- Positionnement optimisé des icônes dans l'en-tête

### Navigation

- Défilement fluide vers les sections lors des clics sur les liens
- Fermeture automatique du menu mobile après navigation

### Animations avancées

- **Effet de typage** sur le titre principal avec curseur clignotant
- **Animation des cartes projet** au survol (zoom image, élévation, animation des tags)
- **Animations séquentielles** pour les badges de compétences
- **Effet de pulsation** sur les chiffres-clés (satisfaction client, etc.)
- **Micro-animations** de flottement sur les boutons et icônes
- Effets de fondu à l'entrée des sections pendant le défilement
- Déclenchement intelligent basé sur la visibilité dans le viewport via Intersection Observer

### Formulaire de contact

- Validation basique des champs obligatoires
- Feedback utilisateur après soumission

### Optimisations

- Animations optimisées pour les performances
- Support cross-browser
- Adaptabilité aux différentes tailles d'écran

## Structure du code

Le script est organisé en modules fonctionnels:

1. Sélecteurs d'éléments DOM
2. Gestion du thème (desktop et mobile)
3. Gestion du menu mobile
4. Traitement du formulaire
5. Animations au défilement et interactions
6. Effets visuels avancés (typage, flottement, etc.)
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

- Ajout d'animations avancées pour améliorer l'engagement utilisateur
- Optimisation de l'interface mobile avec meilleur positionnement des icônes
- Amélioration du pied de page en disposition horizontale
- Correction de problèmes de visibilité en mode sombre
- Unification des scripts JavaScript en un seul fichier main.js
