import { UserRole } from '@/domain/User';
import { USER_TYPE_LABELS } from '@/presentation/utils/users';

export const ROLE_OPTIONS = [
  {
    value: UserRole.CONSUMER,
    label: USER_TYPE_LABELS[UserRole.CONSUMER],
  },
  {
    value: UserRole.SHOP,
    label: USER_TYPE_LABELS[UserRole.SHOP],
  },
];
