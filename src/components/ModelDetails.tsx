import { motion } from "framer-motion";
import { Gauge, Fuel, Cog, Leaf, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import hyronImage from "@/assets/hyron-2.jpeg";

const specs = [
  { icon: Zap, label: "Engine", value: "395cc" },
  { icon: Gauge, label: "Power", value: "9.5 HP" },
  { icon: Cog, label: "Torque", value: "22.5 Nm" },
  { icon: Fuel, label: "Fuel System", value: "Bi-Fuel" },
  { icon: Leaf, label: "Hydrogen", value: "18%" },
  { icon: Shield, label: "Certification", value: "AIS-028" },
];

const features = [
  "395cc Single Cylinder Four Stroke Bi-fuel Engine",
  "Advanced Bi-fuel System: Petrol & CNG with 18% Hydrogen",
  "AIS-028 Certified CNG Tank & Safety Systems",
  "CVT (Continuously Variable Transmission)",
  "22.5 Nm Torque & 9.5 HP Power Output",
  "Eco-Friendly Performance for Sustainable Adventure",
  "Full Technical Details Including CVT Transmission",
  "Bi-Fuel System with Seamless Fuel Switching",
];

export function ModelDetails() {
  return (
    <section id="specs" className="py-12 sm:py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Technical Specifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 sm:mt-4 px-2">
            XLR8 HYRON SPECS
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Revolutionary bi-fuel technology meets rugged all-terrain capability. 
            Engineered for performance and sustainability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start lg:items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden card-elevated">
              <img
                src={hyronImage}
                alt="XLR8 HYRON Bi-Fuel ATV"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Category Badge */}
            <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 sm:px-8 sm:py-4 bg-card border border-primary rounded-lg sm:rounded-xl shadow-lg max-w-[90%] sm:max-w-none">
              <span className="text-muted-foreground text-xs sm:text-sm block text-center">Category</span>
              <span className="font-display text-lg sm:text-xl md:text-2xl text-gradient">ALL-TERRAIN VEHICLE</span>
            </div>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary border border-border text-center hover:border-primary/50 transition-colors"
                >
                  <spec.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 sm:mb-2" />
                  <p className="font-display text-lg sm:text-xl text-foreground">{spec.value}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{spec.label}</p>
                </motion.div>
              ))}
            </div>

            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">KEY FEATURES</h3>
            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="btn-glow flex-1 min-h-[44px]"
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Request Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="flex-1 min-h-[44px]"
                onClick={() => {
                  // Open contact section for brochure request
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
