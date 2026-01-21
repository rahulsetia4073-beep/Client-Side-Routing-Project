
# Gemini Multi-Route Hub

A modular React SPA demonstrating client-side routing with `react-router-dom`.

## Features
- **Client-Side Routing**: Uses `HashRouter` for deployment compatibility.
- **Lazy Loading**: Route components are loaded on-demand via `React.lazy` and `Suspense`.
- **Gemini Integration**: 
  - `gemini-3-flash-preview` for ultra-fast translations.
  - Generative AI for creative "random" content generation.
- **Responsive Design**: Mobile-first navbar with glassmorphism and active state highlighting.

## Route Maps
- `/#/`: **Home Dashboard** - Overview of available AI tools.
- `/#/translator`: **Smart AI Translator** - Real-time language conversion.
- `/#/random`: **Creativity Generator** - AI-powered jokes, facts, and poems.
- `*` (Any other): **404 Fallback** - Graceful error handling.

## Component Structure
- `App.tsx`: Routing logic and global layout.
- `pages/`: Container components for individual routes.
- `components/`: Shared UI elements (Navbar, Loaders).
- `services/`: API communication layer.
