// url=https://www.figma.com/design/7LWL1TZvifdDf8Oz2AH1tZ/AI-Demo-design?node-id=7-10
// source=src/components/SearchBar/SearchBar.tsx
// component=SearchBar
const figma = require('figma');
const instance = figma.selectedInstance;

const placeholder = instance.getString('Placeholder') ?? 'Ask me anything...';
const value = instance.getString('Value') ?? instance.getString('value') ?? '';

export default {
  example: figma.code`<SearchBar placeholder="${placeholder}" value="${value}" />`,
  imports: ['import { SearchBar } from "@/components/SearchBar/SearchBar";'],
  id: 'search-bar',
  metadata: { nestable: true },
};
