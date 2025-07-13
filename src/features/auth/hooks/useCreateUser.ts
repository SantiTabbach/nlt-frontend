import { useMutation, useQueryClient } from '@tanstack/react-query';

import { register } from '../repositories/authRepository';

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: register,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
