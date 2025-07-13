import type React from 'react';
import { forwardRef } from 'react';

import { FormField } from './FormField';
import type { BaseInputProps, InputSize, InputVariant } from './types';

interface InputProps
  extends BaseInputProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: InputSize;
  variant?: InputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-3 py-2 text-sm',
  lg: 'px-4 py-3 text-base',
};

const variantClasses = {
  default: 'border-gray-300 focus:ring-green-500 focus:border-green-500',
  success:
    'border-green-300 focus:ring-green-500 focus:border-green-500 bg-green-50',
  error: 'border-red-300 focus:ring-red-500 focus:border-red-500 bg-red-50',
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      hint,
      required,
      disabled,
      className = '',
      size = 'md',
      variant = 'default',
      leftIcon,
      rightIcon,
      loading,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Determine variant based on validation state
    const currentVariant = error ? 'error' : success ? 'success' : variant;

    const inputClasses = `
    w-full rounded-lg border transition-colors duration-200
    ${sizeClasses[size]}
    ${variantClasses[currentVariant]}
    ${leftIcon ? 'pl-10' : ''}
    ${rightIcon || loading ? 'pr-10' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
    ${className}
  `.trim();

    const inputElement = (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400">{leftIcon}</div>
          </div>
        )}

        <input
          ref={ref}
          id={inputId}
          disabled={disabled || loading}
          className={inputClasses}
          {...props}
        />

        {(rightIcon || loading) && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-green-600"></div>
            ) : (
              <div className="text-gray-400">{rightIcon}</div>
            )}
          </div>
        )}
      </div>
    );

    if (label || error || success || hint) {
      return (
        <FormField
          label={label}
          error={error}
          success={success}
          hint={hint}
          required={required}
          htmlFor={inputId}
        >
          {inputElement}
        </FormField>
      );
    }

    return inputElement;
  },
);

Input.displayName = 'Input';
