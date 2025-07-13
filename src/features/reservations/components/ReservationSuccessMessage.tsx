import { Check } from 'lucide-react';
import React from 'react';

import { Pack } from '@/domain/Pack';

interface Props {
  pack: Pack;
}

const ReservationSuccessMessage = ({ pack }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <div className="p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          ¡Reserva confirmada!
        </h3>
        <p className="text-gray-600 mb-4">
          Tu pack ha sido reservado exitosamente. Recibirás un email con los
          detalles.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-green-800 mb-2">
            Detalles de recogida:
          </h4>
          <p className="text-green-700 text-sm">
            <strong>Fecha:</strong> {pack.getPickupDate()}
          </p>
          <p className="text-green-700 text-sm">
            <strong>Horario:</strong> {pack.getPickupTimeRange()}
          </p>
          <p className="text-green-700 text-sm">
            <strong>Lugar:</strong> {pack.shop.name} - {pack.shop.address}
          </p>
        </div>
        <button className="text-green-600 hover:text-green-700 font-medium">
          Ver más packs
        </button>
      </div>
    </div>
  );
};

export default ReservationSuccessMessage;
