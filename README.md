# Badri Gautam - Android Developer Portfolio

A modern, high-fidelity developer portfolio website for **Badri Gautam (Android Developer)** built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and Framer Motion. 

The website styling takes inspiration from Apple, Linear, and Vercel dark aesthetics: pitch-black backgrounds, crisp thin borders, glowing cyan and violet spotlights, and responsive glassmorphic cards.

## 🚀 Key Features

*   **Multi-Page Routing**: Independent sub-pages for `/`, `/about`, `/projects`, and `/contact` utilizing Next.js App Router for optimal SEO structure and rapid client-side transitions.
*   **Animated Headline Typing**: A custom, light-weight client typewriter hook (`TypingEffect.tsx`) to animate developer keywords on the landing fold.
*   **Detailed Experience Timeline**: Shows professional timeline roles at *5Exceptions Software Solutions Pvt Ltd* and *Underscore Technology Private Limited*.
*   **Interactive Projects Grid**: Highlights 5 customized Android applications and SDK products featuring media streaming, local databases, and AI assistance, alongside dynamic category filters.
*   **GitHub Contribution Activity Graph**: A beautiful, custom simulated green commits grid showing contribution counts, active streaks, and interactive hover tooltip analytics.
*   **Validated Contact Form**: Custom floating forms with input format checks, a loading spinner submission state, and a celebratory `canvas-confetti` canvas blast.
*   **Downloadable Resume**: A clean PDF download link under `/resume.pdf`.

---

## 🛠️ Getting Started

### 1. Installation
Clone the repository and install the project dependencies:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Hot Module Reload server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to preview the live application.

### 3. Build for Production
Verify typescript compilation and generate the optimized build bundle:
```bash
npm run build
```

---

## ☁️ Deployment on Vercel

The easiest way to deploy this Next.js application is via the [Vercel Platform](https://vercel.com/new):

1. Push your code repository to GitHub, GitLab, or Bitbucket.
2. Import the repository into your Vercel Dashboard.
3. Vercel will automatically detect **Next.js** settings.
4. Click **Deploy**. Vercel will handle compilation, static page generation, and global CDN provisioning.
