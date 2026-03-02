import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

function Services() {

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const services = [
    { title: "Web Development", desc: "Responsive websites using React, Angular & modern frameworks.", icon: "💻" },
    { title: "Mobile App Development", desc: "Android & iOS apps with modern UI and performance.", icon: "📱" },
    { title: "Cloud Solutions", desc: "AWS, Azure & secure scalable cloud deployment.", icon: "☁️" },
    { title: "UI/UX Design", desc: "Modern and user-friendly interface designs.", icon: "🎨" },
    { title: "Digital Marketing", desc: "SEO, Social Media Marketing & online branding.", icon: "📊" },
    { title: "Software Consulting", desc: "Enterprise-level software strategy & solutions.", icon: "⚙️" }
  ];

  return (
    <div className="services-page">

      {/* Hero Section */}
      <motion.div
        className="services-hero"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Our IT Services</h1>
        <p>Innovative solutions to grow your business digitally</p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="services-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            whileHover={{ scale: 1.08 }}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}

export default Services;