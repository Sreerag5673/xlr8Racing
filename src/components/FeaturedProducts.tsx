import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hyron1 from "@/assets/hyron-1.jpeg";
import hyron2 from "@/assets/hyron-2.jpeg";
import hyron3 from "@/assets/hyron-3.jpeg";

const products = [
  {
    id: 1,
    name: "XLR8 HYRON",
    year: "2026",
    category: "Bi-Fuel ATV",
    description: "Revolutionary bi-fuel all-terrain vehicle with hydrogen technology. Powered by 395cc engine delivering 9.5 HP and 22.5 Nm torque.",
    price: "Contact for Pricing",
    specs: ["395cc Engine", "9.5 HP Power", "22.5 Nm Torque", "18% Hydrogen", "AIS-028 Certified"],
    image: hyron1,
  },
  {
    id: 2,
    name: "XLR8 HYRON",
    year: "2026",
    category: "Bi-Fuel ATV",
    description: "Advanced CVT transmission with seamless bi-fuel system switching between Petrol, CNG, and Hydrogen for optimal performance.",
    price: "Contact for Pricing",
    specs: ["CVT Transmission", "Bi-Fuel System", "Eco-Friendly", "Sustainable Adventure"],
    image: hyron2,
  },
  {
    id: 3,
    name: "XLR8 HYRON",
    year: "2026",
    category: "Bi-Fuel ATV",
    description: "AIS-028 certified safety systems with industry-leading hydrogen integration for sustainable, powerful adventure.",
    price: "Contact for Pricing",
    specs: ["AIS-028 Certified", "Safety Systems", "Hydrogen Tech", "All-Terrain"],
    image: hyron3,
  },
];

export function FeaturedProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  const currentProduct = products[currentIndex];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12"
        >
          <div className="w-full lg:w-auto">
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Featured Models
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 sm:mt-4">
              DISCOVER OUR LINEUP
            </h2>
          </div>
          
          <div className="flex gap-3 mt-4 sm:mt-6 lg:mt-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all min-w-[44px] min-h-[44px]"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all min-w-[44px] min-h-[44px]"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2 py-1 sm:px-3 sm:py-1 bg-accent text-accent-foreground font-bold text-xs sm:text-sm rounded">
                NEW {currentProduct.year}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            >
              <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">
                {currentProduct.category}
              </span>
              
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                {currentProduct.name}
              </h3>
              
              <p className="text-muted-foreground text-base sm:text-lg max-w-md">
                {currentProduct.description}
              </p>
              
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {currentProduct.specs.map((spec) => (
                  <div
                    key={spec}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-muted rounded-lg text-foreground text-xs sm:text-sm font-medium"
                  >
                    {spec}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-2 sm:pt-4">
                <span className="font-display text-3xl sm:text-4xl text-gradient-orange">
                  {currentProduct.price}
                </span>
                <span className="text-muted-foreground text-xs sm:text-sm">Starting MSRP*</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                <Button 
                  size="lg" 
                  className="btn-glow w-full sm:w-auto min-h-[44px]"
                  onClick={() => {
                    const contactSection = document.querySelector("#contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-foreground/20 w-full sm:w-auto min-h-[44px]"
                  onClick={() => {
                    const specsSection = document.querySelector("#specs");
                    if (specsSection) {
                      specsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Specs
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to product ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2"
            >
              <span
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
