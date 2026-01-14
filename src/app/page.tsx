import dynamic from 'next/dynamic';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Footer from '@/components/landing/footer';

const RecipeShowcase = dynamic(() => import('@/components/landing/recipe-showcase'));
const Pricing = dynamic(() => import('@/components/landing/pricing'));
const Bonuses = dynamic(() => import('@/components/landing/bonuses'));
const Faq = dynamic(() => import('@/components/landing/faq'));
const StickyCta = dynamic(() => import('@/components/landing/sticky-cta'));
const Testimonials = dynamic(() => import('@/components/landing/testimonials'));
const MainProduct = dynamic(() => import('@/components/landing/main-product'));
const RecipePreview = dynamic(() => import('@/components/landing/recipe-preview'));
const VideoCta = dynamic(() => import('@/components/landing/video-cta'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <RecipeShowcase />
        <MainProduct />
        <RecipePreview />
        <Bonuses />
        <Testimonials />
        <Pricing />
        <Faq />
        <VideoCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
