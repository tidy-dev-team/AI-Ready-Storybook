import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

export function HomeIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M2.25 7.5L9 2.25L15.75 7.5V15.75C15.75 16.164 15.414 16.5 15 16.5H11.25V11.25H6.75V16.5H3C2.586 16.5 2.25 16.164 2.25 15.75V7.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WalletIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <rect x="1.5" y="4.5" width="15" height="11.25" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M1.5 7.5H16.5" stroke={color} strokeWidth="1.2" />
      <path d="M5.25 2.25L13.5 4.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="12.75" cy="11.25" r="1.125" fill={color} />
    </svg>
  );
}

export function SwitchIcon({ size = 16, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M11 2L14 5L11 8" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 5H14" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
      <path d="M5 14L2 11L5 8" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11H2" stroke={color} strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  );
}

export function ShieldIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M9 1.5L2.25 4.5V9C2.25 12.728 5.204 16.2 9 16.5C12.796 16.2 15.75 12.728 15.75 9V4.5L9 1.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9L8 11L12 7" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SavingsIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M3 10.5C3 13.814 5.686 16.5 9 16.5C12.314 16.5 15 13.814 15 10.5C15 8.25 13.5 6.375 11.25 5.625V4.5C11.25 3.257 10.243 2.25 9 2.25C7.757 2.25 6.75 3.257 6.75 4.5V5.625C4.5 6.375 3 8.25 3 10.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 5.25V2.25" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 10.5H9.75" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M15.75 10.5H15" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function FileTextIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M10.5 1.5H4.5C3.672 1.5 3 2.172 3 3V15C3 15.828 3.672 16.5 4.5 16.5H13.5C14.328 16.5 15 15.828 15 15V6L10.5 1.5Z" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 1.5V6H15" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5H12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 13.5H10.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6 7.5H7.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function HeadsetIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <path d="M3 9C3 5.686 5.686 3 9 3C12.314 3 15 5.686 15 9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      <rect x="2.25" y="9" width="2.25" height="4.5" rx="1.125" stroke={color} strokeWidth="1.2" />
      <rect x="13.5" y="9" width="2.25" height="4.5" rx="1.125" stroke={color} strokeWidth="1.2" />
      <path d="M15.75 13.5C15.75 14.743 14.743 15.75 13.5 15.75H11.25" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function MailIcon({ size = 18, color = '#171717', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" fill="none" className={className}>
      <rect x="1.5" y="3.75" width="15" height="10.5" rx="1.5" stroke={color} strokeWidth="1.2" />
      <path d="M1.5 6.75L9 10.5L16.5 6.75" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export type ChevronDirection = 'up' | 'down' | 'left' | 'right';

export function ChevronIcon({ size = 16, color = '#636363', direction = 'right', className }: IconProps & { direction?: ChevronDirection }) {
  const rotate: Record<ChevronDirection, number> = { right: 0, down: 90, left: 180, up: 270 };
  return (
    <svg
      width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}
      style={{ transform: `rotate(${rotate[direction]}deg)` }}
    >
      <path d="M6 4L10 8L6 12" stroke={color} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SendIcon({ size = 16, color = '#ffffff', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M14 2L7.5 8.5M14 2L9.5 14L7.5 8.5M14 2L2 6.5L7.5 8.5" stroke={color} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
