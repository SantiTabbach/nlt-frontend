"use client"

import { useState } from "react"
import Link from "next/link"
import { Bell, Search, User, MapPin, Clock, Star, ShoppingBag, Heart } from "lucide-react"

// Mock data - esto vendrá de tu API
const mockPacks = [
  {
    id: 1,
    shopName: "Panadería San José",
    shopType: "Panadería",
    description: "Variedad de panes y bollería del día",
    originalPrice: 15.0,
    discountPrice: 5.0,
    pickupTime: "18:00 - 20:00",
    distance: "0.5 km",
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    shopName: "Restaurante El Jardín",
    shopType: "Restaurante",
    description: "Menú del día con platos caseros",
    originalPrice: 25.0,
    discountPrice: 8.0,
    pickupTime: "21:00 - 22:30",
    distance: "1.2 km",
    rating: 4.6,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    shopName: "Frutería Central",
    shopType: "Frutería",
    description: "Frutas y verduras frescas de temporada",
    originalPrice: 12.0,
    discountPrice: 4.0,
    pickupTime: "19:00 - 20:00",
    distance: "0.8 km",
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "Todos" },
    { id: "bakery", name: "Panadería" },
    { id: "restaurant", name: "Restaurante" },
    { id: "supermarket", name: "Supermercado" },
    { id: "cafe", name: "Cafetería" },
  ]

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
                <span className="ml-2 text-xl font-bold text-green-800">No la tires</span>
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">Mi cuenta</span>
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
            Descubre comida deliciosa cerca de ti y ayuda a reducir el desperdicio alimentario.
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
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Packs rescatados</p>
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

        {/* Available Packs */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Packs disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPacks.map((pack) => (
              <div
                key={pack.id}
                className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow"
              >
                <img src={pack.image || "/placeholder.svg"} alt={pack.shopName} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{pack.shopName}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{pack.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{pack.shopType}</p>
                  <p className="text-sm text-gray-700 mb-3">{pack.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      {pack.pickupTime}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {pack.distance}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">€{pack.discountPrice.toFixed(2)}</span>
                      <span className="text-sm text-gray-500 line-through">€{pack.originalPrice.toFixed(2)}</span>
                    </div>
                    <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                      Reservar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
