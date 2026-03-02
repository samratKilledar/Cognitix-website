// import { motion } from "framer-motion";

// const jumpAnimation = {
//   animate: {
//     y: [0, -12, 0],
//   },
//   transition: {
//     duration: 1.8,
//     repeat: Infinity,
//     ease: "easeInOut",
//   },
// };

// export default function AnimatedIcon({ icon, color }) {
//   return (
//     <motion.div
//       {...jumpAnimation}
//       style={{
//         fontSize: "3rem",
//         color,
//       }}
//     >
//       {icon}
//     </motion.div>
//   );
// }

import React from "react";
import { motion } from "framer-motion";
import "./AnimatedIcon.css";

import { FaAndroid, FaWindows, FaTabletAlt, FaLaptopCode } from "react-icons/fa";
import { MdPhoneIphone, MdDesktopWindows } from "react-icons/md";
import { BsMicrosoft } from "react-icons/bs";
import { HiOfficeBuilding } from "react-icons/hi";

export default function AnimatedIcon() {

  const rainDrops = Array.from({ length: 80 });

  const jumpAnimation = {
    animate: {
      y: [0, -15, 0],
    },
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="rain-wrapper">

      {/* 🌈 Gradient Background */}
      <div className="animated-gradient"></div>

      {/* 🌧 Rain Drops */}
      <div className="rain">
        {rainDrops.map((_, index) => (
          <span
            key={index}
            style={{
              left: Math.random() * 100 + "%",
              animationDuration: 0.5 + Math.random() * 1 + "s",
              animationDelay: Math.random() * 2 + "s",
            }}
          />
        ))}
      </div>

      {/* 🌊 Waterfall */}
      <div className="waterfall"></div>

      {/* 💦 Splash */}
      <div className="splash"></div>

      {/* 💻 Company Icons */}
      <div className="icon-container">
        <motion.div {...jumpAnimation} className="icon" style={{ color: "#3DDC84" }}>
          <FaAndroid />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#000000" }}>
          <MdPhoneIphone />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#00A4EF" }}>
          <FaWindows />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#0078D6" }}>
          <MdDesktopWindows />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#6C63FF" }}>
          <FaTabletAlt />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#FF6B6B" }}>
          <FaLaptopCode />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#F25022" }}>
          <BsMicrosoft />
        </motion.div>

        <motion.div {...jumpAnimation} className="icon" style={{ color: "#FFC107" }}>
          <HiOfficeBuilding />
        </motion.div>
      </div>

    </div>
  );
}