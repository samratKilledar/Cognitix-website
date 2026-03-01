import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";

function HomePage() {

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="home">

      {/* Hero Section */}
      <motion.header
        className="home-header"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h1>We Build Modern IT Solutions</h1>
        <p>Web Development | Mobile Apps | Cloud Solutions</p>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.header>

      {/* Services Section */}
      <motion.section
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Our Services</h2>
        <div className="card-container">
          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Web Development</h3>
            <p>Responsive and dynamic websites using React & modern tools.</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Mobile App Development</h3>
            <p>Android & iOS apps with high performance and UI design.</p>
          </motion.div>

          <motion.div className="card" whileHover={{ scale: 1.05 }}>
            <h3>Cloud Solutions</h3>
            <p>Secure, scalable and reliable cloud infrastructure.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="section bg-light"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Why Choose Us?</h2>
        <ul className="points">
          <motion.li whileHover={{ x: 10 }}>✔ Experienced Developers</motion.li>
          <motion.li whileHover={{ x: 10 }}>✔ 24/7 Support</motion.li>
          <motion.li whileHover={{ x: 10 }}>✔ Affordable Pricing</motion.li>
          <motion.li whileHover={{ x: 10 }}>✔ On-Time Project Delivery</motion.li>
        </ul>
      </motion.section>

      {/* Technologies */}
      <motion.section
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Technologies We Use</h2>
        <div className="tech">
          {["React", "Node.js", "MongoDB", "Flutter", "AWS"].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Call To Action */}
      <motion.section
        className="cta"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Ready to Start Your Project?</h2>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </motion.section>

    </div>
  );
}

export default HomePage;

   