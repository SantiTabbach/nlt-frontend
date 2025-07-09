import type React from 'react';
import { forwardRef } from 'react';
import { FormField } from './FormField';
import type { BaseInputProps } from './types';
import { Check } from 'lucide-react';

interface CheckboxProps
	extends BaseInputProps,
		Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
	description?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	(
		{
			label,
			description,
			error,
			success,
			hint,
			required,
			disabled,
			className = '',
			id,
			checked,
			...props
		},
		ref
	) => {
		const checkboxId =
			id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

		const checkboxElement = (
			<div className="flex items-start space-x-3">
				<div className="relative flex items-center">
					<input
						ref={ref}
						type="checkbox"
						id={checkboxId}
						disabled={disabled}
						checked={checked}
						className={`
            h-4 w-4 rounded border-gray-300 text-green-600 
            focus:ring-green-500 focus:ring-2 focus:ring-offset-0
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            ${error ? 'border-red-300' : ''}
            ${className}
          `.trim()}
						{...props}
					/>
					{checked && (
						<Check className="h-3 w-3 text-green-600 absolute inset-0 m-auto pointer-events-none" />
					)}
				</div>

				<div className="flex-1">
					{label && (
						<label
							htmlFor={checkboxId}
							className={`text-sm font-medium text-gray-700 ${
								disabled ? 'opacity-50' : 'cursor-pointer'
							}`}
						>
							{label}
							{required && <span className="text-red-500 ml-1">*</span>}
						</label>
					)}
					{description && (
						<p className="text-sm text-gray-500 mt-1">{description}</p>
					)}
				</div>
			</div>
		);

		if (error || success || hint) {
			return (
				<FormField error={error} success={success} hint={hint}>
					{checkboxElement}
				</FormField>
			);
		}

		return checkboxElement;
	}
);

Checkbox.displayName = 'Checkbox';
