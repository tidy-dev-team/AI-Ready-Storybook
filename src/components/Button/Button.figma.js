// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=18-1539
// source=src/components/Button/Button.tsx
// component=Button
const figma = require('figma');
const instance = figma.selectedInstance;

const label = instance.getString('Label') ?? instance.getString('label') ?? 'Button';
const fullWidth = instance.getBoolean('Full width') ?? instance.getBoolean('fullWidth') ?? false;

export default {
  example: figma.code`<Button label="${label}" fullWidth={${fullWidth}} />`,
  imports: ['import { Button } from "@/components/Button/Button";'],
  id: 'button',
  metadata: { nestable: true },
};
