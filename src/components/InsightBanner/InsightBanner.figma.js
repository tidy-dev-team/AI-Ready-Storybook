// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/InsightBanner/InsightBanner.tsx
// component=InsightBanner
const figma = require('figma');
const instance = figma.selectedInstance;

const text = instance.getString('Text') ?? instance.getString('text') ?? 'Your management fees are 0.8% above market average.';
const actionLabel = instance.getString('Action label') ?? instance.getString('actionLabel') ?? 'Review';

export default {
  example: figma.code`<InsightBanner text="${text}" actionLabel="${actionLabel}" />`,
  imports: ['import { InsightBanner } from "@/components/InsightBanner/InsightBanner";'],
  id: 'insight-banner',
  metadata: { nestable: true },
};
