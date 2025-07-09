import { api } from '@/lib/axios';
import { CreateUserDTO } from './schemas/createUserSchema';
import { UserRole } from '@/core/domain/user/User';
import { LoginDTO } from './schemas/loginSchema';

export interface UserResponse {
	id: number;
	name: string;
	email: string;
	role: UserRole;
	createdAt: string;
	updatedAt: string;
	deletedAt: string | null;
}

export const createUser = async (
	body: CreateUserDTO
): Promise<UserResponse> => {
	const response = await api.post('/users', body);
	return response.data;
};

export const updateUser = async (
	id: number,
	body: Partial<CreateUserDTO>
): Promise<UserResponse> => {
	const response = await api.put(`/users/${id}`, body);
	return response.data;
};

export const deleteUser = async (id: number) => {
	const response = await api.delete(`/users/${id}`);
	return response.data;
};

export const getUserById = async (id: number): Promise<UserResponse> => {
	const response = await api.get(`/users/${id}`);
	return response.data;
};

export const getAllUsers = async (): Promise<UserResponse[]> => {
	const response = await api.get('/users');
	return response.data;
};

// TODO: Implement proper authentication flow
export const loginUser = async (body: LoginDTO) => {
	const response = await api.post('/users/login', body);
	return response.data;
};
