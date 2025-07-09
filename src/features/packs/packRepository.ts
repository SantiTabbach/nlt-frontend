import { Reservation } from '@/core/domain/reservation/Reservation';
import { Shop } from '@/core/domain/shop/Shop';
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
	const response = await api.get('/packs');
	return response.data;
};
