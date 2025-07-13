import CtaSection from '@/components/landing/CtaSection';
import Features from '@/components/landing/Features';
import Footer from '@/components/landing/Footer';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';

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
