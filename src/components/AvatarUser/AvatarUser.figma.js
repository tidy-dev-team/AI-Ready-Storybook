// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/AvatarUser/AvatarUser.tsx
// component=AvatarUser
const figma = require('figma');
const instance = figma.selectedInstance;

const name = instance.getString('Name') ?? instance.getString('name') ?? 'David';
const active = instance.getBoolean('Active') ?? instance.getBoolean('active') ?? true;

export default {
  example: figma.code`<AvatarUser name="${name}" active={${active}} />`,
  imports: ['import { AvatarUser } from "@/components/AvatarUser/AvatarUser";'],
  id: 'avatar-user',
  metadata: { nestable: true },
};
