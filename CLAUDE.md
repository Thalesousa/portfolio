# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start dev server with Turbopack (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture Overview

This is a personal portfolio website built with Next.js 15 using the App Router and React 19.

### Key Structure

- **`src/app/`** - App Router pages using Server Components by default
  - `page.tsx` - Home page (fetches GitHub repos server-side)
  - `projetos/[slug]/page.tsx` - Dynamic project detail page
- **`src/components/`** - Reusable UI components (Header, Footer, Form, Projects, Skills)
- **`src/hooks/`** - Custom hooks for data fetching and utilities
- **`src/services/`** - API clients (GitHub API, Formspree)
- **`src/styles/`** - Global SCSS styles; component styles use CSS Modules (`.module.scss`)

### Data Flow

- **GitHub Integration**: Fetches repositories from `api.github.com/users/Thalesousa/repos`
- Projects are filtered to show only repos with `default_branch === 'port'`
- Project images come from raw GitHub URLs: `raw.githubusercontent.com/Thalesousa/{repo}/port/.github/`
- **Contact Form**: Submits via Formspree (client-side hook `UseFormInputsSubmit`)

### Environment Variables

- `NEXT_PUBLIC_LINK_CV_DOWNLOAD` - URL for CV download link
- `NEXT_PUBLIC_FORMSPREE_KEY` - Formspree form ID for contact form

### Path Aliases

Use `@/*` to import from `src/` (configured in tsconfig.json).
