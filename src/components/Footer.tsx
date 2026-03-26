import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="relative bg-card/60 border-t border-border/20 overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.03]" 
      style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />

    <div className="container mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Link to="/" className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Sky Service" className="w-10 h-10 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-[0.2em] gradient-text">SKY SERVICE</span>
              <span className="text-[8px] tracking-[0.3em] text-muted-foreground uppercase">Est. 2009</span>
            </div>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            Premium car care and auto repair services in Coimbatore. Where precision meets passion.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <Icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-xs mb-5 tracking-[0.2em] text-foreground/80">NAVIGATION</h4>
          <div className="flex flex-col gap-2.5">
            {["Home", "About", "Services", "Pricing", "Gallery", "Contact"].map((l) => (
              <Link key={l} to={l === "Home" ? "/" : `/${l.toLowerCase()}`} className="text-muted-foreground text-sm hover:text-primary hover:translate-x-1 transition-all duration-300 inline-flex">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-xs mb-5 tracking-[0.2em] text-foreground/80">SERVICES</h4>
          <div className="flex flex-col gap-2.5 text-muted-foreground text-sm">
            {["General Service", "Engine Repair", "Oil Change", "Car Wash & Detailing", "Battery Replacement"].map((s) => (
              <span key={s} className="hover:text-foreground/70 transition-colors">{s}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold text-xs mb-5 tracking-[0.2em] text-foreground/80">REACH US</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone size={13} className="text-primary" />
              </div>
              +91 98765 43210
            </a>
            <a href="mailto:info@skyservice.in" className="flex items-center gap-3 hover:text-primary transition-colors group">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail size={13} className="text-primary" />
              </div>
              info@skyservice.in
            </a>
            <span className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={13} className="text-primary" />
              </div>
              Coimbatore, Tamil Nadu, India
            </span>
          </div>
        </div>
      </div>

      <div className="neon-line mt-14 mb-8" />
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground/60 text-xs tracking-wider">
          © {new Date().getFullYear()} Sky Service. All rights reserved.
        </p>
        <p className="text-muted-foreground/40 text-xs tracking-wider">
          Crafted with precision in Coimbatore
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
