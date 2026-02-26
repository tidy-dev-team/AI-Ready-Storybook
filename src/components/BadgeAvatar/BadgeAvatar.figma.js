// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/BadgeAvatar/BadgeAvatar.tsx
// component=BadgeAvatar
const figma = require('figma');
const instance = figma.selectedInstance;

const icon = instance.getEnum('Icon', {
  Home: 'home',
  Wallet: 'wallet',
  Shield: 'shield',
  Savings: 'savings',
  'File text': 'file-text',
  Mail: 'mail',
  Headset: 'headset',
}) ?? 'home';

export default {
  example: figma.code`<BadgeAvatar icon="${icon}" />`,
  imports: ['import { BadgeAvatar } from "@/components/BadgeAvatar/BadgeAvatar";'],
  id: 'badge-avatar',
  metadata: { nestable: true },
};
