import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { UserRole } from '@/domain/User';
import { USER_TYPE_ICONS } from '@/features/users/utils/constants';

interface Props {
  setUserType: (type: UserRole) => void;
}

const User = USER_TYPE_ICONS[UserRole.CONSUMER];
const Store = USER_TYPE_ICONS[UserRole.SHOP];

const RoleSelector = ({ setUserType }: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            Unite a No la tires
          </h1>
          <p className="text-gray-600">Elegí cómo querés participar</p>
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setUserType(UserRole.CONSUMER)}
            variant="outline"
            className="bg-white"
            fullWidth
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <User className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Soy cliente
                </h3>
                <p className="text-gray-600">
                  Quiero comprar comida a precios reducidos
                </p>
              </div>
            </div>
          </Button>

          <Button
            onClick={() => setUserType(UserRole.SHOP)}
            variant="outline"
            className="bg-white"
            fullWidth
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Store className="h-8 w-8 text-green-600 group-hover:text-green-700" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Tengo un Comercio
                </h3>
                <p className="text-gray-600">
                  Quiero vender mis excedentes de comida
                </p>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
