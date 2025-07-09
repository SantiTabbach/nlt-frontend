import { Pack } from '../pack/Pack';
import { User } from '../user/User';

export class Shop {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly address: string,
		public readonly lat: number,
		public readonly lng: number,
		public readonly user: User,
		public readonly packs: Pack[],
		public readonly description?: string,
		public readonly phone?: string
	) {}

	/**
	 * Returns the display name of the shop.
	 * The name is formatted to be more user-friendly.
	 */
	getDisplayName(): string {
		return this.name.charAt(0).toUpperCase() + this.name.slice(1);
	}

	/**
	 * Returns the formatted address of the shop.
	 * The address is formatted to be more user-friendly.
	 */
	getFormattedAddress(): string {
		return this.address.charAt(0).toUpperCase() + this.address.slice(1);
	}

	/**
	 * Returns the formatted phone number of the shop.
	 * The phone number is formatted to be more user-friendly.
	 */
	getFormattedPhone(): string {
		if (!this.phone) {
			return 'No disponible';
		}
		return this.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
	}

	/**
	 * Returns the total number of packs available in the shop.
	 * This is the sum of all packs' available quantities.
	 */
	getTotalPacksAvailable(): number {
		return this.packs.reduce(
			(total, pack) => total + pack.getAvailableQuantity(),
			0
		);
	}
}
