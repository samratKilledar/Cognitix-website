import { motion } from "framer-motion";

const jumpAnimation = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 1.8,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function AnimatedIcon({ icon, color }) {
  return (
    <motion.div
      {...jumpAnimation}
      style={{
        fontSize: "3rem",
        color,
      }}
    >
      {icon}
    </motion.div>
  );
}