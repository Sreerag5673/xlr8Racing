import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-display text-xl text-primary-foreground">X8</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl tracking-wider text-foreground leading-none">
                  XLR8
                </span>
                <span className="text-primary text-xs font-semibold tracking-widest">
                  HYRON
                </span>
              </div>
            </motion.div>
            
            <p className="text-muted-foreground mb-8 max-w-sm">
              Adventure isn't the destination, it's the machine. 
              Revolutionary bi-fuel ATV with hydrogen technology. 395cc engine, 9.5 HP, 22.5 Nm torque, AIS-028 certified.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Innovation Hub, Tech Park, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91 1800-XLR8-HYRON</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@xlr8hyron.com</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-start md:items-end">
            <h4 className="font-display text-xl text-foreground mb-6">FOLLOW US</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-muted-foreground text-sm">
          © {new Date().getFullYear()} XLR8 HYRON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
