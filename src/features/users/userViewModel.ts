import { User } from '@/core/domain/user/User';

export interface UserViewModel {
	id: number;
	name: string;
	email: string;
	role: string;
	active: boolean;
	createdAt?: string;
}

export const userAdapter = (user: User): UserViewModel => {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		role: user.getFormattedRole(),
		active: user.isActive(),
		createdAt: user.getCreationDate(),
	};
};
