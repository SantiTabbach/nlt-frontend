import type React from 'react';
import { forwardRef } from 'react';
import { FormField } from './FormField';
import type { BaseInputProps } from './types';

interface RadioOption {
	value: string;
	label: string;
	description?: string;
	disabled?: boolean;
}

interface RadioGroupProps extends BaseInputProps {
	name: string;
	options: RadioOption[];
	value?: string;
	onChange?: (value: string) => void;
	orientation?: 'vertical' | 'horizontal';
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
	(
		{
			label,
			error,
			success,
			hint,
			required,
			disabled,
			className = '',
			name,
			options,
			value,
			onChange,
			orientation = 'vertical',
		},
		ref
	) => {
		const handleChange = (optionValue: string) => {
			if (!disabled && onChange) {
				onChange(optionValue);
			}
		};

		const radioGroupElement = (
			<div
				ref={ref}
				className={`
        ${orientation === 'horizontal' ? 'flex flex-wrap gap-6' : 'space-y-3'}
        ${className}
      `.trim()}
			>
				{options.map((option) => {
					const radioId = `${name}-${option.value}`;
					const isDisabled = disabled || option.disabled;

					return (
						<div key={option.value} className="flex items-start space-x-3">
							<div className="relative flex items-center">
								<input
									type="radio"
									id={radioId}
									name={name}
									value={option.value}
									checked={value === option.value}
									disabled={isDisabled}
									onChange={() => handleChange(option.value)}
									className={`
                  h-4 w-4 border-gray-300 text-green-600 
                  focus:ring-green-500 focus:ring-2 focus:ring-offset-0
                  ${
										isDisabled
											? 'opacity-50 cursor-not-allowed'
											: 'cursor-pointer'
									}
                  ${error ? 'border-red-300' : ''}
                `.trim()}
								/>
							</div>

							<div className="flex-1">
								<label
									htmlFor={radioId}
									className={`text-sm font-medium text-gray-700 ${
										isDisabled ? 'opacity-50' : 'cursor-pointer'
									}`}
								>
									{option.label}
								</label>
								{option.description && (
									<p className="text-sm text-gray-500 mt-1">
										{option.description}
									</p>
								)}
							</div>
						</div>
					);
				})}
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
				>
					{radioGroupElement}
				</FormField>
			);
		}

		return radioGroupElement;
	}
);

RadioGroup.displayName = 'RadioGroup';
