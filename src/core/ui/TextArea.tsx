import type React from 'react';
import { forwardRef } from 'react';
import { FormField } from './FormField';
import type { BaseInputProps, InputSize, InputVariant } from './types';

interface TextareaProps
	extends BaseInputProps,
		React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	size?: InputSize;
	variant?: InputVariant;
	resize?: boolean;
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

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
			resize = true,
			id,
			...props
		},
		ref
	) => {
		const textareaId =
			id || `textarea-${Math.random().toString(36).substr(2, 9)}`;

		const currentVariant = error ? 'error' : success ? 'success' : variant;

		const textareaClasses = `
    w-full rounded-lg border transition-colors duration-200
    ${sizeClasses[size]}
    ${variantClasses[currentVariant]}
    ${!resize ? 'resize-none' : ''}
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
    ${className}
  `.trim();

		const textareaElement = (
			<textarea
				ref={ref}
				id={textareaId}
				disabled={disabled}
				className={textareaClasses}
				{...props}
			/>
		);

		if (label || error || success || hint) {
			return (
				<FormField
					label={label}
					error={error}
					success={success}
					hint={hint}
					required={required}
					htmlFor={textareaId}
				>
					{textareaElement}
				</FormField>
			);
		}

		return textareaElement;
	}
);

Textarea.displayName = 'Textarea';
