import { LoginDTO } from '../schemas/loginSchema';
import { RegisterDTO } from '../schemas/registerSchema';

import { UserResponse } from '@/domain/User';
import { api } from '@/lib/axios';

export const login = async (body: LoginDTO) => {
  const response = await api.post<unknown>('/auth/login', body);
  return response.data;
};

export const register = async (body: RegisterDTO): Promise<UserResponse> => {
  const response = await api.post<UserResponse>('/users', body);
  return response.data;
};
