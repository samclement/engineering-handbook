# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Engineering Handbook** web application built with Next.js 16, designed to provide an interactive career framework for software engineers. It presents role expectations, competencies, and progression paths across IC (Individual Contributor) and Management tracks.

The application displays:
- Career framework with roles from Graduate Software Engineer to Principal Engineer (IC track) and Engineering Manager to Senior Head of Software Engineering (Management track)
- SDLC competencies organized by domain (design, delivery, quality, operations)
- Leadership dimensions (scope, time horizon, ambiguity, technical judgment)
- Team health and reporting structures

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (http://localhost:3000)
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### Framework: Next.js App Router

This uses the Next.js 16 App Router architecture (not Pages Router):
- Routes are defined by folders in `app/`
- Each route folder contains a `page.tsx` file
- Layouts are defined in `layout.tsx` files
- API routes are in `app/api/*/route.ts`

### Data Architecture

Career framework data is **not** stored in a database. Instead, it's compiled from TypeScript data files in `lib/`:

- **`lib/roles-data.ts`**: Role definitions (titles, slugs, tracks, summaries, content) for all IC and Management roles
- **`lib/sdlc-data.ts`**: SDLC competency domains (System Design, Delivery, Quality, Operations) with behaviors and examples per role level
- **`lib/leadership-data.ts`**: Leadership competencies (Technical Direction, Execution, Stakeholder Alignment) for Staff+ and Management roles
- **`lib/dimensions-data.ts`**: Dimension framework (Scope, Time Horizon, Ambiguity, Leadership, Technical Judgment) with level definitions
- **`lib/career-data.ts`**: Main export interface that aggregates role data
- **`lib/*-examples.ts`**: Work examples and progression scenarios

To modify career framework content, edit these TypeScript data files directly. The content is rendered dynamically through React components.

### Component Organization

- **`components/`**: Reusable React components
  - **Feature components** (e.g., `CareerPathVisualizer.tsx`, `RoleComparator.tsx`, `DimensionExplainer.tsx`): Complex domain-specific components that render career framework data
  - **`components/ui/`**: shadcn/ui primitive components (Button, Card)
- **`app/`**: Next.js pages and API routes
  - `app/page.tsx`: Homepage
  - `app/career-framework/`: Career framework pages (roles, competencies, dimensions, navigator)
  - `app/team/`, `app/team-health/`, `app/team-fits/`: Team-related pages
  - `app/artefacts/`: Documentation templates page
  - `app/api/career-framework/route.ts`: API endpoint to fetch role data as JSON

### Styling

- **Tailwind CSS v4** with custom configuration via PostCSS
- Uses `@tailwindcss/typography` for markdown rendering
- Custom path alias: `@/*` maps to root directory (configured in `tsconfig.json`)
- Utility function `cn()` in `lib/utils.ts` for conditional class merging

### Key Technologies

- **React 19.2** with client-side interactivity
- **Framer Motion** for animations
- **lucide-react** for icons
- **react-markdown** for rendering career framework content
- **class-variance-authority** for component variants
- **TypeScript 5** in strict mode

## Source of Truth

The **canonical career framework content** is in `career_framework.md` at the repository root. This markdown file defines:
- Role expectations across IC and Management tracks
- Scope, competence, and leadership crossover for each level
- The leveling signals matrix (scope, time horizon, ambiguity, leadership, technical judgment)

When updating career framework data in `lib/`, ensure it stays aligned with `career_framework.md`.

## File Path Conventions

- All imports use the `@/` path alias (e.g., `import { Header } from "@/components/Header"`)
- Component files use PascalCase (e.g., `CareerPathVisualizer.tsx`)
- Data files use kebab-case (e.g., `sdlc-data.ts`)
- Route folders use kebab-case (e.g., `app/career-framework/`)

## TypeScript Patterns

- Strict mode enabled
- Interfaces for data structures (e.g., `RoleData`, `SDLCDomain`, `Dimension`)
- Type exports from data files for component consumption
- Client components marked with `"use client"` directive when using hooks or interactivity
