"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl text-center text-white/70 ">
          Teaching the most advanced technologies...
        </h2>

        <div className="flex overflow-hidden mt-9 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            initial={{ translateX: "0" }}
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex flex-none gap-20 pr-20 items-center"
          >
            {[...images, ...images].map(({ src, alt }, index) => (
              <Image
                key={`${alt}-${index}`}
                src={src}
                alt={alt}
                className="flex-none h-[120px] w-auto md:h-[160px] lg:h-[200px]"
                priority
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
