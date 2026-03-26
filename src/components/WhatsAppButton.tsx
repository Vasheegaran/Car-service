import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919876543210?text=Hi%20Sky%20Service%2C%20I%20need%20a%20car%20service"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} className="text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
