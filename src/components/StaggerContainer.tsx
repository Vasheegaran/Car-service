import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const StaggerContainer = ({ children, className = "", staggerDelay = 0.12 }: StaggerContainerProps) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    custom={staggerDelay}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);

export { StaggerContainer, StaggerItem };
