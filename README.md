
# Plombier Paris Pro – PROD (Full)

## Lancer
```bash
npm i
npm run build
npm start
```

## SMTP
Copiez `.env.local.example` en `.env.local` et renseignez vos identifiants (Gmail App Password, Brevo, Mailjet...).

## Inclus
- **next.config.ts** EXACT (alias `@`, `typedRoutes`, domaine Unsplash)
- **Header** avec menu hamburger animé + **bouton d’appel flottant**
- Pages : Accueil, Services, **Réalisations**, **À propos**, Contact, Mentions légales
- **Galerie filtrable** (Framer Motion) + panneau latéral détaillé
- **Formulaire contact** (Nodemailer) + **modal succès** + redirection intelligente
- **LiteMap** (click-to-load) pour limiter l’impact Google Maps
- SEO : Meta + OpenGraph, **JSON-LD Plumber**, Sitemap, Robots
- Tailwind, design propre, composants réutilisables
