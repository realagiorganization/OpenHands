---
name: static-site-generator
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- generate static site
- assemble presentation site
---

# Static Site Generator Microagent

- Scaffold a Next.js or Vite project with TypeScript.
- Set up routing for vertical navigation (one section per route or scroll snap).
- Import all generated components.
- Configure SEO, meta tags, and PWA support.
- Add a build script for static export.
- Output the project structure and key files.

Call the `content-integrator` microagent to populate the site.
