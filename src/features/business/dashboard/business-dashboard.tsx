'use client';

import { Plus, Store, Package, Calendar, Users, Euro } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { PackViewModel } from '@/features/packs/viewModels/packViewModel';
import { ShopViewModel } from '@/features/shops/viewModels/shopViewModel';

export default function BusinessDashboard() {
  const shops: ShopViewModel[] = [];
  const packs: PackViewModel[] = [];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        console.log('Loading data for business dashboard...');
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  const totalRevenue = packs.reduce(
    (sum, pack) => sum + pack.price * pack.quantityReserved,
    0,
  );
  const totalReservations = packs.reduce(
    (sum, pack) => sum + pack.quantityReserved,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="h-8 w-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">NLT</span>
                </div>
                <span className="ml-2 text-xl font-bold text-green-800">
                  Panel de Comercio
                </span>
              </Link>
            </div>
            <nav className="flex items-center space-x-4">
              <Link
                href="/business/shops/create"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nueva Tienda
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Panel de Control
          </h1>
          <p className="text-gray-600">
            Gestiona tus tiendas, packs y reservas desde aquí.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Store className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Tiendas</p>
                <p className="text-2xl font-bold text-gray-900">
                  {shops.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Package className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Packs Activos
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {packs.length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Reservas</p>
                <p className="text-2xl font-bold text-gray-900">
                  {totalReservations}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Euro className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Ingresos</p>
                <p className="text-2xl font-bold text-gray-900">
                  €{totalRevenue.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Link
            href="/business/shops/create"
            className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <Store className="h-8 w-8 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Crear Tienda
                </h3>
                <p className="text-gray-600">Registra una nueva tienda</p>
              </div>
            </div>
          </Link>
          <Link
            href="/business/packs/create"
            className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Crear Pack
                </h3>
                <p className="text-gray-600">Añade un nuevo pack de comida</p>
              </div>
            </div>
          </Link>
          <Link
            href="/business/reservations"
            className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ver Reservas
                </h3>
                <p className="text-gray-600">Gestiona las reservas</p>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Shops */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                Mis Tiendas
              </h2>
              <Link
                href="/business/shops"
                className="text-green-600 hover:text-green-700 text-sm font-medium"
              >
                Ver todas
              </Link>
            </div>
          </div>
          <div className="p-6">
            {shops.length === 0 ? (
              <div className="text-center py-8">
                <Store className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No tienes tiendas registradas
                </h3>
                <p className="text-gray-600 mb-4">
                  Crea tu primera tienda para empezar a vender packs
                </p>
                <Link
                  href="/business/shops/create"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Primera Tienda
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {shops.map((shop) => (
                  <div
                    key={shop.id}
                    className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {shop.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{shop.address}</p>
                    <p className="text-gray-500 text-sm mb-3">
                      {shop.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {shop.packs?.length || 0} packs
                      </span>
                      <Link
                        href={`/business/shops/${shop.id}`}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Gestionar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
