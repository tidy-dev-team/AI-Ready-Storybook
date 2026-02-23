import React from 'react';
import styles from './AvatarMember.module.css';

export type MemberVariant = '1' | '2' | '3' | '4';

export interface AvatarMemberProps {
  member?: MemberVariant;
  /** URL for member image — falls back to initial placeholder */
  src?: string;
  alt?: string;
}

const PLACEHOLDER_COLORS: Record<MemberVariant, { bg: string; text: string; initial: string }> = {
  '1': { bg: '#d5efe3', text: '#007a55', initial: 'D' },
  '2': { bg: '#dfe8fb', text: '#2b5be6', initial: 'A' },
  '3': { bg: '#fbe8d5', text: '#b05a1a', initial: 'S' },
  '4': { bg: '#f3d5f5', text: '#8a1ab0', initial: 'M' },
};

export function AvatarMember({ member = '1', src, alt }: AvatarMemberProps) {
  const placeholder = PLACEHOLDER_COLORS[member];
  return (
    <div className={styles.avatar}>
      {src ? (
        <img src={src} alt={alt ?? `Member ${member}`} className={styles.img} />
      ) : (
        <span
          className={styles.initial}
          style={{ backgroundColor: placeholder.bg, color: placeholder.text }}
          aria-label={alt ?? `Member ${member}`}
        >
          {placeholder.initial}
        </span>
      )}
    </div>
  );
}
