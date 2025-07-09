import { Pack } from '@/core/domain/pack/Pack';
import { getAllPacks } from './packRepository';
import { packAdapter, PackViewModel } from './packViewModel';

export const fetchPacks = async (): Promise<PackViewModel[]> => {
	const raw = await getAllPacks();

	const domain = raw.map(
		(p) =>
			new Pack(
				p.id,
				p.title,
				p.description,
				p.imageUrl,
				p.price,
				new Date(p.pickupStart),
				new Date(p.pickupEnd),
				p.quantityAvailable,
				p.quantityReserved,
				p.shop,
				p.reservations,
				new Date(p.createdAt),
				new Date(p.updatedAt),
				p.deletedAt ? new Date(p.deletedAt) : null
			)
	);
	return domain.map(packAdapter);
};
