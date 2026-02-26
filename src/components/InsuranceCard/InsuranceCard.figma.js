// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/InsuranceCard/InsuranceCard.tsx
// component=InsuranceCard
const figma = require('figma');
const instance = figma.selectedInstance;

const title = instance.getString('Title') ?? instance.getString('title') ?? 'Life';
const provider = instance.getString('Provider') ?? instance.getString('provider') ?? 'Harel';

export default {
  example: figma.code`<InsuranceCard title="${title}" provider="${provider}" />`,
  imports: ['import { InsuranceCard } from "@/components/InsuranceCard/InsuranceCard";'],
  id: 'insurance-card',
  metadata: { nestable: true },
};
