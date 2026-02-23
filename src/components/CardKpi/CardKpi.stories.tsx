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
    title: 'Total Pension',
    icon: 'wallet',
    kpiValue: '$84,200',
    kpiLabel: 'Total balance',
    trend: '+12.4%',
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
    trend: '+5.2%',
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
    trend: '-1.8%',
    trendDirection: 'negative',
    ctaLabel: 'View Account',
  },
};
