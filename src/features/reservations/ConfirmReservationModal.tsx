import React, { useState } from 'react';
import { PackViewModel } from '../packs/packViewModel';

interface Props {
	pack: PackViewModel;
	onSuccess: () => void;
	onCancel: () => void;
}

const ConfirmReservationModal = ({ pack, onSuccess, onCancel }: Props) => {
	const [loading, setLoading] = useState(false);

	const handleReserve = async () => {
		setLoading(true);
		try {
			console.log('Reservando pack:', pack);
			onSuccess();
		} catch (error) {
			console.error('Error creating reservation:', error);
			alert('Error al crear la reserva. Inténtalo de nuevo.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
			<div className="bg-white rounded-lg max-w-md w-full p-6">
				<h3 className="text-lg font-semibold text-gray-900 mb-4">
					Confirmar reserva
				</h3>

				<div className="space-y-3 mb-6">
					<div className="flex justify-between">
						<span className="text-gray-600">Pack:</span>
						<span className="font-medium">{pack.title}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-600">Tienda:</span>
						<span className="font-medium">{pack.shop.name}</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-600">Precio:</span>
						<span className="font-medium text-green-600">
							€{pack.price.toFixed(2)}
						</span>
					</div>
					<div className="flex justify-between">
						<span className="text-gray-600">Recogida:</span>
						<span className="font-medium">{pack.pickupTimeRange}</span>
					</div>
				</div>

				<div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
					<p className="text-yellow-800 text-sm">
						<strong>Importante:</strong> Debes recoger tu pack en el horario
						indicado. Si no puedes, cancela la reserva para que otros puedan
						aprovecharlo.
					</p>
				</div>

				<div className="flex space-x-3">
					<button
						onClick={onCancel}
						className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
					>
						Cancelar
					</button>
					<button
						onClick={handleReserve}
						disabled={loading}
						className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{loading ? 'Reservando...' : 'Confirmar'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default ConfirmReservationModal;
