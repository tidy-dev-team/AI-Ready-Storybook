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

/** Default — shows the warm gradient fallback (no imageUrl needed) */
export const Default: Story = {
  args: {
    tag: '2025 Wrapped',
    label: 'Total Contributions',
    kpi: '$56,200',
    badge: '🏆 Top Achievement',
    description: 'Maximum pension contributions reached',
  },
};

/** Without a badge pill */
export const NoBadge: Story = {
  args: {
    tag: '2025 Wrapped',
    label: 'Total Contributions',
    kpi: '$56,200',
    badge: undefined,
    description: 'Maximum pension contributions reached',
  },
};

/** Without a tag */
export const NoTag: Story = {
  args: {
    tag: undefined,
    label: 'Portfolio Value',
    kpi: '$128,450',
    badge: '📈 All-time High',
    description: 'Your best performance yet',
  },
};

/** Different content variant */
export const HealthPlan: Story = {
  args: {
    tag: 'Health 2025',
    label: 'Claims This Year',
    kpi: '$3,840',
    badge: '✅ Fully Covered',
    description: 'No out-of-pocket expenses',
    onLinkClick: () => alert('View plan details'),
  },
};
