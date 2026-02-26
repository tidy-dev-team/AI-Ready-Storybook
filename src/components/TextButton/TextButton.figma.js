// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/TextButton/TextButton.tsx
// component=TextButton
const figma = require('figma');
const instance = figma.selectedInstance;

const label = instance.getString('Label') ?? instance.getString('label') ?? 'Button';
const showChevron = instance.getBoolean('Show chevron') ?? instance.getBoolean('showChevron') ?? true;

export default {
  example: figma.code`<TextButton label="${label}" showChevron={${showChevron}} />`,
  imports: ['import { TextButton } from "@/components/TextButton/TextButton";'],
  id: 'text-button',
  metadata: { nestable: true },
};
