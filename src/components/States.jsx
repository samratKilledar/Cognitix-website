import { motion } from "framer-motion";
import "../App.css"
export default function States() {
  const stats = [
    { number: "120+", label: "Projects Completed" },
    { number: "80+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Security Assurance" },
  ];

  return (
    <section className="stats">
      <h2>Our Achievements</h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

