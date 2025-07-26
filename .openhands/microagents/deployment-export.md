---
name: deployment-export
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- export static site
- deploy presentation
---

# Deployment & Export Microagent

- Run the static site build process (e.g., `next export` or `vite build`).
- Output the static files to a `dist/` or `out/` directory.
- Provide instructions for deploying to Vercel, Netlify, or any static host.
- Ensure the site is production-ready, performant, and accessible.

End of pipeline.
