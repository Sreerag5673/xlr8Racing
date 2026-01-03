import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 sm:mb-4 px-2">
            STAY IN THE LOOP
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base mb-6 sm:mb-8 px-4">
            Get exclusive access to new model announcements, special offers, and adventure inspiration.
          </p>
          <form 
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              // Handle newsletter subscription
              const form = e.target as HTMLFormElement;
              const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
              if (emailInput && emailInput.value) {
                // You can add your newsletter subscription logic here
                alert(`Thank you for subscribing! We'll send updates to ${emailInput.value}`);
                emailInput.value = "";
              }
            }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 h-14 bg-muted border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
            />
            <Button type="submit" size="lg" className="h-14 px-8 btn-glow">
              Subscribe
            </Button>
          </form>
          <p className="text-muted-foreground text-sm mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
