import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Shield, Clock, Star, ChevronRight, Settings, Droplets, Zap, Car, Wrench, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleField from "@/components/ParticleField";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import heroBg from "@/assets/hero-bg.jpg";
import generalService from "@/assets/general-service.jpg";
import carWash from "@/assets/car-wash.jpg";

const features = [
  { icon: Shield, title: "Certified Experts", desc: "Factory-trained technicians with years of hands-on experience" },
  { icon: Clock, title: "Same Day Service", desc: "Most services completed within hours, not days" },
  { icon: Star, title: "Genuine Parts", desc: "Only OEM parts and premium-grade materials used" },
  { icon: Wrench, title: "Advanced Diagnostics", desc: "State-of-the-art computerized diagnostic equipment" },
];

const services = [
  { icon: Settings, title: "General Service", desc: "Complete multi-point inspection and maintenance", price: "From ₹2,499" },
  { icon: Wrench, title: "Engine Repair", desc: "Expert engine diagnostics and repair solutions", price: "From ₹3,999" },
  { icon: Droplets, title: "Oil Change", desc: "Premium synthetic oil change and filter replacement", price: "From ₹999" },
  { icon: Car, title: "Car Wash & Detailing", desc: "Professional wash, polish, and interior detailing", price: "From ₹499" },
  { icon: Zap, title: "Battery Service", desc: "Quick testing and replacement with warranty", price: "From ₹1,499" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "BMW Owner", text: "Sky Service transformed my 5-series. The attention to detail is on par with the authorized service centre, at a fraction of the cost.", rating: 5 },
  { name: "Priya Sharma", role: "Audi Owner", text: "Best car service in Coimbatore, hands down. Professional, fast, and they genuinely care about your vehicle.", rating: 5 },
  { name: "Arun Prakash", role: "Mercedes Owner", text: "I've been bringing all my cars here for 5 years. Their premium service package is unbeatable.", rating: 5 },
];

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax BG */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img src={heroBg} alt="Premium car service" className="w-full h-full object-cover" width={1920} height={1080} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        
        {/* Decorative glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-[0.06] animate-float"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full opacity-[0.04] animate-float-delayed"
          style={{ background: "radial-gradient(circle, hsl(190 100% 50%), transparent 70%)" }} />

        <ParticleField />

        <motion.div className="container mx-auto px-4 md:px-8 relative z-10 pt-24" style={{ opacity: heroOpacity }}>
          <div className="max-w-3xl">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Coimbatore's Finest Auto Care</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] mb-6"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Premium Car Care{" "}
              <br />
              <span className="gradient-text">Redefined</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.7 }}
            >
              Where cutting-edge technology meets master craftsmanship. Experience the Sky difference.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.7 }}
            >
              <Link to="/contact">
                <motion.span
                  className="btn-premium inline-flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book Service <ArrowRight size={16} />
                  </span>
                </motion.span>
              </Link>
              <Link to="/services">
                <motion.span
                  className="btn-outline-premium inline-flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Explore Services
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
        >
          <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase">Scroll</span>
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="page-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { end: 5000, suffix: "+", label: "Cars Serviced" },
              { end: 4500, suffix: "+", label: "Happy Clients" },
              { end: 15, suffix: "+", label: "Years of Trust" },
              { end: 25, suffix: "+", label: "Expert Crew" },
            ].map((s) => (
              <AnimatedCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="page-section relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
        <div className="container mx-auto relative z-10">
          <SectionReveal className="text-center mb-16">
            <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Why Choose Us</span>
            <h2 className="section-heading mb-4">The Sky <span className="gradient-text">Advantage</span></h2>
            <div className="luxury-divider">
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
            </div>
            <p className="section-subheading mx-auto">Uncompromising quality in every detail.</p>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  className="glass-card-hover p-7 text-center group cursor-default"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="icon-luxury mx-auto mb-5 group-hover:animate-scale-breathe">
                    <f.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2 tracking-wide">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Services Preview */}
      <section className="page-section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5" />
        <div className="container mx-auto relative z-10">
          <SectionReveal className="text-center mb-16">
            <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Our Expertise</span>
            <h2 className="section-heading mb-4">Premium <span className="gradient-text">Services</span></h2>
            <div className="luxury-divider">
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.08}>
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  className="glass-card-hover p-7 group cursor-default h-full"
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="icon-luxury group-hover:animate-scale-breathe">
                      <s.icon className="text-primary" size={24} />
                    </div>
                    <span className="text-xs font-heading text-primary/70 tracking-wider">{s.price}</span>
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-2 tracking-wide">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  <div className="mt-5 pt-4 border-t border-border/30">
                    <Link to="/services" className="text-xs font-heading text-primary/70 hover:text-primary tracking-wider inline-flex items-center gap-1 transition-colors group-hover:gap-2">
                      Learn More <ChevronRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us - Split */}
      <section className="page-section">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SectionReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <motion.img
                    src={generalService}
                    alt="Car service"
                    className="w-full h-[420px] object-cover"
                    loading="lazy"
                    width={800}
                    height={600}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-6 -right-4 md:-right-6 glass-card p-4 pr-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                      <Star className="text-accent" size={20} />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-lg leading-none">4.9</p>
                      <p className="text-muted-foreground text-[10px] tracking-wider">GOOGLE RATING</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Excellence Defined</span>
              <h2 className="section-heading mb-6">The Sky Standard of <span className="gradient-text">Precision</span></h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At Sky Service, every vehicle receives the attention and expertise it deserves. We combine cutting-edge diagnostics with master craftsmanship to deliver results that exceed your expectations.
              </p>
              <div className="space-y-4">
                {[
                  "Genuine OEM parts — always guaranteed",
                  "Transparent pricing with zero hidden fees",
                  "Complimentary vehicle health report",
                  "Door-to-door pick-up & drop service",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <ChevronRight size={14} className="text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Showcase Banner */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={carWash} alt="Car detailing" className="w-full h-full object-cover opacity-20" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <SectionReveal>
            <span className="font-heading text-accent text-[10px] tracking-[0.4em] uppercase block mb-4">Showcase</span>
            <h2 className="section-heading mb-4">See the <span className="gradient-text-gold">Transformation</span></h2>
            <p className="section-subheading mx-auto mb-8">Every vehicle that enters our workshop leaves with a renewed sense of excellence.</p>
            <Link to="/gallery">
              <motion.span
                className="btn-outline-premium inline-flex items-center gap-3"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Gallery <ArrowRight size={16} />
              </motion.span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="page-section relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-[0.03]"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
        <div className="container mx-auto relative z-10">
          <SectionReveal className="text-center mb-16">
            <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Testimonials</span>
            <h2 className="section-heading mb-4">Trusted by <span className="gradient-text">Enthusiasts</span></h2>
            <div className="luxury-divider">
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
            </div>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card p-7 h-full flex flex-col">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 text-sm mb-6 leading-relaxed flex-1">"{t.text}"</p>
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-heading font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs tracking-wider">{t.role}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section">
        <div className="container mx-auto">
          <motion.div
            className="glass-card p-12 md:p-20 text-center relative overflow-hidden"
            whileInView={{ scale: [0.98, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-[0.06]"
              style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
            <div className="relative z-10">
              <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Get Started</span>
              <h2 className="section-heading mb-4">Ready for the <span className="gradient-text">Sky Experience</span>?</h2>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
                Book your appointment today and discover why we're Coimbatore's most trusted car service destination.
              </p>
              <Link to="/contact">
                <motion.span
                  className="btn-premium inline-flex items-center gap-3"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Book Your Service <ArrowRight size={16} />
                  </span>
                </motion.span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
