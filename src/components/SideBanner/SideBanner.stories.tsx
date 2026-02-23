import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideBanner } from './SideBanner.tsx';

const meta: Meta<typeof SideBanner> = {
  title: 'Components/SideBanner',
  component: SideBanner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SideBanner>;

/** Full design — matches the Figma spec exactly */
export const Default: Story = {
  args: {
    imageUrl: '/side-banner-bg.png',
    tag: '2025 Wrapped',
    label: 'Total Contributions',
    kpi: '$56,200',
    badge: '🏆 Top Achievement',
    description: 'Maximum pension contributions reached',
  },
};

/** No background image — shows the warm CSS gradient fallback */
export const NoImage: Story = {
  args: {
    tag: '2025 Wrapped',
    label: 'Total Contributions',
    kpi: '$56,200',
    badge: '🏆 Top Achievement',
    description: 'Maximum pension contributions reached',
  },
};

/** No tag pill at the top */
export const NoTag: Story = {
  args: {
    imageUrl: '/side-banner-bg.png',
    tag: undefined,
    label: 'Portfolio Value',
    kpi: '$128,450',
    badge: '📈 All-time High',
    description: 'Your best performance yet',
  },
};

/** No badge — just label, KPI and description */
export const NoBadge: Story = {
  args: {
    imageUrl: '/side-banner-bg.png',
    tag: 'Q1 2025',
    label: 'Net Returns',
    kpi: '+12.4%',
    badge: undefined,
    description: 'Above market average this quarter',
  },
};
