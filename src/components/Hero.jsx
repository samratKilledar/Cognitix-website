import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import AnimatedIcon from "./AnimatedIcon";
import "./Hero.css"
export default function Hero() {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to <span>Cogintix Tech</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        We deliver innovative software solutions, scalable mobile applications,
        enterprise consulting, security audits, and professional IT training.
      </motion.p>

      <div className="hero-icons">
        <AnimatedIcon icon={<FaLaptopCode />} color="#7c3aed" />
        <AnimatedIcon icon={<FaMobileAlt />} color="#6d28d9" />
        <AnimatedIcon icon={<MdSecurity />} color="#9333ea" />
        <AnimatedIcon icon={<GiTeacher />} color="#8b5cf6" />
      </div>
    </section>
  );
}