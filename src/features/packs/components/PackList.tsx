import React, { useState } from 'react';
import PackItem from './PackItem';
import ConfirmReservationModal from '../../reservations/ConfirmReservationModal';
import { PackViewModel } from '../packViewModel';

interface Props {
	packs: PackViewModel[];
}

const PackList = ({ packs }: Props) => {
	const [showConfirmation, setShowConfirmation] = useState(false);

	return (
		<div>
			<h2 className="text-2xl font-bold text-gray-900 mb-6">
				Packs disponibles
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{packs.map((pack) => (
					<React.Fragment key={pack.id}>
						<PackItem pack={pack} />
						{showConfirmation && (
							<ConfirmReservationModal
								pack={pack}
								onCancel={() => setShowConfirmation(false)}
								onSuccess={() => {
									setShowConfirmation(false);
								}}
							/>
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default PackList;
