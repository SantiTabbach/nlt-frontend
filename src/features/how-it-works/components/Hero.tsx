import { ArrowDown, Recycle, Heart, Utensils } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/presentation/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="max-w-4xl">Así es como rescatamos comida juntos</h1>
            <p className="max-w-2xl mx-auto text-lg text-secondary">
              Un proceso simple que conecta comercios con excedentes de comida
              con personas conscientes del medio ambiente. Todos ganamos: tú
              ahorras, los comercios reducen pérdidas y el planeta respira
              mejor.
            </p>
          </div>

          {/* Visual Icons */}
          <div className="flex items-center justify-center space-x-8 md:space-x-16 py-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Utensils className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-sm font-medium">Comercios</p>
            </div>

            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-green-300"></div>
              <Heart className="h-6 w-6 text-green-600 mx-2" />
              <div className="w-8 h-0.5 bg-green-300"></div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Recycle className="h-8 w-8 text-green-600" />
              </div>
              <p className="text-sm font-medium">Usuarios</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              <Link href="/register">Empezar ahora</Link>
            </Button>
            <Button variant="outline" size="lg">
              <ArrowDown className="h-4 w-4 mr-2" />
              Ver cómo funciona
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
