// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/Tag/Tag.tsx
// component=Tag
const figma = require('figma');
const instance = figma.selectedInstance;

const label = instance.getString('Label') ?? instance.getString('label') ?? 'Tag';
const showChevron = instance.getBoolean('Show chevron') ?? instance.getBoolean('showChevron') ?? false;

export default {
  example: figma.code`<Tag label="${label}" showChevron={${showChevron}} />`,
  imports: ['import { Tag } from "@/components/Tag/Tag";'],
  id: 'tag',
  metadata: { nestable: true },
};
