import { CreateUserDTO } from '../schemas/createUserSchema';
import { LoginDTO } from '../schemas/loginSchema';

import { UserRole } from '@/domain/User';
import { api } from '@/lib/axios';

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
  body: CreateUserDTO,
): Promise<UserResponse> => {
  const response = await api.post<UserResponse>('/users', body);
  return response.data;
};

export const updateUser = async (
  id: number,
  body: Partial<CreateUserDTO>,
): Promise<UserResponse> => {
  const response = await api.put<UserResponse>(`/users/${id}`, body);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await api.delete<void>(`/users/${id}`);
};

export const getUserById = async (id: number): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`/users/${id}`);
  return response.data;
};

export const getAllUsers = async (): Promise<UserResponse[]> => {
  const response = await api.get<UserResponse[]>('/users');
  return response.data;
};

// TODO: Implement proper authentication flow and define the return type
export const loginUser = async (body: LoginDTO) => {
  const response = await api.post<unknown>('/users/login', body);
  return response.data;
};
