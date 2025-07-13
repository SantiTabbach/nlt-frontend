import CtaSection from '@/features/landing/CtaSection';
import Features from '@/features/landing/Features';
import Footer from '@/features/landing/Footer';
import Header from '@/features/landing/Header';
import Hero from '@/features/landing/Hero';

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
