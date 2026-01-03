import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Target, Eye, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To revolutionize sustainable adventure technology through innovative bi-fuel systems, making eco-conscious exploration accessible without compromising performance or excitement.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To lead the all-terrain vehicle industry with hydrogen-powered innovation, creating a cleaner, more sustainable future for adventure enthusiasts worldwide.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Pioneering sustainable adventure technology with bi-fuel systems combining Petrol, CNG, and 18% Hydrogen for maximum efficiency and minimal environmental impact.",
  },
];

export function AboutSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoId = "dQw4w9WgXcQ";
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleVideoClick = () => {
    setVideoLoaded(true);
  };

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Video/Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden card-elevated relative">
              {!videoLoaded ? (
                <>
                  <img
                    src={thumbnailUrl}
                    alt="Brand Story Video"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    onClick={handleVideoClick}
                    aria-label="Play Brand Story Video"
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center border-2 border-primary group-hover:bg-primary transition-colors"
                    >
                      <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                    </motion.div>
                  </button>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&autoplay=1`}
                  title="Brand Story Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              )}
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Our Story
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6">
              XLR8 <span className="text-gradient">HYRON</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-4 sm:mb-8 leading-relaxed">
              Born from a vision to merge adventure with sustainability, XLR8 HYRON represents 
              the future of sustainable adventure technology. Our revolutionary bi-fuel system combines 
              traditional petrol with CNG and 18% hydrogen, delivering powerful 9.5 HP performance 
              with 22.5 Nm torque while significantly reducing environmental impact.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              With AIS-028 certified safety systems, advanced CVT transmission, and seamless bi-fuel 
              switching technology, every ride is smooth, safe, and exhilarating. Adventure isn't 
              just the destination—it's the machine.
            </p>
            <Button 
              size="lg" 
              className="btn-glow w-full sm:w-auto min-h-[44px]"
              onClick={() => {
                // Scroll to products section which has the hydrogen tech details
                const productsSection = document.querySelector("#products");
                if (productsSection) {
                  productsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Learn More About Our Technology
            </Button>
          </motion.div>
        </div>

        {/* Mission, Vision, Legacy Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-16 md:mt-24">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-xl sm:rounded-2xl card-elevated border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">{value.title}</h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
