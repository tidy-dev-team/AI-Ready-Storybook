// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/BadgeNum/BadgeNum.tsx
// component=BadgeNum
const figma = require('figma');
const instance = figma.selectedInstance;

const count = instance.getString('Count') ?? '0';

export default {
  example: figma.code`<BadgeNum count={${count}} />`,
  imports: ['import { BadgeNum } from "@/components/BadgeNum/BadgeNum";'],
  id: 'badge-num',
  metadata: { nestable: true },
};
