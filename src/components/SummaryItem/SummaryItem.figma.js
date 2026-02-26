// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/SummaryItem/SummaryItem.tsx
// component=SummaryItem
const figma = require('figma');
const instance = figma.selectedInstance;

const title = instance.getString('Title') ?? 'Last Deposit';
const kpi = instance.getString('KPI') ?? instance.getString('kpi') ?? '$4,200';

export default {
  example: figma.code`<SummaryItem title="${title}" kpi="${kpi}" />`,
  imports: ['import { SummaryItem } from "@/components/SummaryItem/SummaryItem";'],
  id: 'summary-item',
  metadata: { nestable: true },
};
