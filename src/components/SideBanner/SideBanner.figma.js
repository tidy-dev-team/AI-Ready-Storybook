// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/SideBanner/SideBanner.tsx
// component=SideBanner
const figma = require('figma');
const instance = figma.selectedInstance;

const label = instance.getString('Label') ?? instance.getString('label') ?? 'Total Contributions';
const kpi = instance.getString('KPI') ?? instance.getString('kpi') ?? '$56,200';

export default {
  example: figma.code`<SideBanner label="${label}" kpi="${kpi}" />`,
  imports: ['import { SideBanner } from "@/components/SideBanner/SideBanner";'],
  id: 'side-banner',
  metadata: { nestable: true },
};
