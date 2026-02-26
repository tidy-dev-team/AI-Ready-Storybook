// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/CategoryIcon/CategoryIcon.tsx
// component=CategoryIcon
const figma = require('figma');
const instance = figma.selectedInstance;

const icon = instance.getEnum('Icon', {
  Wallet: 'wallet',
  Home: 'home',
  Shield: 'shield',
  Savings: 'savings',
  'File text': 'file-text',
  Mail: 'mail',
  Headset: 'headset',
}) ?? 'wallet';

export default {
  example: figma.code`<CategoryIcon icon="${icon}" />`,
  imports: ['import { CategoryIcon } from "@/components/CategoryIcon/CategoryIcon";'],
  id: 'category-icon',
  metadata: { nestable: true },
};
