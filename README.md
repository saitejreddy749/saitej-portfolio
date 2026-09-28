# Saitej Akavaram — Portfolio

A responsive React portfolio presenting my projects, technical skills, education, and contact information.

**Live site:** [saitejreddy749.github.io/saitej-portfolio](https://saitejreddy749.github.io/saitej-portfolio/)

## Features

- Responsive single-page layout
- Scroll-reveal animations and reading progress
- Accessible reduced-motion support
- Centralised profile content for easy updates
- Automatic deployment through GitHub Actions

## Run locally

Requires Node.js 18 or newer and npm.

```bash
npm install
npm start
```

Open `http://localhost:3000`.

## Update the portfolio

- Edit profile text and project data in `src/profile.js`.
- Replace `public/profile-photo.png` to update the portrait.
- Edit colours and scroll effects in `src/styles.css`.
- Push changes to `main` to publish a new version.

## Production build

```bash
npm run build
```

The deployment workflow publishes the `build/` output to GitHub Pages.
