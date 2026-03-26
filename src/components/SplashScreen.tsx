import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

interface SplashScreenProps {
  isVisible: boolean;
}

const SplashScreen = ({ isVisible }: SplashScreenProps) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Radial glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, hsl(210 100% 55% / 0.15) 0%, transparent 70%)" }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.8, 0.4] }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Rotating ring */}
        <motion.div
          className="absolute w-72 h-72 rounded-full border border-primary/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-56 h-56 rounded-full border border-accent/10"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <motion.div className="flex flex-col items-center gap-8 relative z-10">
          <motion.img
            src={logo}
            alt="Sky Service"
            className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_hsl(210,100%,55%,0.4)]"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 200, damping: 15 }}
          />
          <motion.div
            className="flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="font-heading text-2xl font-bold tracking-[0.4em] gradient-text">SKY SERVICE</span>
            <span className="text-muted-foreground text-xs tracking-[0.5em] uppercase">Premium Auto Care</span>
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="w-40 h-0.5 rounded-full bg-secondary overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(210 100% 55%), hsl(190 100% 50%), hsl(210 100% 60%))" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.8 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default SplashScreen;
