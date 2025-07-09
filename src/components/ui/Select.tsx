import type React from 'react';
import { forwardRef } from 'react';
import { FormField } from './FormField';
import type { BaseInputProps, InputSize, InputVariant } from './types';
import { ChevronDown } from 'lucide-react';

interface SelectOption {
	value: string;
	label: string;
	disabled?: boolean;
}

interface SelectProps
	extends BaseInputProps,
		Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
	size?: InputSize;
	variant?: InputVariant;
	options: SelectOption[];
	placeholder?: string;
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
			options,
			placeholder,
			id,
			...props
		},
		ref
	) => {
		const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

		const currentVariant = error ? 'error' : success ? 'success' : variant;

		const selectClasses = `
    w-full rounded-lg border transition-colors duration-200 appearance-none pr-10
    ${sizeClasses[size]}
    ${variantClasses[currentVariant]}
    ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : ''}
    ${className}
  `.trim();

		const selectElement = (
			<div className="relative">
				<select
					ref={ref}
					id={selectId}
					disabled={disabled}
					className={selectClasses}
					{...props}
				>
					{placeholder && (
						<option value="" disabled>
							{placeholder}
						</option>
					)}
					{options.map((option) => (
						<option
							key={option.value}
							value={option.value}
							disabled={option.disabled}
						>
							{option.label}
						</option>
					))}
				</select>

				<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
					<ChevronDown className="h-4 w-4 text-gray-400" />
				</div>
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
					htmlFor={selectId}
				>
					{selectElement}
				</FormField>
			);
		}

		return selectElement;
	}
);

Select.displayName = 'Select';
