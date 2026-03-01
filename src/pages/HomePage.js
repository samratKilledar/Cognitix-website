import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./HomePage.css";

function HomePage() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } }
  };

  return (
    <div className="home">

      {/* 🔥 Animated Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="particles"
        options={{
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#3b82f6" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
            links: {
              enable: true,
              distance: 150,
              color: "#3b82f6",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" }
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" }
            },
            modes: {
              repulse: { distance: 100 }
            }
          },
          detectRetina: true
        }}
      />

      {/* Hero */}
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
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.header>

      {/* Services */}
      <motion.section
        className="section"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Our Services</h2>
        <div className="card-container">

          <motion.div
            className="card"
            variants={slideLeft}
            whileHover={{ scale: 1.1, rotate: 2 }}
          >
            <h3>Web Development</h3>
            <p>Modern responsive websites using latest technologies.</p>
          </motion.div>

          <motion.div
            className="card"
            whileHover={{ scale: 1.1 }}
          >
            <h3>Mobile Apps</h3>
            <p>Android & iOS applications with premium UI.</p>
          </motion.div>

          <motion.div
            className="card"
            variants={slideRight}
            whileHover={{ scale: 1.1, rotate: -2 }}
          >
            <h3>Cloud Solutions</h3>
            <p>Secure, scalable cloud services.</p>
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
          <motion.li whileHover={{ x: 20 }}>✔ Experienced Developers</motion.li>
          <motion.li whileHover={{ x: 20 }}>✔ 24/7 Support</motion.li>
          <motion.li whileHover={{ x: 20 }}>✔ Affordable Pricing</motion.li>
          <motion.li whileHover={{ x: 20 }}>✔ On-Time Delivery</motion.li>
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
        <h2>Technologies</h2>
        <div className="tech">
          {["React", "Node", "MongoDB", "Flutter", "AWS"].map((tech, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.3, rotate: 5 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* Image Section */}
      <motion.section
        className="section"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="image-section">
          <motion.img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="IT"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        className="cta"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Ready to Grow Your Business?</h2>
        <motion.button
          className="btn"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          Contact Us
        </motion.button>
      </motion.section>

    </div>
  );
}

export default HomePage;