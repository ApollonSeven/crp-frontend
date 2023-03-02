import { ReactNode } from 'react';

export type ButtonSize = 'XS' | 'S' | 'M' | 'L';

export type ButtonVariant = "Primary" | "Secondary" | "Tertiary"

export type Props = {
  size?: ButtonSize;
  disabled?: boolean;
  styles?: Record<string, string>;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant
};
