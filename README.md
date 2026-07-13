# Personal Portfolio

Thomas Meere's personal portfolio — a React + Vite single-page site showcasing projects across full-stack development, game development, and automation/QA, with a dedicated case-study page per project.

## Tech Stack

- **React 19** + **Vite 6** — SPA build/dev tooling
- **React Router 7** — client-side routing between the homepage and individual project pages
- **FontAwesome** (`@fortawesome/react-fontawesome`) and **react-icons** — icon sets
- **Custom CSS design system** (`src/theme.css`) — a dark "node graph" engine-editor aesthetic (panels, wires, amber/teal accents) shared across the whole site; no CSS framework (Bootstrap is only ever referenced as a project *tag*, describing older practice sites, not the portfolio's own styling)
- **ESLint** — linting (`npm run lint`)

## Scripts

```
npm run dev      # start the Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Structure

```
components/                Shared site components (navbar, hero, about, projects grid, contact, footer)
components/projectComponents/  Shared building blocks used by project pages (hero, tags bar, carousel, navbar, ...)
project-Defiance/          One file per project case-study page (see below)
src/App.jsx                Route table
src/theme.css              Global design tokens (colors, spacing, radius) + resets
public/                    Static assets served as-is (images, resume PDFs)
public/resume/             Resume PDFs + LaTeX source (see Resume section)
```

## Project Case-Study Pages

Each project under `project-Defiance/` (BloodDrunk, TankBuster, Defiance, MidnightTaxi, Portside, EmoEdge) is a standalone route (`/blood`, `/tank`, `/defiance`, `/taxi`, `/port`, `/emo`) rendering a full case-study writeup. They share the same page-chrome components (`ProjectHero`, `ProjectTagsBar`, `ProjectNavbar`, `ProjectImageCarousel`, `Footer`) but each owns its own bespoke card system and stylesheet (e.g. `BloodDrunk.css`) rather than a shared "card" component — this keeps each page's card sizing, spacing, and signature accent color independently controlled instead of coupled through shared props. Each page includes:

- A numbered "stage" narrative built from image/video + text cards
- A click-to-enlarge lightbox for detail screenshots
- Scroll-reveal and hover motion (respecting `prefers-reduced-motion`)
- A distinct signature accent color per project

## Projects Carousel

The homepage projects grid (`components/projects.jsx`) supports filtering by **All Projects / Full-Stack / Game Dev**, and within each filter, projects with a live "View Project" link are sorted ahead of ones without, then ordered by depth/impressiveness of the underlying work.

## Resume

`public/resume/` contains the current resume as both LaTeX source (`Thomas Meere 2026 Resume.tex`, based on the Jake Gutierrez / sb2nov Overleaf template) and a compiled PDF (`Thomas Meere 2026 Resume.pdf`), linked from the site's "Résumé" nav link. To recompile after editing the `.tex` source, install a LaTeX distribution (e.g. [MiKTeX](https://miktex.org/) on Windows) and run:

```
pdflatex "Thomas Meere 2026 Resume.tex"
```
