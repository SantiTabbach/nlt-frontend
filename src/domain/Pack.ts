import { Reservation } from './Reservation';
import { Shop } from './Shop';

export class Pack {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly description: string,
    public readonly imageUrl: string | null,
    public readonly price: number,
    public readonly pickupStart: Date,
    public readonly pickupEnd: Date,
    public readonly quantityAvailable: number,
    public readonly quantityReserved: number,
    public readonly shop: Shop,
    public readonly reservations: Reservation[],
    public readonly createdAt?: Date,
    public readonly updatedAt?: Date,
    public readonly deletedAt: Date | null = null,
  ) {}

  /**
   * Checks if the pack is available for reservation.
   * A pack is available if there is at least one unit available.
   */
  isAvailable(): boolean {
    return this.quantityAvailable > 0;
  }

  /**
   * Checks if the pack is reserved.
   * A pack is reserved if there are any reservations made for it.
   */
  isReserved(): boolean {
    return this.reservations.length > 0;
  }

  /**
   * Returns the display price of the pack formatted as a string.
   * The price is formatted to two decimal places and prefixed with a dollar sign.
   */
  getDisplayPrice(): string {
    return `$${this.price.toFixed(2)}`;
  }

  /**
   * Returns the formatted pickup time range for the pack.
   * The pickup start and end times are formatted to a readable string.
   */
  getPickupTimeRange(): string {
    const start = this.pickupStart.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    const end = this.pickupEnd.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `${start} - ${end}`;
  }

  /**
   * Returns the formatted pickup date for the pack.
   * The pickup date is formatted to a readable string.
   */
  getPickupDate(): string {
    return this.pickupStart.toLocaleDateString([], {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });
  }

  /**
   * Returns the creation date of the user in ISO format.
   * If the user was not created, it returns an empty string.
   */
  getCreationDate(): string {
    return this.createdAt ? this.createdAt.toISOString() : '';
  }
}
