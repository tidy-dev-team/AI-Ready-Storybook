import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardKpi } from './CardKpi.tsx';

const meta = {
  title: 'Components/CardKpi',
  component: CardKpi,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
} satisfies Meta<typeof CardKpi>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Pension: Story = {
  args: {
    title: 'Pension Portfolio',
    icon: 'wallet',
    kpiValue: '$847,320',
    kpiLabel: 'Total Balance',
    trend: '12.4%',
    trendDirection: 'positive',
    ctaLabel: 'View Full Portfolio',
  },
};

export const Insurance: Story = {
  args: {
    title: 'Insurance Coverage',
    icon: 'shield',
    kpiValue: '$1,200,000',
    kpiLabel: 'Total coverage',
    trend: '5.2%',
    trendDirection: 'positive',
    ctaLabel: 'View Details',
  },
};

export const Savings: Story = {
  args: {
    title: 'Savings',
    icon: 'savings',
    kpiValue: '$32,500',
    kpiLabel: 'Total savings',
    trend: '1.8%',
    trendDirection: 'negative',
    ctaLabel: 'View Account',
  },
};

const AreaChart = () => {
  const points = [
    { x: 0,   y: 220 },
    { x: 37,  y: 190 },
    { x: 74,  y: 210 },
    { x: 111, y: 160 },
    { x: 148, y: 175 },
    { x: 185, y: 120 },
    { x: 222, y: 90  },
    { x: 259, y: 100 },
    { x: 296, y: 55  },
    { x: 333, y: 30  },
  ];

  const lineD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`)
    .join(' ');

  const areaD = `${lineD} L333,290 L0,290 Z`;

  return (
    <svg
      viewBox="0 0 333 290"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#007a55" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#007a55" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {[60, 110, 160, 210, 260].map((y) => (
        <line key={y} x1="0" y1={y} x2="333" y2={y} stroke="#F0F0EC" strokeWidth="1" />
      ))}

      {/* Area fill */}
      <path d={areaD} fill="url(#areaGrad)" />

      {/* Line */}
      <path d={lineD} stroke="#007a55" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />

      {/* Last data point dot */}
      <circle cx="333" cy="30" r="4" fill="#007a55" />
      <circle cx="333" cy="30" r="7" fill="#007a55" fillOpacity="0.15" />
    </svg>
  );
};

export const WithChart: Story = {
  args: {
    title: 'Pension Portfolio',
    icon: 'wallet',
    kpiValue: '$847,320',
    kpiLabel: 'Total Balance',
    trend: '12.4%',
    trendDirection: 'positive',
    ctaLabel: 'View Full Portfolio',
  },
  render: (args) => (
    <CardKpi {...args}>
      <AreaChart />
    </CardKpi>
  ),
};
