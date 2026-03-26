import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import generalService from "@/assets/general-service.jpg";
import carWash from "@/assets/car-wash.jpg";

const images = [
  { src: heroBg, alt: "Premium workshop" },
  { src: gallery2, alt: "Sports car service" },
  { src: gallery3, alt: "Paint polishing" },
  { src: gallery4, alt: "Computer diagnostics" },
  { src: gallery5, alt: "SUV maintenance" },
  { src: gallery6, alt: "Brake repair" },
  { src: gallery1, alt: "Interior detailing" },
  { src: generalService, alt: "Under-car inspection" },
  { src: carWash, alt: "Car wash & detailing" },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + images.length) % images.length);
  };

  return (
    <PageTransition>
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Portfolio</span>
            </div>
            <h1 className="section-heading mb-4">Our Work in <span className="gradient-text">Action</span></h1>
            <div className="luxury-divider">
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
            </div>
            <p className="section-subheading mx-auto">A curated collection showcasing our craftsmanship and precision.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <SectionReveal key={i} delay={i * 0.06}>
                <motion.div
                  className="rounded-2xl overflow-hidden cursor-pointer group relative aspect-[4/3]"
                  onClick={() => setLightbox(i)}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <span className="font-heading text-xs tracking-[0.3em] uppercase text-foreground/90">{img.alt}</span>
                  </div>
                  <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 rounded-2xl transition-all duration-500" />
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors z-20"
            >
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 p-3 rounded-full glass-card hover:bg-secondary/50 transition-colors z-20"
            >
              <ChevronRight size={20} />
            </button>
            <motion.img
              key={lightbox}
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {images.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === lightbox ? "bg-primary w-4" : "bg-muted-foreground/30"}`} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};

export default Gallery;
