import { Leaf, Users, ShoppingBag, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: ShoppingBag,
    number: '10,000+',
    label: 'Packs rescatados',
    description: 'Comidas salvadas del desperdicio',
    color: 'green',
  },
  {
    icon: Leaf,
    number: '25,000 kg',
    label: 'CO₂ evitado',
    description: 'Equivalente a plantar 1,200 árboles',
    color: 'emerald',
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'Usuarios activos',
    description: 'Comunidad comprometida creciendo',
    color: 'blue',
  },
  {
    icon: TrendingUp,
    number: '€150,000',
    label: 'Ahorrado por usuarios',
    description: 'Dinero que se queda en tu bolsillo',
    color: 'purple',
  },
];

export default function ImpactSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-br from-green-600 to-emerald-700">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nuestro impacto hasta ahora</h2>
          <p className="text-lg max-w-2xl mx-auto text-green-100">
            Juntos estamos creando un impacto real en la lucha contra el
            desperdicio alimentario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div key={index} className="text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-white/20`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>

                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>

                  <h5 className="mb-2">{stat.label}</h5>

                  <p className="text-green-100 text-sm">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="mb-4">¿Quieres ser parte del cambio?</h3>
            <p className="text-green-100 mb-6">
              Cada pack que rescatas marca la diferencia. Únete a nuestra misión
              de crear un mundo más sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Rescatar comida
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Registrar comercio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
