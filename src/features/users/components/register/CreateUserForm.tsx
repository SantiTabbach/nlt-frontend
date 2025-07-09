'use client';

import { AtSign, LockKeyhole, User } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	createUserSchema,
	CreateUserDTO,
} from '../../schemas/createUserSchema';
import { useCreateUser } from '../../hooks/useCreateUser';

import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { ROLE_OPTIONS } from '@/features/users/constants';
import { UserRole } from '@/core/domain/user/User';

interface Props {
	userRole: UserRole;
}
const CreateUserForm = ({ userRole }: Props) => {
	const { register, handleSubmit, reset } = useForm<CreateUserDTO>({
		resolver: zodResolver(createUserSchema),
		defaultValues: {
			role: userRole,
		},
	});

	const { mutate, isPending } = useCreateUser();

	const onSubmit = (data: CreateUserDTO) => {
		mutate(data, {
			onSuccess: () => reset(),
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-sm border"
		>
			<Input
				label="Nombre completo"
				placeholder="Tu nombre completo"
				leftIcon={<User className="h-4 w-4" />}
				{...register('name')}
			/>
			<Input
				label="Email"
				placeholder="Email"
				leftIcon={<AtSign className="h-4 w-4" />}
				{...register('email')}
			/>
			<Input
				label="Contraseña"
				placeholder="Contraseña"
				type="password"
				leftIcon={<LockKeyhole className="h-4 w-4" />}
				{...register('password')}
			/>
			<Select
				label="Rol"
				options={ROLE_OPTIONS}
				placeholder="Selecciona una opción"
				{...register('role')}
				disabled
			/>
			<Button type="submit" loading={isPending} disabled={isPending} fullWidth>
				Crear Usuario
			</Button>
		</form>
	);
};

export default CreateUserForm;
