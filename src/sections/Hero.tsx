"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SaveSpotButton } from "./Buttons";
import ArrowWIcon from "@/assets/icons/arrow-w.svg";
import cursorImage from "@/assets/images/cursor.png";
import messageImage from "@/assets/images/message.png";

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const heading = ["LEARN", "TO", "CODE", "FROM", "YOUR", "HOME"];

  return (
    <section
      ref={sectionRef}
      className="relative py-[72px] md:py-24 text-white 
      bg-[linear-gradient(to_bottom,#000,#200d42_34%,#4f21a1_65%,#a46edb_82%)] 
      overflow-clip"
    >
      {/* Circular shape at bottom */}
      <div className="absolute h-[375px] w-[750px] md:w-[1536px] md:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560eb)] top-[calc(100%-96px)] md:top-[calc(100%-120px)]"></div>

      <div className="container relative">
        {/* Top link */}
        <div className="flex items-center justify-center">
          <a
            href="https://youtu.be/Iqr3XIhSnUQ?si=uoa99AV6knRiKACJ"
            className="border border-white/30 py-1 px-2 rounded-lg inline-flex gap-3"
          >
            <span className="bg-[linear-gradient(to_right,#f87aff,#fb93d0,#ffdd99,#c3f0b2,#2fd8fe)] bg-clip-text text-transparent">
              Free Resources
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Get Here</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>

        {/* Title with buttery staggered animation */}
        <div className="flex justify-center mt-8">
          <div className="inline-flex relative flex-col items-center">
            <motion.h1
              className="text-7xl md:text-9xl font-bold tracking-tighter text-center flex flex-wrap justify-center gap-x-4 gap-y-2"
            >
              {heading.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.25,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Draggable cursor image with fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: heading.length * 0.25, // starts after last word
                ease: "easeOut",
              }}
              drag
              dragConstraints={sectionRef}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileTap={{ cursor: "grabbing" }}
              className="size-[200px] absolute right-[1010px] top-[-130px] hidden md:inline cursor-grab"
            >
              <Image src={cursorImage} alt="Cursor image" draggable="false" />
            </motion.div>

            {/* Draggable message image with fade-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: heading.length * 0.25 + 0.3, // slightly after cursor
                ease: "easeOut",
              }}
              drag
              dragConstraints={sectionRef}
              dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
              whileTap={{ cursor: "grabbing" }}
              className="size-[200px] absolute left-[1050px] top-[200px] hidden md:inline cursor-grab"
            >
              <Image src={messageImage} alt="Message image" draggable="false" />
            </motion.div>
          </div>
        </div>

        {/* Description */}
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            Empower your learning journey with personalized coaching designed
            to build your skills, boost your confidence, and help you achieve
            your goals.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <SaveSpotButton />
        </div>
      </div>
    </section>
  );
};
