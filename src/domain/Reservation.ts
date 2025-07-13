import { Pack } from './Pack';
import { User } from './User';

export enum ReservationStatus {
  PENDING = 'PENDING',
  CANCELLED = 'CANCELLED',
  COMPLETED = 'COMPLETED',
}

export class Reservation {
  constructor(
    public readonly id: string,
    public readonly user: User,
    public readonly pack: Pack,
    public readonly status: ReservationStatus,
  ) {}

  /**
   * Returns the display status of the reservation.
   * The status is formatted to be more user-friendly.
   */
  getDisplayStatus(): string {
    switch (this.status) {
      case ReservationStatus.PENDING:
        return 'Pendiente';
      case ReservationStatus.CANCELLED:
        return 'Cancelada';
      case ReservationStatus.COMPLETED:
        return 'Completada';
      default:
        return 'Desconocida';
    }
  }

  /**
   * Returns the formatted creation date of the reservation.
   * The date is formatted to a readable string.
   */
  getFormattedCreationDate(): string {
    return new Date(this.id).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
