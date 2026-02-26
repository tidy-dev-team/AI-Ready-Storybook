# Code Connect: Figma ↔ Components

This project is set up for **Figma Code Connect**: each component under `src/components/` has a matching `.figma.js` template that links the design to the code.

## What’s in place

- **`figma.config.json`** – Tells Figma to include all `src/components/**/*.figma.js` templates with label **React** and language **tsx**.
- **Per-component `.figma.js` files** – One next to each component (e.g. `Button.figma.js`, `AvatarMember.figma.js`). Each file has:
  - **url** – Figma design URL (currently the frame `node-id=7-10`; you can point each file to the exact component node).
  - **source** – Path to the code component.
  - **component** – Component name.
  - An **example** snippet that maps Figma props to the React component.

## Pointing each template to the right Figma component

All templates currently use the same Figma URL (the frame you shared). For a precise 1:1 link:

1. In Figma, open [AI-Demo-design](https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10).
2. Select the **specific component** (e.g. the Button component).
3. Right‑click → **Copy link to selection** (or copy from the browser URL).
4. In the matching `.figma.js` file, replace the `url=` line with that link, e.g.  
   `// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=12-345`

## Publishing to Figma

1. **Token** – Ensure your Figma Personal Access Token has **Code Connect: Write**.  
   Set it in `.env.local` as `FIGMA_ACCESS_TOKEN=your_token` (already in `.gitignore`) or as an environment variable.

2. **Publish** from the project root:
   ```bash
   npm run figma:publish
   ```
   This uses `--skip-validation` so it works when your `.figma.js` URLs point at a frame (e.g. node `7-10`) instead of individual components. Set `FIGMA_ACCESS_TOKEN` in your environment (e.g. from `.env.local`) or pass it:  
   `npx @figma/code-connect connect publish -c figma.config.json -t YOUR_TOKEN --skip-validation`

3. **If you later use real Figma components**  
   Update each `.figma.js` so the `url=` line points to a component (right‑click in Figma → “Copy link to selection”). Then run with validation:
   ```bash
   npm run figma:publish:validate
   ```

## Requirements

- **Figma plan**: Code Connect is available on **Organization and Enterprise** plans.
- **Published components**: The Figma components you link to should be **published to a team library** for Code Connect to work correctly.

## Components covered

All exported components in `src/components/index.ts` have a corresponding `.figma.js`:

- BadgeNum, TrendBadge, Divider, CategoryIcon, Tag, BadgeAvatar  
- Button, ButtonIcon, TextButton  
- AvatarMember, AvatarUser  
- ListItem, SearchBar, SummaryItem, InsightBanner  
- NavigationPanel  
- CardKpi, InsuranceCard, CardInsuranceCoverage, SideBanner  

If you add new components, add a matching `.figma.js` and keep `figma.config.json` as-is (it already includes `src/components/**/*.figma.js`).
