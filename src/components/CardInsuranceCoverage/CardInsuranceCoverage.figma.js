// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/CardInsuranceCoverage/CardInsuranceCoverage.tsx
// component=CardInsuranceCoverage
const figma = require('figma');
const instance = figma.selectedInstance;

const title = instance.getString('Title') ?? instance.getString('title') ?? 'Insurance Coverage';

export default {
  example: figma.code`<CardInsuranceCoverage title="${title}" />`,
  imports: ['import { CardInsuranceCoverage } from "@/components/CardInsuranceCoverage/CardInsuranceCoverage";'],
  id: 'card-insurance-coverage',
  metadata: { nestable: true },
};
