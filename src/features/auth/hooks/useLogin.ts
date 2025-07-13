import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login } from '../repositories/authRepository';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
  });
};

export default useLogin;
