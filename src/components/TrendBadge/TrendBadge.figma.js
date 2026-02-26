// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/TrendBadge/TrendBadge.tsx
// component=TrendBadge
const figma = require('figma');
const instance = figma.selectedInstance;

const value = instance.getString('Value') ?? instance.getString('value') ?? '+12.4%';
const direction = instance.getEnum('Direction', { Positive: 'positive', Negative: 'negative' }) ?? 'positive';

export default {
  example: figma.code`<TrendBadge value="${value}" direction="${direction}" />`,
  imports: ['import { TrendBadge } from "@/components/TrendBadge/TrendBadge";'],
  id: 'trend-badge',
  metadata: { nestable: true },
};
