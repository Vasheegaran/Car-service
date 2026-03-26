import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import generalService from "@/assets/general-service.jpg";
import engineRepair from "@/assets/engine-repair.jpg";
import oilChange from "@/assets/oil-change.jpg";
import carWash from "@/assets/car-wash.jpg";
import battery from "@/assets/battery.jpg";

const services = [
  {
    title: "General Service",
    tagline: "Complete Vehicle Care",
    desc: "Our comprehensive general service covers everything from brake inspection to fluid top-ups, following manufacturer-recommended schedules for optimal vehicle health.",
    features: ["Multi-point inspection", "Brake check & adjustment", "Fluid level check", "Filter replacement", "Tire pressure & rotation"],
    image: generalService,
  },
  {
    title: "Engine Repair",
    tagline: "Precision Engineering",
    desc: "From minor tune-ups to major overhauls, our certified technicians use advanced diagnostic equipment to identify and resolve engine issues with surgical precision.",
    features: ["Computer diagnostics", "Timing belt replacement", "Head gasket repair", "Turbo service", "Performance tuning"],
    image: engineRepair,
  },
  {
    title: "Oil Change",
    tagline: "Engine Longevity",
    desc: "We use premium synthetic and semi-synthetic oils from trusted brands to keep your engine running at peak performance for thousands of kilometres.",
    features: ["Synthetic & semi-synthetic", "Oil filter replacement", "Engine flush available", "Multi-viscosity options", "Quick turnaround"],
    image: oilChange,
  },
  {
    title: "Car Wash & Detailing",
    tagline: "Showroom Perfection",
    desc: "Our professional wash and detailing services restore your vehicle's factory-fresh shine. From basic wash to ceramic coating, we deliver perfection.",
    features: ["Exterior wash & wax", "Interior deep cleaning", "Paint correction", "Ceramic coating", "Upholstery treatment"],
    image: carWash,
  },
  {
    title: "Battery Replacement",
    tagline: "Reliable Power",
    desc: "Quick battery diagnostics and replacement with top-quality batteries. We test your entire electrical system and ensure everything performs flawlessly.",
    features: ["Free battery health test", "Premium battery brands", "Electrical system check", "Old battery disposal", "Warranty included"],
    image: battery,
  },
];

const Services = () => (
  <PageTransition>
    <section className="pt-36 pb-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Our Expertise</span>
          </div>
          <h1 className="section-heading mb-4">Expert Car <span className="gradient-text">Care Solutions</span></h1>
          <div className="luxury-divider">
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
          </div>
          <p className="section-subheading mx-auto">From routine maintenance to complex repairs, every service is delivered with precision craftsmanship.</p>
        </SectionReveal>
      </div>
    </section>

    {services.map((s, i) => (
      <section key={s.title} className={`page-section relative overflow-hidden ${i % 2 === 1 ? "" : ""}`}>
        {i % 2 === 1 && <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5" />}
        <div className="container mx-auto relative z-10">
          <div className={`grid md:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
            <SectionReveal direction={i % 2 === 0 ? "left" : "right"}>
              <div className="rounded-2xl overflow-hidden md:[direction:ltr] relative group">
                <motion.img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-72 md:h-[420px] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.8 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </SectionReveal>
            <SectionReveal direction={i % 2 === 0 ? "right" : "left"}>
              <div className="md:[direction:ltr]">
                <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-3">{s.tagline}</span>
                <h2 className="font-heading font-bold text-2xl md:text-4xl mb-5 tracking-tight">{s.title}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">{s.desc}</p>
                <div className="space-y-3">
                  {s.features.map((f, fi) => (
                    <motion.div
                      key={f}
                      className="flex items-center gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.08 }}
                    >
                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <ChevronRight size={12} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground/80">{f}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/contact">
                    <motion.span
                      className="btn-premium inline-flex items-center gap-2 px-6 py-3 text-xs"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className="relative z-10">Book This Service</span>
                    </motion.span>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    ))}
  </PageTransition>
);

export default Services;
