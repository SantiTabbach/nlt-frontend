import { LucideIcon, ShieldCheck, Store, User } from 'lucide-react';

import { UserRole } from '@/domain/User';

export const USER_TYPE_LABELS: Record<UserRole, string> = {
  [UserRole.CONSUMER]: 'Cliente',
  [UserRole.SHOP]: 'Comercio',
  [UserRole.ADMIN]: 'Administrador',
};

export const USER_TYPE_ICONS: Record<UserRole, LucideIcon> = {
  [UserRole.CONSUMER]: User,
  [UserRole.SHOP]: Store,
  [UserRole.ADMIN]: ShieldCheck,
};
