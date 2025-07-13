import CtaSection from '@/presentation/components/landing/CtaSection';
import Features from '@/presentation/components/landing/Features';
import Footer from '@/presentation/components/landing/Footer';
import Header from '@/presentation/components/landing/Header';
import Hero from '@/presentation/components/landing/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />
      <Hero />
      <Features />
      <CtaSection />
      <Footer />
    </div>
  );
}
