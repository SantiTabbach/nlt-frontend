import type { ReactNode } from 'react';

export interface BaseInputProps {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export interface ValidationState {
  isValid?: boolean;
  error?: string;
  success?: string;
}

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'success' | 'error';

export interface FormFieldProps extends BaseInputProps {
  children: ReactNode;
  htmlFor?: string;
}
