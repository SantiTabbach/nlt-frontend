import { useMutation, useQueryClient } from '@tanstack/react-query';

import { loginUser } from '../repositories/userRepository';

const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export default useLogin;
