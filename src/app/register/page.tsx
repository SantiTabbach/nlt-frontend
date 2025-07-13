'use client';

import { ArrowLeft } from 'lucide-react';
import type React from 'react';
import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { UserRole } from '@/domain/User';
import CreateUserForm from '@/features/users/components/register/CreateUserForm';
import RoleSelector from '@/features/users/components/RoleSelector';
import { USER_TYPE_LABELS } from '@/features/users/utils/constants';

export default function RegisterPage() {
  const [userType, setUserType] = useState<UserRole | null>(null);

  if (!userType) {
    return <RoleSelector setUserType={setUserType} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Button onClick={() => setUserType(null)} variant="ghost">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cambiar tipo de cuenta
          </Button>
          <div className="text-3xl font-bold text-green-800 mb-2">
            {`Registro de ${USER_TYPE_LABELS[userType]}`}
          </div>
          <p className="text-gray-600">
            {userType === UserRole.CONSUMER
              ? 'Creá tu cuenta para empezar a rescatar comida'
              : 'Registrá tu comercio y reducí el desperdicio'}
          </p>
        </div>
        <CreateUserForm userRole={userType} />
      </div>
    </div>
  );
}
