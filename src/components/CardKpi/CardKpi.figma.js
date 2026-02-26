// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/CardKpi/CardKpi.tsx
// component=CardKpi
const figma = require('figma');
const instance = figma.selectedInstance;

const title = instance.getString('Title') ?? instance.getString('title') ?? 'Pension Portfolio';
const kpiValue = instance.getString('KPI value') ?? instance.getString('kpiValue') ?? '$847,320';

export default {
  example: figma.code`<CardKpi title="${title}" kpiValue="${kpiValue}" />`,
  imports: ['import { CardKpi } from "@/components/CardKpi/CardKpi";'],
  id: 'card-kpi',
  metadata: { nestable: true },
};
