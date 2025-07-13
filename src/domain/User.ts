export enum UserRole {
  CONSUMER = 'CONSUMER',
  SHOP = 'SHOP',
  ADMIN = 'ADMIN',
}

export class User {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string,
    public readonly role: UserRole,
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt: Date | null = null,
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

  /**
   * Returns the creation date of the user in ISO format.
   * If the user was not created, it returns an empty string.
   */
  getCreationDate(): string {
    return this.createdAt ? this.createdAt.toISOString() : '';
  }

  /**
   * Checks if the user is active.
   * An active user is one that has not been deleted.
   */
  isActive(): boolean {
    return this.deletedAt === null;
  }
}
