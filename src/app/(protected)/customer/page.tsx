'use client';

import { Bell, Search, User, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import Stats from './components/Stats';

import PackList from '@/features/packs/components/PackList';
import { usePacks } from '@/features/packs/hooks/usePacks';

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data = [] } = usePacks();

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'bakery', name: 'Panadería' },
    { id: 'restaurant', name: 'Restaurante' },
    { id: 'supermarket', name: 'Supermercado' },
    { id: 'cafe', name: 'Cafetería' },
  ];

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
                  No la tires
                </span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <User className="h-5 w-5" />
                  <Link
                    href={'/customer/profile'}
                    className="text-sm font-medium"
                  >
                    Mi cuenta
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Hola! 👋</h1>
          <p className="text-gray-600">
            Descubre comida deliciosa cerca de ti y ayuda a reducir el
            desperdicio alimentario.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar por nombre o tipo de comida..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <MapPin className="h-4 w-4 inline mr-2" />
              Cerca de mí
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <Stats />
        <PackList packs={data} />
      </div>
    </div>
  );
}
