import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ModelDetails } from "@/components/ModelDetails";
import { AboutSection } from "@/components/AboutSection";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <ModelDetails />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
