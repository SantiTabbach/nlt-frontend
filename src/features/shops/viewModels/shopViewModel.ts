import { Shop } from '@/domain/Shop';
import {
  packAdapter,
  PackViewModel,
} from '@/features/packs/viewModels/packViewModel';
import {
  userAdapter,
  UserViewModel,
} from '@/features/users/viewModels/userViewModel';

export interface ShopViewModel {
  id: number;
  name: string;
  address: string;
  position: [number, number];
  user: UserViewModel;
  packs: PackViewModel[];
  description: string;
  phone: string;
  totalPacksAvailable?: number;
}

export const shopAdapter = (shop: Shop): ShopViewModel => {
  return {
    id: shop.id,
    name: shop.getDisplayName(),
    address: shop.getFormattedAddress(),
    position: [shop.lat, shop.lng],
    user: userAdapter(shop.user),
    packs: shop.packs.map(packAdapter),
    description: shop.getFormattedDescription(),
    phone: shop.getFormattedPhone(),
    totalPacksAvailable: shop.getTotalPacksAvailable(),
  };
};
