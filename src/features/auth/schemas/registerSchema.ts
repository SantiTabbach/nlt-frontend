import { z } from 'zod';

import { UserRole } from '@/domain/User';

export const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.nativeEnum(UserRole),
});

export type RegisterDTO = z.infer<typeof registerSchema>;
