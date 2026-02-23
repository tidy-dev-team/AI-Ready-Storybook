import React from 'react';
import styles from './CardKpi.module.css';
import { TextButton } from '../TextButton/TextButton.tsx';
import { TrendBadge } from '../TrendBadge/TrendBadge.tsx';
import { CategoryIcon } from '../CategoryIcon/CategoryIcon.tsx';
import type { CategoryIconType } from '../CategoryIcon/CategoryIcon.tsx';

export interface CardKpiProps {
  title?: string;
  icon?: CategoryIconType;
  kpiValue?: string;
  kpiLabel?: string;
  trend?: string;
  trendDirection?: 'positive' | 'negative';
  ctaLabel?: string;
  onCtaClick?: () => void;
  /** Slot for chart or additional content */
  children?: React.ReactNode;
}

export function CardKpi({
  title = 'Total Pension',
  icon = 'wallet',
  kpiValue = '$84,200',
  kpiLabel = 'Total balance',
  trend = '+12.4%',
  trendDirection = 'positive',
  ctaLabel = 'View Full Portfolio',
  onCtaClick,
  children,
}: CardKpiProps) {
  return (
    <div className={styles.card}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <CategoryIcon icon={icon} />
          <span className={styles.title}>{title}</span>
        </div>
        <TextButton label={ctaLabel} onClick={onCtaClick} />
      </div>

      {/* KPI content */}
      <div className={styles.contentWrapper}>
        <div className={styles.kpiBlock}>
          <span className={styles.kpiLabel}>{kpiLabel}</span>
          <div className={styles.kpiRow}>
            <span className={styles.kpiValue}>{kpiValue}</span>
            {trend && <TrendBadge value={trend} direction={trendDirection} />}
          </div>
        </div>

        {/* Chart slot */}
        {children ? (
          <div className={styles.chartSlot}>{children}</div>
        ) : (
          <div className={styles.chartPlaceholder} aria-hidden="true">
            <svg viewBox="0 0 333 120" fill="none" className={styles.chartSvg}>
              <path d="M0 90 C40 80, 80 30, 120 50 S200 80, 240 40 S300 10, 333 20" stroke="#E8E8E8" strokeWidth="2" fill="none" />
              <path d="M0 90 C40 80, 80 30, 120 50 S200 80, 240 40 S300 10, 333 20 V120 H0 Z" fill="rgba(0,122,85,0.04)" />
              {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((x, i) => (
                <line key={i} x1={x} y1="0" x2={x} y2="120" stroke="#F5F5F3" strokeWidth="1" />
              ))}
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
