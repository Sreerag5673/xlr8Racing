import { motion } from "framer-motion";
import { Fuel, Leaf, Zap, Shield } from "lucide-react";

const hydrogenFeatures = [
  {
    icon: Fuel,
    title: "Bi-Fuel System",
    description: "Seamlessly switch between Petrol, CNG, and 18% Hydrogen for optimal performance and efficiency.",
  },
  {
    icon: Leaf,
    title: "18% Hydrogen",
    description: "Advanced hydrogen integration reducing emissions while maintaining powerful performance.",
  },
  {
    icon: Zap,
    title: "395cc Engine",
    description: "9.5 HP power output with 22.5 Nm torque delivering exceptional all-terrain capability.",
  },
  {
    icon: Shield,
    title: "AIS-028 Certified",
    description: "Industry-leading safety standards with certified CNG tank and comprehensive safety systems.",
  },
];

export function Categories() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
            Hydrogen Technology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 sm:mt-4 px-2">
            REVOLUTIONARY BI-FUEL SYSTEM
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
            Experience the future of sustainable adventure with our advanced bi-fuel technology combining Petrol, CNG, and Hydrogen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {hydrogenFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-colors card-elevated"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
