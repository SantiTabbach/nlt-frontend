'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/presentation/components/ui/Button';

const faqs = [
  {
    question: '¿Cómo funciona el proceso de reserva?',
    answer:
      'Es muy simple: exploras los packs disponibles cerca de ti, seleccionas el que más te guste, realizas el pago de forma segura y vas a recogerlo en el horario indicado. Todo el proceso toma menos de 2 minutos.',
  },
  {
    question: '¿Qué tipo de comida puedo encontrar?',
    answer:
      'Encontrarás una gran variedad: productos de panadería, comida preparada de restaurantes, frutas y verduras frescas, productos de supermercado cerca de su fecha de vencimiento, y mucho más. Todo en perfecto estado para consumir.',
  },
  {
    question: '¿Es seguro el pago?',
    answer:
      'Absolutamente. Utilizamos sistemas de pago seguros y encriptados. Puedes pagar con tarjeta de crédito, débito o métodos digitales. Tu información financiera está completamente protegida.',
  },
  {
    question: '¿Qué pasa si no puedo recoger mi pack?',
    answer:
      'Puedes cancelar tu reserva hasta 2 horas antes del horario de recogida sin penalización. Si cancelas con menos tiempo o no recoges el pack, se aplicará una pequeña penalización para evitar el desperdicio.',
  },
  {
    question: '¿Cómo sé que la comida está en buen estado?',
    answer:
      'Todos nuestros comercios asociados siguen estrictos protocolos de calidad. La comida está perfectamente apta para el consumo, solo que no se vendió en el día por exceso de stock o proximidad a la fecha de vencimiento.',
  },
  {
    question: '¿Puedo elegir qué viene en mi pack?',
    answer:
      'Los packs son sorpresa, pero siempre incluyen una descripción general del contenido. Esto es parte de la magia de rescatar comida: descubres nuevos productos y sabores mientras ayudas al planeta.',
  },
  {
    question: '¿Cómo puedo registrar mi comercio?',
    answer:
      'El proceso es muy fácil: regístrate como comercio, completa la información de tu establecimiento, crea tus primeros packs y empieza a recibir reservas. Nuestro equipo te ayudará en todo el proceso.',
  },
  {
    question: '¿Qué comisión cobran?',
    answer:
      'Cobramos una pequeña comisión solo cuando vendes un pack. No hay costos fijos ni mensualidades. Solo pagas cuando generas ingresos, haciendo que sea una solución sin riesgo para tu negocio.',
  },
];

interface FAQItemProps {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h5 className="pr-4">{faq.question}</h5>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
        )}
      </button>

      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-secondary">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Preguntas frecuentes</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre cómo funciona nuestra
            plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openItems.includes(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-secondary mb-4">
            ¿No encuentras la respuesta que buscas?
          </p>
          <Button className="text-green-600 hover:text-green-700 font-medium">
            Contáctanos directamente
          </Button>
        </div>
      </div>
    </section>
  );
}
