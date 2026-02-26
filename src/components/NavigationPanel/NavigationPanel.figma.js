// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/NavigationPanel/NavigationPanel.tsx
// component=NavigationPanel
const figma = require('figma');
const instance = figma.selectedInstance;

const userName = instance.getString('User name') ?? instance.getString('userName') ?? 'David';

export default {
  example: figma.code`<NavigationPanel userName="${userName}" />`,
  imports: ['import { NavigationPanel } from "@/components/NavigationPanel/NavigationPanel";'],
  id: 'navigation-panel',
  metadata: { nestable: false },
};
