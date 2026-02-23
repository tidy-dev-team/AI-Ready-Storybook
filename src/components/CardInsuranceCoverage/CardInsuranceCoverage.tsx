import React, { useState } from 'react';
import styles from './CardInsuranceCoverage.module.css';
import { InsuranceCard } from '../InsuranceCard/InsuranceCard.tsx';
import { TextButton } from '../TextButton/TextButton.tsx';
import { CategoryIcon } from '../CategoryIcon/CategoryIcon.tsx';
import type { CategoryIconType } from '../CategoryIcon/CategoryIcon.tsx';

export interface InsuranceCoverageItem {
  id: string;
  title: string;
  icon: CategoryIconType;
  provider: string;
  coverage: string;
  monthlyPremium: string;
}

export type CoverageTab = 'all' | 'active' | 'pending';

const DEFAULT_ITEMS: InsuranceCoverageItem[] = [
  { id: '1', title: 'Life',     icon: 'shield',   provider: 'Harel',  coverage: '$1,200,000', monthlyPremium: '$450' },
  { id: '2', title: 'Health',   icon: 'headset',  provider: 'Maccabi', coverage: '$500,000',  monthlyPremium: '$320' },
  { id: '3', title: 'Pension',  icon: 'wallet',   provider: 'Phoenix', coverage: '$840,000',  monthlyPremium: '$650' },
  { id: '4', title: 'Savings',  icon: 'savings',  provider: 'Migdal',  coverage: '$200,000',  monthlyPremium: '$180' },
];

const TABS: { id: CoverageTab; label: string }[] = [
  { id: 'all',     label: 'All' },
  { id: 'active',  label: 'Active' },
  { id: 'pending', label: 'Pending' },
];

export interface CardInsuranceCoverageProps {
  title?: string;
  items?: InsuranceCoverageItem[];
  onViewAll?: () => void;
}

export function CardInsuranceCoverage({
  title = 'Insurance Coverage',
  items = DEFAULT_ITEMS,
  onViewAll,
}: CardInsuranceCoverageProps) {
  const [activeTab, setActiveTab] = useState<CoverageTab>('all');

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <CategoryIcon icon="shield" />
          <span className={styles.title}>{title}</span>
        </div>
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <TextButton label="View Full Portfolio" onClick={onViewAll} />
      </div>

      <div className={styles.cards}>
        {items.map((item) => (
          <InsuranceCard
            key={item.id}
            title={item.title}
            icon={item.icon}
            provider={item.provider}
            coverage={item.coverage}
            monthlyPremium={item.monthlyPremium}
          />
        ))}
      </div>
    </div>
  );
}
