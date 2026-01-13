---
name: presentation-planner
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
- plan presentation website
- vertical presentation plan
---

# Presentation Planner Microagent

Design a vertical, animated presentation website. Output a detailed plan including:

- Target audience and purpose
- Number and order of slides/sections
- Content outline for each section (title, key points, media)
- Color palette and typography inspiration (with references to React Mail and modern design systems)
- Accessibility and mobile-first considerations

Call the `component-generator` microagent for each section in the plan.
