import { Clock, MapPin, Star, Users } from 'lucide-react';

import { PackViewModel } from '../viewModels/packViewModel';

interface Props {
  pack: PackViewModel;
  onReserve?: () => void;
}

const PackItem = ({ pack, onReserve }: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
      <img
        src={pack.imageUrl || '/placeholder.svg?height=200&width=300'}
        alt={pack.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-900">{pack.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">4.8</span>
          </div>
        </div>

        <p className="text-sm font-medium text-green-600 mb-2">
          {pack.shop.name}
        </p>
        <p className="text-sm text-gray-700 mb-3">{pack.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {pack.pickupTimeRange}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {pack.shop.address}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Users className="h-4 w-4 mr-2" />
            {pack.quantityAvailable} disponibles
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-green-600">
              {pack.displayPrice}
            </span>
            <span className="text-sm text-gray-500 line-through">
              €{(pack.price * 2.5).toFixed(2)}
            </span>
          </div>
          <button
            onClick={onReserve}
            disabled={pack.quantityAvailable === 0}
            className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {pack.quantityAvailable === 0 ? 'Agotado' : 'Reservar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackItem;
