// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/AvatarMember/AvatarMember.tsx
// component=AvatarMember
const figma = require('figma');
const instance = figma.selectedInstance;

const member = instance.getEnum('Member', { '1': '1', '2': '2', '3': '3', '4': '4' }) ?? '1';

export default {
  example: figma.code`<AvatarMember member="${member}" />`,
  imports: ['import { AvatarMember } from "@/components/AvatarMember/AvatarMember";'],
  id: 'avatar-member',
  metadata: { nestable: true },
};
