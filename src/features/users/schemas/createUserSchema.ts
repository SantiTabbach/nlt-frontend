import { z } from 'zod';
import { UserRole } from '@/core/domain/user/User';

export const createUserSchema = z.object({
	name: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(6),
	role: z.nativeEnum(UserRole).default(UserRole.CONSUMER),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>;
