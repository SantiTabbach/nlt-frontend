import { Reservation } from '@/domain/Reservation';
import { Shop } from '@/domain/Shop';
import { api } from '@/lib/axios';

export interface PackResponse {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  pickupStart: string;
  pickupEnd: string;
  quantityAvailable: number;
  quantityReserved: number;
  shop: Shop;
  reservations: Reservation[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export const getAllPacks = async (): Promise<PackResponse[]> => {
  const response = await api.get<PackResponse[]>('/packs');
  return response.data;
};
