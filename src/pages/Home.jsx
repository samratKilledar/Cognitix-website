import Hero from "../components/Hero";
import Services from "../components/Services";
import States from "../components/States";
import CTA from "../components/CTA";

import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

export default function Home() {

  const [icons, setIcons] = useState([]);

  useEffect(() => {
    const allIcons = { ...FaIcons, ...SiIcons };
    const iconKeys = Object.keys(allIcons);

    const generatedIcons = Array.from({ length: 100 }).map(() => {
      const randomIcon =
        allIcons[iconKeys[Math.floor(Math.random() * iconKeys.length)]];
      return {
        Icon: randomIcon,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        size: Math.random() * 20 + 20,
        duration: Math.random() * 10 + 10,
      };
    });

    setIcons(generatedIcons);
  }, []);

  return (
    <>
      <div className="icon-waterfall">
        {icons.map((item, index) => {
          const IconComponent = item.Icon;
          return (
            <IconComponent
              key={index}
              className="falling-icon"
              style={{
                left: `${item.left}%`,
                fontSize: `${item.size}px`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${item.duration}s`,
              }}
            />
          );
        })}
      </div>

      <Hero />
      <Services />
      <States />
      <CTA />
    </>
  );
}