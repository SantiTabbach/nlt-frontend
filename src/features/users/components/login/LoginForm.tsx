import { zodResolver } from '@hookform/resolvers/zod';
import { AtSign, LockKeyhole } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import useLogin from '@/features/users/hooks/useLogin';
import { LoginDTO, loginSchema } from '@/features/users/schemas/loginSchema';

const LoginForm = () => {
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLogin();

  const onSubmit = (data: LoginDTO) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        router.push('/customer');
      },
    });
  };

  return (
    <form
      onSubmit={() => handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 space-y-6 bg-white rounded-lg shadow-sm border"
    >
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
      <Button type="submit" loading={isPending} disabled={isPending} fullWidth>
        Iniciar sesión
      </Button>
    </form>
  );
};

export default LoginForm;
