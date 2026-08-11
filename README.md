# Muhammad Ibrahiem — Portfolio

Personal portfolio site. Dark theme, animated 3D hero, and a projects section where
each project expands into a full write-up.

## Stack

- **React 19** + **Vite**
- **React Three Fiber** / **drei** — the distorted icosahedron in the hero
- **Framer Motion** — scroll reveals and the expand/collapse transitions

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build
```

## Editing content

All content lives in [`src/data/portfolioData.js`](src/data/portfolioData.js) — no
component changes needed to update the site.

| Export | What it drives |
| --- | --- |
| `profile` | Name, title, tagline, email, résumé link (empty hides the button) |
| `about` | Bio paragraphs |
| `experience` | Work history timeline |
| `education` / `certifications` | Degrees and certificates |
| `skills` | Skill bars (name + level) |
| `projects` | The collapsible project cards |
| `socials` | Footer links |

### Adding a project

Each entry in `projects` needs only `id`, `title`, `subtitle`, `tags`, and `summary`.
Every other field is optional and its section is skipped when absent:

- `meta` — the label/value row
- `description` — body paragraphs
- `screens` — screenshots, rendered in phone frames with a lightbox
- `stats` — the big-number row
- `flow` — a numbered "how it works" sequence
- `stack` — grouped technology chips
- `features` — the feature grid
- `accent` — hex colour that themes the expanded card
- `defaultOpen` — start the card expanded

Screenshots go in `public/projects/<id>/` and are referenced by path, e.g.
`/projects/hireready/01-signin.jpg`.

## Performance

Three.js is lazy-loaded via `React.lazy`, keeping it out of the initial bundle so
text paints first (~109 kB gzipped initial, with the 3D scene streaming in after).
