# Business Card 3D — Carte de visite numérique

Carte de visite numérique de Fanny Saez, développeuse web & mobile, conçue comme pendant digital d'une carte de visite imprimée en 3D (QR code intégré).

🔗 **Démo en ligne** : [business-card-3d-fannysaez.vercel.app](https://business-card-3d-fannysaez.vercel.app)

## Stack technique

- [Next.js 16](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Police [Raleway](https://fonts.google.com/specimen/Raleway) via `next/font/google`
- [qrcode.react](https://github.com/zpao/qrcode.react) pour la génération du QR code
- [react-icons](https://react-icons.github.io/react-icons/) pour le logo intégré au QR code
- Conteneurisé avec Docker (voir [`business-card-3d-docker`](https://github.com/fannysaez/business-card-3d-docker))

## Dépendances spécifiques

En plus des dépendances Next.js standard, ce projet utilise :

```bash
npm install qrcode.react   # génération du QR code
npm install react-icons     # logo Instagram intégré au QR code
```

Ces deux packages sont déjà présents dans `package.json` — `npm install` seul suffit pour un clone du dépôt.

## Prérequis

- Docker Desktop (méthode recommandée)
- ou Node.js 20+ et npm (pour lancer en local hors Docker)

## Démarrage

### Avec Docker (recommandé)

Ce projet est pensé pour être lancé via le dépôt [`business-card-3d-docker`](https://github.com/fannysaez/business-card-3d-docker), qui contient le `Dockerfile` multi-stage (dev avec hot-reload / prod) et le `docker-compose.yml`.

```bash
cd ../business-card-3d-docker
docker compose up --build
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### En local (hors Docker)

```bash
npm install
npm run dev
```

## Scripts disponibles

```bash
npm run dev      # serveur de développement
npm run build     # build de production
npm start          # lancer le build de production en local
npm run lint        # vérification ESLint
```

## Structure du projet

```
app/
├── globals.css     # palette de couleurs (teal/dark) + Tailwind
├── layout.tsx      # police Raleway + métadonnées
└── page.tsx         # contenu de la carte (recto)
public/
└── assets/avatar/avatar.webp
```

## Déploiement

Déployé sur [Vercel](https://vercel.com), connecté à ce dépôt GitHub : chaque `git push` sur `main` déclenche un redéploiement automatique en production. Docker n'intervient pas dans ce flux (dépôt séparé, non utilisé par Vercel).

```bash
vercel --prod
```

## Auteur

**Fanny Saez** — [GitHub](https://github.com/fannysaez) · [LinkedIn](https://www.linkedin.com/in/fannysaez/)