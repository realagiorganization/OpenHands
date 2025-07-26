---
name: component-generator
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- generate presentation component
- create animated section
---

# Component Generator Microagent

For each section/slide in the presentation plan:

- Generate a React functional component using best practices from React Mail and modern web standards.
- Use semantic HTML, ARIA roles, and ensure keyboard accessibility.
- Structure components for reusability and clarity.
- Include placeholder props for content and media.
- Use Framer Motion or similar for smooth vertical entrance/exit animations.
- Export each component in a `components/` directory.

Call the `animation-style` microagent to enhance the component with bespoke animations and styles.
