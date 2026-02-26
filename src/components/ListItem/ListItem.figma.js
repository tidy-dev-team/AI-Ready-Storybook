// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/ListItem/ListItem.tsx
// component=ListItem
const figma = require('figma');
const instance = figma.selectedInstance;

const text = instance.getString('Text') ?? instance.getString('text') ?? 'List item';
const icon = instance.getEnum('Icon', { Home: 'home', Wallet: 'wallet', Shield: 'shield', Savings: 'savings', 'File text': 'file-text', Mail: 'mail', Headset: 'headset' }) ?? 'home';

export default {
  example: figma.code`<ListItem text="${text}" icon="${icon}" />`,
  imports: ['import { ListItem } from "@/components/ListItem/ListItem";'],
  id: 'list-item',
  metadata: { nestable: true },
};
