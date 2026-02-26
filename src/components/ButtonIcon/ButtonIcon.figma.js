// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/ButtonIcon/ButtonIcon.tsx
// component=ButtonIcon
const figma = require('figma');

export default {
  example: figma.code`<ButtonIcon icon={/* icon node */} aria-label="icon button" />`,
  imports: ['import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";'],
  id: 'button-icon',
  metadata: { nestable: true },
};
