import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Trophy, Gem } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import ParticleField from "@/components/ParticleField";
import aboutBg from "@/assets/about-bg.jpg";
import teamImg from "@/assets/team.jpg";

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Founded with a vision to redefine car care in Coimbatore." },
  { year: "2014", title: "Growth & Innovation", desc: "Expanded to a state-of-the-art facility with advanced diagnostics." },
  { year: "2019", title: "Excellence Milestone", desc: "Served 3,000+ clients with a stellar 4.9-star reputation." },
  { year: "2024", title: "Premium Leader", desc: "Became the most trusted premium car service centre in the region." },
];

const values = [
  { icon: Trophy, title: "Excellence", desc: "We pursue perfection in every service we deliver." },
  { icon: Gem, title: "Integrity", desc: "Honest pricing and transparent communication, always." },
  { icon: Users, title: "Customer First", desc: "Your satisfaction drives every decision we make." },
];

const About = () => (
  <PageTransition>
    {/* Hero */}
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutBg} alt="About Sky Service" className="w-full h-full object-cover opacity-20" loading="lazy" width={800} height={600} />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>
      <ParticleField />
      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Our Story</span>
          </div>
          <h1 className="section-heading mb-4">Driving <span className="gradient-text">Excellence</span> Since 2009</h1>
          <div className="luxury-divider">
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
          </div>
          <p className="section-subheading mx-auto">A legacy of precision, passion, and uncompromising quality in automotive care.</p>
        </SectionReveal>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="page-section">
      <div className="container mx-auto grid md:grid-cols-2 gap-8">
        <SectionReveal direction="left">
          <motion.div
            className="glass-card-hover p-9 h-full"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="icon-luxury mb-6">
              <Target className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 tracking-wide">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To deliver world-class automotive service with integrity and precision, ensuring every client drives away with absolute confidence and complete satisfaction.</p>
          </motion.div>
        </SectionReveal>
        <SectionReveal direction="right">
          <motion.div
            className="glass-card-hover p-9 h-full"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="icon-luxury mb-6" style={{ background: "linear-gradient(135deg, hsl(28 100% 55% / 0.12), hsl(28 100% 55% / 0.04))", borderColor: "hsl(28 100% 55% / 0.15)" }}>
              <Eye className="text-accent" size={26} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 tracking-wide">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To become South India's most trusted automotive brand, setting new benchmarks in quality, technology, and the customer experience standard.</p>
          </motion.div>
        </SectionReveal>
      </div>
    </section>

    {/* Values */}
    <section className="page-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5" />
      <div className="container mx-auto relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Core Values</span>
          <h2 className="section-heading">What <span className="gradient-text">Drives Us</span></h2>
        </SectionReveal>
        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <motion.div
                className="glass-card-hover p-8 text-center"
                whileHover={{ y: -6 }}
              >
                <div className="icon-luxury mx-auto mb-5">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>

    {/* Team */}
    <section className="page-section">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <SectionReveal direction="left">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <motion.img
                  src={teamImg}
                  alt="Sky Service Team"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-4 md:-right-6 glass-card p-4 pr-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-lg leading-none">ISO</p>
                    <p className="text-muted-foreground text-[10px] tracking-wider">CERTIFIED</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </SectionReveal>
          <SectionReveal direction="right">
            <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Our People</span>
            <h2 className="section-heading mb-6">Meet the <span className="gradient-text">Experts</span></h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">Our team of 25+ factory-trained technicians brings decades of combined experience across all major car brands. Every team member is certified and committed to the Sky Service standard.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-5 text-center">
                <Users className="text-primary mx-auto mb-2" size={22} />
                <p className="font-heading font-bold text-2xl gradient-text">25+</p>
                <p className="text-muted-foreground text-[10px] tracking-wider uppercase mt-1">Technicians</p>
              </div>
              <div className="glass-card p-5 text-center">
                <Award className="text-accent mx-auto mb-2" size={22} />
                <p className="font-heading font-bold text-2xl gradient-text-gold">100%</p>
                <p className="text-muted-foreground text-[10px] tracking-wider uppercase mt-1">Certified</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="page-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-secondary/10 to-secondary/5" />
      <div className="container mx-auto max-w-3xl relative z-10">
        <SectionReveal className="text-center mb-16">
          <span className="font-heading text-primary text-[10px] tracking-[0.4em] uppercase block mb-4">Milestones</span>
          <h2 className="section-heading">Our <span className="gradient-text">Journey</span></h2>
        </SectionReveal>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, hsl(210 100% 55% / 0.3), transparent)" }} />
          {timeline.map((t, i) => (
            <SectionReveal key={t.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.15}>
              <div className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="font-heading text-primary font-bold text-xl">{t.year}</span>
                  <h3 className="font-heading font-semibold text-lg mt-1">{t.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{t.desc}</p>
                </div>
                <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </PageTransition>
);

export default About;
