"use client";
import { useEffect, useRef, useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

interface FeatureProps {
  title: string;
  description: string;
  price: string;
  perks: string[];
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  price,
  perks,
}) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  // Wrap the function in useCallback to memoize it
  const updateMousePosition = useCallback((e: MouseEvent) => {
    if (!borderRef.current) return;
    const rect = borderRef.current.getBoundingClientRect();
    offsetX.set(e.clientX - rect.left);
    offsetY.set(e.clientY - rect.top);
  }, [offsetX, offsetY]);

  useEffect(() => {
    const el = borderRef.current;
    if (!el) return;
    el.addEventListener("mousemove", updateMousePosition);
    return () => el.removeEventListener("mousemove", updateMousePosition);
  }, [updateMousePosition]); // Add updateMousePosition to dependencies

  return (
    <div
      ref={borderRef}
      className="relative border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1 flex flex-col items-center"
    >
      {/* Glowing border overlay */}
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          maskImage,
          WebkitMaskImage: maskImage,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <h3 className="mt-2 font-bold text-2xl">{title}</h3>
      <p className="text-4xl font-extrabold mt-2">{price}</p>
      <p className="mt-3 text-white/70 max-w-xs">{description}</p>

      <ul className="mt-6 space-y-2 flex flex-col items-center">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-center gap-2">
            ✅ <span>{perk}</span>
          </li>
        ))}
      </ul>

      <button
        className="mt-6 bg-white text-black py-2 px-4 rounded-lg font-medium hover:bg-gray-200"
        onClick={() => window.open("https://wa.me/9517925660", "_blank")}
      >
        Save your spot
      </button>
    </div>
  );
};
