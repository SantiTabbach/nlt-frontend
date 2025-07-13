import {
  Search,
  ShoppingCart,
  Clock,
  CheckCircle,
  Store,
  Package,
  Bell,
  TrendingUp,
} from 'lucide-react';

const customerSteps = [
  {
    icon: Search,
    title: 'Descubre packs cerca de ti',
    description:
      'Explora comercios locales con excedentes de comida disponibles en tu zona.',
    color: 'blue',
  },
  {
    icon: ShoppingCart,
    title: 'Reserva tu pack',
    description:
      'Elige el pack que más te guste y resérvalo con un solo clic. Pago seguro incluido.',
    color: 'green',
  },
  {
    icon: Clock,
    title: 'Recoge en el horario indicado',
    description:
      'Ve al comercio en el horario especificado y recoge tu pack de comida rescatada.',
    color: 'purple',
  },
  {
    icon: CheckCircle,
    title: '¡Disfruta y ayuda al planeta!',
    description:
      'Disfruta de comida deliciosa mientras reduces el desperdicio alimentario.',
    color: 'emerald',
  },
];

const businessSteps = [
  {
    icon: Store,
    title: 'Registra tu comercio',
    description:
      'Crea tu perfil de negocio y añade la información de tu establecimiento.',
    color: 'blue',
  },
  {
    icon: Package,
    title: 'Crea packs de rescate',
    description:
      'Publica tus excedentes como packs atractivos con precios reducidos.',
    color: 'green',
  },
  {
    icon: Bell,
    title: 'Recibe reservas',
    description:
      'Los usuarios reservan tus packs y recibes notificaciones instantáneas.',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'Reduce pérdidas y genera ingresos',
    description:
      'Convierte lo que antes era desperdicio en ingresos adicionales.',
    color: 'emerald',
  },
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  emerald: 'bg-emerald-100 text-emerald-600',
};

interface StepCardProps {
  step: (typeof customerSteps)[0];
  index: number;
}

function StepCard({ step, index }: StepCardProps) {
  const Icon = step.icon;

  return (
    <div className="relative">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-white border-2 border-green-600 rounded-full flex items-center justify-center z-10">
        <p className="text-green-600 font-semibold">{index + 1}</p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[step.color as keyof typeof colorClasses]}`}
        >
          <Icon className="h-6 w-6" />
        </div>

        <h4 className="mb-3">{step.title}</h4>

        <p className="text-green-600">{step.description}</p>
      </div>

      {/* Connector Line */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-green-200 transform -translate-y-1/2"></div>
      )}
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        {/* For Customers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="mb-4">Para usuarios que quieren rescatar comida</h2>
            <p
              color="secondary"
              className="text-lg text-primary max-w-2xl mx-auto"
            >
              Un proceso simple de 4 pasos para empezar a rescatar comida hoy
              mismo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {customerSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        {/* For Businesses */}
        <div>
          <div className="text-center mb-12">
            <h2 className="mb-4">
              Para comercios que quieren reducir desperdicio
            </h2>
            <p className="max-w-2xl mx-auto text-lg">
              Convierte tus excedentes en ingresos adicionales mientras ayudas
              al medio ambiente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {businessSteps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
