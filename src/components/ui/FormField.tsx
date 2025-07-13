import { AlertCircle, CheckCircle, Info } from 'lucide-react';

import type { FormFieldProps } from './types';

export function FormField({
  label,
  error,
  success,
  hint,
  required,
  children,
  htmlFor,
  className = '',
}: FormFieldProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {children}

      {/* Feedback Messages */}
      {error && (
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {success && !error && (
        <div className="flex items-center space-x-2 text-green-600">
          <CheckCircle className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">{success}</span>
        </div>
      )}

      {hint && !error && !success && (
        <div className="flex items-center space-x-2 text-gray-500">
          <Info className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm">{hint}</span>
        </div>
      )}
    </div>
  );
}
