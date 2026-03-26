import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import PageTransition from "@/components/PageTransition";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Our team will contact you shortly.");
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  const inputClass = (field: string) =>
    `w-full px-5 py-3.5 rounded-xl bg-secondary/30 border text-sm transition-all duration-500 outline-none ${
      focused === field
        ? "border-primary/50 ring-1 ring-primary/20 bg-secondary/40"
        : "border-border/50 hover:border-border"
    }`;

  return (
    <PageTransition>
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55%), transparent 70%)" }} />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-glow-pulse" />
              <span className="font-heading text-primary text-[10px] tracking-[0.3em] uppercase">Contact</span>
            </div>
            <h1 className="section-heading mb-4">Let's <span className="gradient-text">Connect</span></h1>
            <div className="luxury-divider">
              <div className="w-2 h-2 rotate-45 border border-primary/40" />
            </div>
            <p className="section-subheading mx-auto">Book your premium service or reach out with any enquiry.</p>
          </SectionReveal>
        </div>
      </section>

      <section className="page-section pt-0">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-10">
            <SectionReveal direction="left" className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6">
                <div>
                  <label className="text-xs font-heading tracking-wider text-muted-foreground mb-2 block uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    className={inputClass("name")}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-heading tracking-wider text-muted-foreground mb-2 block uppercase">Phone</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      className={inputClass("phone")}
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-heading tracking-wider text-muted-foreground mb-2 block uppercase">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      className={inputClass("email")}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-heading tracking-wider text-muted-foreground mb-2 block uppercase">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    className={`${inputClass("message")} resize-none`}
                    placeholder="Describe your service requirements..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-premium w-full flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <Send size={16} /> Send Message
                  </span>
                </motion.button>
              </form>
            </SectionReveal>

            <SectionReveal direction="right" className="lg:col-span-2">
              <div className="space-y-5">
                {[
                  { icon: Phone, title: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                  { icon: Mail, title: "Email", value: "info@skyservice.in", href: "mailto:info@skyservice.in" },
                  { icon: MapPin, title: "Location", value: "123 Auto Lane, RS Puram,\nCoimbatore, Tamil Nadu 641002" },
                  { icon: Clock, title: "Working Hours", value: "Mon – Sat: 8:00 AM – 7:00 PM\nSunday: Closed" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="glass-card-hover p-5 flex items-start gap-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="icon-luxury w-12 h-12 shrink-0">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm mb-1 tracking-wider">{item.title}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden h-48 border border-border/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.42099483!2d76.88274635!3d11.0168445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f461b59%3A0x5b2d38a3ef44f64a!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sky Service Location"
                  />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
