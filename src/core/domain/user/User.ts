export enum UserRole {
	CONSUMER = 'CONSUMER',
	SHOP = 'SHOP',
	ADMIN = 'ADMIN',
}

export class User {
	constructor(
		public readonly id: string,
		public readonly name: string,
		public readonly email: number,
		public readonly role: UserRole
	) {}

	/**
	 * Returns the display name of the user.
	 * The name is formatted to be more user-friendly.
	 */
	getDisplayName(): string {
		return this.name.charAt(0).toUpperCase() + this.name.slice(1);
	}

	/**
	 * Returns the formatted role of the user.
	 * The role is formatted to be more user-friendly.
	 */
	getFormattedRole(): string {
		switch (this.role) {
			case UserRole.CONSUMER:
				return 'Consumidor';
			case UserRole.SHOP:
				return 'Tienda';
			case UserRole.ADMIN:
				return 'Administrador';
			default:
				return 'Desconocido';
		}
	}
}
