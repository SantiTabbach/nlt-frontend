import {
  DollarSign,
  Leaf,
  Users,
  TrendingUp,
  Heart,
  Clock,
  MapPin,
  Star,
} from 'lucide-react';

const customerBenefits = [
  {
    icon: DollarSign,
    title: 'Ahorra hasta 70%',
    description: 'Comida de calidad a precios increíbles',
    color: 'green',
  },
  {
    icon: Leaf,
    title: 'Impacto ambiental positivo',
    description: 'Cada pack rescatado evita CO₂ en la atmósfera',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Apoya comercios locales',
    description: 'Ayuda a pequeños negocios de tu comunidad',
    color: 'blue',
  },
  {
    icon: Star,
    title: 'Descubre nuevos sabores',
    description: 'Prueba comida de diferentes comercios',
    color: 'purple',
  },
];

const businessBenefits = [
  {
    icon: TrendingUp,
    title: 'Ingresos adicionales',
    description: 'Monetiza lo que antes era pérdida',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Responsabilidad social',
    description: 'Mejora la imagen de tu negocio',
    color: 'red',
  },
  {
    icon: Clock,
    title: 'Proceso automatizado',
    description: 'Gestión simple y eficiente',
    color: 'blue',
  },
  {
    icon: MapPin,
    title: 'Alcance local',
    description: 'Conecta con clientes de tu zona',
    color: 'purple',
  },
];

const colorClasses = {
  green: 'bg-green-100 text-green-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  red: 'bg-red-100 text-red-600',
};

interface BenefitCardProps {
  benefit: (typeof customerBenefits)[0];
}

function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <div className="text-center">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}
      >
        <Icon className="h-8 w-8" />
      </div>

      <h5 className="mb-2">{benefit.title}</h5>

      <p className="text-secondary">{benefit.description}</p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Beneficios para todos</h2>
          <p className="text-secondary text-lg max-w-2xl mx-auto">
            Una solución win-win que beneficia a usuarios, comercios y el medio
            ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Customer Benefits */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-accent mb-2">Para usuarios</h3>
              <p className="text-secondary">
                Ventajas de rescatar comida con nosotros
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {customerBenefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* Business Benefits */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-accent mb-2">Para comercios</h3>
              <p className="text-secondary">
                Ventajas de unirte a nuestra plataforma
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {businessBenefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
