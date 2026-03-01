import { motion } from "framer-motion";
import {
  FaCode,
  FaMobile,
  FaUserShield,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "../pages/Home.css";

const services = [
  {
    icon: <FaCode />,
    title: "Software Development",
    desc: "Enterprise-grade software solutions tailored to your business.",
  },
  {
    icon: <FaMobile />,
    title: "Mobile App Development",
    desc: "High-performance Android & iOS apps using modern frameworks.",
  },
  {
    icon: <FaUserShield />,
    title: "Security Audit",
    desc: "Complete application & infrastructure security assessment.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "IT Training",
    desc: "Professional training for students and working professionals.",
  },
];

export default function Services() {
  return (
    <section className="services">
      <h2>What We Do</h2>

      <div className="service-grid">
        {services.map((item, index) => (
          <motion.div
            className="service-card"
            key={index}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}