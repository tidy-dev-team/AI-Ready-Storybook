import React, { useState, useRef } from 'react';
import styles from './SearchBar.module.css';
import { SendIcon } from '../icons/index.tsx';

export type SearchBarState = 'idle' | 'focused' | 'disabled';
export type SearchBarType = 'empty' | 'filled';

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  state?: SearchBarState;
  onChange?: (value: string) => void;
  onSubmit?: (value: string) => void;
}

export function SearchBar({
  placeholder = 'Ask me anything...',
  value,
  defaultValue = '',
  state = 'idle',
  onChange,
  onSubmit,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const controlled = value !== undefined;
  const displayValue = controlled ? value : internalValue;
  const isFilled = displayValue.trim().length > 0;

  const effectiveState: SearchBarState =
    state === 'disabled' ? 'disabled'
    : focused ? 'focused'
    : 'idle';

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!controlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  }

  function handleSubmit() {
    if (displayValue.trim()) onSubmit?.(displayValue.trim());
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  const typeClass = isFilled ? styles.filled : styles.empty;

  return (
    <div className={`${styles.wrapper} ${styles[effectiveState]} ${typeClass}`}>
      <div className={styles.leftContent}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.searchIcon}>
          <circle cx="7" cy="7" r="4.5" stroke="#636363" strokeWidth="1.25" />
          <path d="M10.5 10.5L13.5 13.5" stroke="#636363" strokeWidth="1.25" strokeLinecap="round" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          className={styles.input}
          placeholder={placeholder}
          value={displayValue}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onKeyDown={handleKeyDown}
          disabled={state === 'disabled'}
          aria-label={placeholder}
        />
      </div>
      <button
        type="button"
        className={styles.submitBtn}
        onClick={handleSubmit}
        disabled={state === 'disabled'}
        aria-label="Send"
      >
        <SendIcon size={14} color={state === 'disabled' ? '#b0b0b0' : '#ffffff'} />
      </button>
    </div>
  );
}
