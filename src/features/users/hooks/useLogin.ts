import { useMutation, useQueryClient } from '@tanstack/react-query';
import { loginUser } from '../userRepository';

const useLogin = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: loginUser,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['user'] });
		},
	});
};

export default useLogin;
