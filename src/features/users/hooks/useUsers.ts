import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../userService';

export function useUsers() {
	return useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	});
}
