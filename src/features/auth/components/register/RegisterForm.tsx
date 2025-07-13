'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, LockKeyhole, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { useCreateUser } from '../../hooks/useCreateUser';
import { RegisterDTO, registerSchema } from '../../schemas/registerSchema';
import { ROLE_OPTIONS } from '../../utils/constants';

import { Button } from '@/presentation/components/ui/Button';
import { Input } from '@/presentation/components/ui/Input';
import { Select } from '@/presentation/components/ui/Select';
import { UserRole } from '@/domain/User';

interface Props {
  userRole: UserRole;
}
const RegisterForm = ({ userRole }: Props) => {
  const { register, handleSubmit, reset } = useForm<RegisterDTO>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      role: userRole,
    },
  });

  const { mutate, isPending } = useCreateUser();

  const onSubmit = (data: RegisterDTO) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  return (
    <form
      onSubmit={() => handleSubmit(onSubmit)}
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

export default RegisterForm;
