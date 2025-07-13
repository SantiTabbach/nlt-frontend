import { Leaf } from 'lucide-react';
import Link from 'next/link';

import BenefitsSection from '@/features/how-it-works/components/Benefits';
import CTASection from '@/features/how-it-works/components/Cta';
import FAQSection from '@/features/how-it-works/components/Faq';
import HeroSection from '@/features/how-it-works/components/Hero';
import ImpactSection from '@/features/how-it-works/components/Impact';
import ProcessSection from '@/features/how-it-works/components/Process';
import { Button } from '@/presentation/components/ui/Button';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-800">
            No la tires
          </span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-green-600 transition-colors"
            href="/login"
          >
            Iniciar Sesión
          </Link>
          <Button size="sm">
            <Link href="/register">Registrarse</Link>
          </Button>
        </nav>
      </header>

      {/* Page Content */}
      <main>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
        <ImpactSection />
        <FAQSection />
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-muted text-xs" color="muted">
          © 2024 No la tires. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="/terminos"
          >
            Términos de Servicio
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-500"
            href="/privacidad"
          >
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  );
}
