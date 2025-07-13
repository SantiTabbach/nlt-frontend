import { Heart, ShoppingBag, Star } from 'lucide-react';
import React from 'react';

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg">
            <ShoppingBag className="h-6 w-6 text-green-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">
              Packs rescatados
            </p>
            <p className="text-2xl font-bold text-gray-900">12</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Heart className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">CO₂ ahorrado</p>
            <p className="text-2xl font-bold text-gray-900">24 kg</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center">
          <div className="p-2 bg-purple-100 rounded-lg">
            <Star className="h-6 w-6 text-purple-600" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">Dinero ahorrado</p>
            <p className="text-2xl font-bold text-gray-900">€156</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
