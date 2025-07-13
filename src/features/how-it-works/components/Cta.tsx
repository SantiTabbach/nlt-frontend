import { ArrowRight, Users, Store } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/presentation/components/ui/Button';

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">¿Listo para empezar?</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Únete a nuestra comunidad y comienza a hacer la diferencia hoy mismo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* For Users */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 text-center border border-green-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-green-600" />
            </div>

            <h3 className="mb-4">Soy usuario</h3>

            <p className="text-secondary mb-6">
              Quiero rescatar comida, ahorrar dinero y ayudar al medio ambiente
            </p>

            <div className="space-y-3">
              <Button fullWidth size="lg">
                <Link
                  href="/register"
                  className="flex items-center justify-center"
                >
                  Empezar a rescatar
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="text-sm text-muted">
                Gratis • Sin compromiso • Impacto inmediato
              </p>
            </div>
          </div>

          {/* For Businesses */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 text-center border border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Store className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="mb-4">Tengo un comercio</h3>

            <p className="text-secondary mb-6">
              Quiero reducir el desperdicio y generar ingresos adicionales
            </p>

            <div className="space-y-3">
              <Button variant="outline" fullWidth size="lg">
                <Link
                  href="/register"
                  className="flex items-center justify-center"
                >
                  Registrar comercio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <p className="text-sm text-muted">
                Sin costos fijos • Comisión solo por venta • Soporte incluido
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-muted mb-4">¿Necesitas más información?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Contactar con el equipo
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href="/demo"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Ver demo en vivo
            </Link>
            <span className="hidden sm:inline text-gray-300">•</span>
            <Link
              href="/casos-exito"
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Casos de éxito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
