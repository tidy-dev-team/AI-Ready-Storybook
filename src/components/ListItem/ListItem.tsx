import React from 'react';
import styles from './ListItem.module.css';
import { BadgeAvatar } from '../BadgeAvatar/BadgeAvatar.tsx';
import { BadgeNum } from '../BadgeNum/BadgeNum.tsx';
import { ChevronIcon } from '../icons/index.tsx';
import type { BadgeAvatarIcon } from '../BadgeAvatar/BadgeAvatar.tsx';

export type ListItemState = 'idle' | 'hover' | 'selected';

export interface ListItemProps {
  text?: string;
  icon?: BadgeAvatarIcon;
  state?: ListItemState;
  showChevron?: boolean;
  badgeCount?: number;
  onClick?: () => void;
}

export function ListItem({
  text = 'List item',
  icon = 'home',
  state = 'idle',
  showChevron = false,
  badgeCount,
  onClick,
}: ListItemProps) {
  return (
    <button
      type="button"
      className={`${styles.item} ${styles[state]}`}
      onClick={onClick}
      aria-current={state === 'selected' ? 'page' : undefined}
    >
      <BadgeAvatar icon={icon} fill={state === 'selected' ? 'yes' : 'yes'} />
      <span className={styles.label}>{text}</span>
      <span className={styles.right}>
        {badgeCount != null && badgeCount > 0 && <BadgeNum count={badgeCount} />}
        {showChevron && <ChevronIcon size={16} color="#636363" direction="right" />}
      </span>
    </button>
  );
}
