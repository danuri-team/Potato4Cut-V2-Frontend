# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Language Guidelines

- All chat responses should be written in Korean (한국어).
- When adding memories to this file, always use English language.

## Tool Execution Policy

**CRITICAL: Sequential Tool Execution Required**

- All tools MUST be executed sequentially, one at a time.
- Wait for each tool's result before proceeding to the next tool call.
- NEVER invoke multiple tools in parallel, even if they appear independent.
- This applies to ALL tools without exception: Read, Write, Edit, Bash, Grep, etc.
- If a task requires multiple tool calls, break them into separate sequential messages.

**This policy ensures system stability and prevents race conditions in the development environment.**

**Additional Guidelines for Figma Dev Mode MCP Integration:**

- Fetch images and SVG assets through the **assets endpoint** provided by the Figma Dev Mode MCP Server.
- Do not provide SVGs directly; instead, find and use the closest matching icons from @iconify-json/lucide, @iconify-json/simple-icons, or @iconify-json/twemoji.
- **Important**: If the Figma MCP Server returns localhost sources, use those sources directly.
- **Important**: Do not install new icon packages. All assets must be obtained from Figma.
- **Important**: If localhost sources exist, do not create placeholders.
- Extract exact color values, spacing, and font sizes from the Figma design and use them precisely.
- Check and apply mobile, tablet, and desktop breakpoints as specified in Figma.

## Project Overview

TODO.

## Tech Stack & Architecture

### Frontend

- **Framework**: SvelteKit + Svelte 5 + Vite
- **Styling**: PandaCSS, svelte-sonner(toast message), @iconify-json/lucide, @iconify-json/simple-icons, @iconify-json/twemoji
- **etc**: dayjs

### Styling Guidelines

#### PandaCSS Token Usage

```typescript
// Correct usage
css({
  paddingX: "16px",
  paddingY: "8px",
  color: "text.default",
  backgroundColor: "surface.default",
  lineHeight: "[1.6]",
});

// Incorrect usage (hardcoded values, value without unit, shorthands, multiple values, arbitrary values without brackets)
css({ p: "16 8", color: "#000000", bg: "white", lineHeight: "1.6" });
```

## Accessibility

- Consider keyboard navigation and ARIA labels.
- Always include alt attributes for images.

## Forbidden Patterns

- Avoid any type → define clear interfaces.
- No inline styles → use PandaCSS classes.
- Do not leave placeholder text.
- Components longer than 150 lines should be split.
- Inline event handlers are forbidden → use handle{Action} pattern.
- Avoid external CDNs → use local assets.
