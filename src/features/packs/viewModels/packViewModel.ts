import { Pack } from '@/domain/Pack';
import {
  shopAdapter,
  ShopViewModel,
} from '@/features/shops/viewModels/shopViewModel';

export interface PackViewModel {
  id: number;
  title: string;
  description: string;
  imageUrl: string | null;
  price: number;
  pickupStart: Date;
  pickupEnd: Date;
  quantityAvailable: number;
  quantityReserved: number;
  shop: ShopViewModel;

  displayPrice: string;
  pickupTimeRange: string;
  pickupDate: string;
  isReserved: boolean;
  available: boolean;
  createdAt: string;
}

export const packAdapter = (pack: Pack): PackViewModel => {
  return {
    id: pack.id,
    title: pack.title,
    description: pack.description,
    imageUrl: pack.imageUrl,
    price: pack.price,
    pickupStart: pack.pickupStart,
    pickupEnd: pack.pickupEnd,
    quantityAvailable: pack.quantityAvailable,
    quantityReserved: pack.quantityReserved,
    shop: shopAdapter(pack.shop),

    displayPrice: pack.getDisplayPrice(),
    pickupTimeRange: pack.getPickupTimeRange(),
    pickupDate: pack.getPickupDate(),
    isReserved: pack.isReserved(),
    available: pack.isAvailable(),
    createdAt: pack.getCreationDate(),
  };
};
