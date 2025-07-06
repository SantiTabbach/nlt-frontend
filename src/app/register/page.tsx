"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Store, User } from "lucide-react"

export default function RegisterPage() {
  const [userType, setUserType] = useState<"customer" | "business" | null>(null)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    phone: "",
    // Business specific fields
    businessName: "",
    businessType: "",
    address: "",
    description: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí conectarás con tu API de NestJS
    console.log("Registering user:", { userType, ...formData })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (!userType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
            <h1 className="text-3xl font-bold text-green-800 mb-2">Únete a No la tires</h1>
            <p className="text-gray-600">Elige cómo quieres participar</p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setUserType("customer")}
              className="w-full p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <User className="h-8 w-8 text-green-600 group-hover:text-green-700" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Soy Cliente</h3>
                  <p className="text-gray-600">Quiero comprar comida a precios reducidos</p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setUserType("business")}
              className="w-full p-6 bg-white rounded-lg border-2 border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Store className="h-8 w-8 text-green-600 group-hover:text-green-700" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">Tengo un Negocio</h3>
                  <p className="text-gray-600">Quiero vender mis excedentes de comida</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <button
            onClick={() => setUserType(null)}
            className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Cambiar tipo de cuenta
          </button>
          <h1 className="text-3xl font-bold text-green-800 mb-2">
            {userType === "customer" ? "Registro de Cliente" : "Registro de Negocio"}
          </h1>
          <p className="text-gray-600">
            {userType === "customer"
              ? "Crea tu cuenta para empezar a rescatar comida"
              : "Registra tu negocio y reduce el desperdicio"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              {userType === "customer" ? "Nombre completo" : "Nombre de contacto"}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          {userType === "business" && (
            <>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre del negocio
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  required
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de negocio
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="restaurant">Restaurante</option>
                  <option value="bakery">Panadería</option>
                  <option value="supermarket">Supermercado</option>
                  <option value="cafe">Cafetería</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Dirección
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </>
          )}

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
          >
            Crear cuenta
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-green-600 hover:text-green-700 font-medium">
                Inicia sesión
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
