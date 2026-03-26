import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  className?: string;
  delay?: number;
}

const SectionReveal = ({ children, direction = "up", className = "", delay = 0 }: SectionRevealProps) => {
  const variants = {
    left: { initial: { opacity: 0, x: -60 }, animate: { opacity: 1, x: 0 } },
    right: { initial: { opacity: 0, x: 60 }, animate: { opacity: 1, x: 0 } },
    up: { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 } },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction].initial}
      whileInView={variants[direction].animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
