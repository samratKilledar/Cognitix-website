import { motion } from "framer-motion";
import "../App.css"

export default function CTA() {
  return (
    <section className="cta">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Ready to Transform Your Business Digitally?
      </motion.h2>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Free Consultation
      </motion.button>
    </section>
  );
}