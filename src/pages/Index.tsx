import { lazy, Suspense } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

// Lazy load below-the-fold components
const Categories = lazy(() => import("@/components/Categories").then(module => ({ default: module.Categories })));
const FeaturedProducts = lazy(() => import("@/components/FeaturedProducts").then(module => ({ default: module.FeaturedProducts })));
const ModelDetails = lazy(() => import("@/components/ModelDetails").then(module => ({ default: module.ModelDetails })));
const AboutSection = lazy(() => import("@/components/AboutSection").then(module => ({ default: module.AboutSection })));
const Newsletter = lazy(() => import("@/components/Newsletter").then(module => ({ default: module.Newsletter })));
const Footer = lazy(() => import("@/components/Footer").then(module => ({ default: module.Footer })));

const LoadingFallback = () => null; // Minimal fallback since components use viewport-based animations

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={LoadingFallback()}>
          <Categories />
        </Suspense>
        <Suspense fallback={LoadingFallback()}>
          <FeaturedProducts />
        </Suspense>
        <Suspense fallback={LoadingFallback()}>
          <ModelDetails />
        </Suspense>
        <Suspense fallback={LoadingFallback()}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={LoadingFallback()}>
          <Newsletter />
        </Suspense>
      </main>
      <Suspense fallback={LoadingFallback()}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
