import { User } from '@/core/domain/user/User';
import { getAllUsers } from './userRepository';
import { userAdapter, UserViewModel } from './userViewModel';

export const fetchUsers = async (): Promise<UserViewModel[]> => {
	const raw = await getAllUsers();
	const domain = raw.map(
		(u) =>
			new User(
				u.id,
				u.name,
				u.email,
				u.role,
				new Date(u.createdAt),
				new Date(u.updatedAt),
				u.deletedAt ? new Date(u.deletedAt) : null
			)
	);
	return domain.map(userAdapter);
};
