# AXORA Landing Page

<div align="center">
  <img src="public/logo.png" alt="AXORA Logo" width="200" />
  <p align="center">
    A modern landing page for AXORA - Where Gaming Meets Innovation
    <br />
    <br />
    <a href="#live-demo">View Demo</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tech-stack">Tech Stack</a>
  </p>
</div>

## Overview

AXORA is a modern, responsive landing page for a startup planning to host gaming events and hackathons. The website features stunning animations, glassmorphic UI elements, and responsive design to showcase the brand's identity and services.

![AXORA Screenshot](public/screenshot.png)

## Features

- **Modern Design** - Sleek, glassmorphic UI with glow effects and gradient backgrounds
- **Fully Responsive** - Optimized for all device sizes (mobile, tablet, desktop)
- **Interactive Elements** - Animations and hover effects powered by Framer Motion
- **Optimized Performance** - Fast loading and smooth animations
- **Accessibility** - Built with a11y in mind for all users
- **Smooth Scrolling** - Seamless section navigation
- **Custom Components** - Reusable UI components like IconWrapper for consistent styling

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**:
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Magic UI](https://magic-ui.vercel.app/)
  - [Accernity UI](https://ui.aceternity.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)

## Folder Structure

```
axora/
├── app/                     # Next.js app directory
├── components/              # React components
│   ├── magicui/             # Magic UI components
│   ├── sections/            # Website sections (Hero, Features, etc.)
│   └── ui/                  # UI components (buttons, cards, etc.)
├── lib/                     # Utility functions and hooks
├── public/                  # Static assets (images, fonts)
│   └── logo.png             # Brand logo
├── styles/                  # Global styles
├── .gitignore               # Git ignore file
├── next.config.js           # Next.js configuration
├── package.json             # Project dependencies
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```sh
   git clone https://github.com/yourusername/axora.git
   ```

2. Navigate to the project directory
   ```sh
   cd axora
   ```

3. Install dependencies
   ```sh
   npm install
   # or
   yarn
   ```

4. Run the development server
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Key Components

### IconWrapper

A reusable component that wraps Lucide React icons with colorful gradient backgrounds and glow effects.

```tsx
// Usage example
<IconWrapper 
  icon={Gamepad2} 
  gradientFrom="from-orange-500" 
  gradientTo="to-red-500"
  glowColor="rgba(249, 115, 22, 0.5)"
/>
```

### Section Components

The website is divided into modular section components:

- **Hero** - Main landing section with animated elements and call-to-action
- **Features** - Showcases key services with colorful icons
- **Community** - Displays statistics, testimonials and newsletter signup
- **CTA** - Call-to-action section for user conversion
- **Footer** - Navigation links and contact information

## Customization

### Colors

The website uses a color scheme based on AXORA's brand colors:
- Primary: Orange (`#f97316`)
- Secondary: Amber (`#f59e0b`)
- Background: Black with dark gray gradients
- Text: White and light gray shades

To change the colors, modify the `tailwind.config.js` file.

### Content

Content for each section can be found in their respective component files under `components/sections/`.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

---

<p align="center">Made with ❤️ for AXORA</p>
