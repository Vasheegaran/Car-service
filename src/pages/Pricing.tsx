import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, Crown } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

const plans = [
  {
    name: "Essential",
    price: "₹2,499",
    tagline: "Routine Maintenance",
    popular: false,
    features: [
      "Engine oil change",
      "Oil filter replacement",
      "Air filter check",
      "Brake inspection",
      "Tire pressure check",
      "Fluid top-up",
    ],
  },
  {
    name: "Professional",
    price: "₹4,999",
    tagline: "Complete Care Package",
    popular: true,
    features: [
      "Everything in Essential",
      "Full engine diagnostics",
      "Spark plug replacement",
      "AC performance check",
      "Battery health test",
      "Interior vacuuming",
      "Exterior wash & wax",
    ],
  },
  {
    name: "Elite",
    price: "₹8,999",
    tagline: "The Ultimate Service",
    popular: false,
    features: [
      "Everything in Professional",
      "Complete engine tune-up",
      "Brake pad replacement",
      "Wheel alignment & balance",
      "Interior deep cleaning",
      "Paint protection coating",
      "3-month warranty",
      "Door-to-door service",
    ],
  },
];

const Pricing = () => (
  <PageTransition>
    <section className="pt-36 pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Pricing</span>
          </div>
          <h1 className="section-heading mb-4">Transparent <span className="gradient-text">Investment</span></h1>
          <div className="luxury-divider">
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
          </div>
          <p className="section-subheading mx-auto">Premium quality at honest prices. Choose the plan that fits your vehicle's needs.</p>
        </SectionReveal>
      </div>
    </section>

    <section className="page-section pt-0">
      <div className="container mx-auto">
        <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((p) => (
            <StaggerItem key={p.name} className="h-full">
              <motion.div
                className={`glass-card p-8 md:p-9 relative flex flex-col h-full transition-all duration-700 ${
                  p.popular
                    ? "border-primary/50 shadow-lg"
                    : "border-border/50"
                }`}
                whileHover={{ y: -8, borderColor: "hsl(210 100% 55% / 0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={p.popular ? { boxShadow: "0 0 60px hsl(210 100% 55% / 0.15), 0 20px 60px hsl(0 0% 0% / 0.3)" } : {}}
              >
                <div className="mb-2">
                  {p.popular && (
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-heading font-bold tracking-[0.15em] text-primary uppercase">
                      <Crown size={12} /> Recommended
                    </span>
                  )}
                </div>
                <div className="mb-1">
                  <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">{p.tagline}</span>
                </div>
                <h3 className="font-heading font-bold text-2xl mb-4 tracking-wide">{p.name}</h3>
                <div className="mb-8">
                  <span className="text-4xl md:text-5xl font-heading font-bold gradient-text">{p.price}</span>
                  <span className="text-muted-foreground text-xs ml-2">/ service</span>
                </div>
                <div className="neon-line mb-6" />
                <ul className="space-y-3 mb-10 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-md bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={11} className="text-primary" />
                      </div>
                      <span className="text-foreground/70">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block">
                  <motion.span
                    className={`w-full py-3.5 rounded-xl font-heading font-semibold text-xs tracking-wider uppercase text-center transition-all duration-500 flex items-center justify-center gap-2 ${
                      p.popular
                        ? "btn-premium"
                        : "btn-outline-premium"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started <ArrowRight size={14} />
                    </span>
                  </motion.span>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  </PageTransition>
);

export default Pricing;
