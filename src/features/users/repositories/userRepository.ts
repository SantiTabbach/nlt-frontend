import { UserResponse } from '@/domain/User';
import { api } from '@/lib/axios';

export const updateUser = async (
  id: number,
  body: Partial<unknown>, // Adjust the type as needed, e.g., UpdateUserDTO
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
