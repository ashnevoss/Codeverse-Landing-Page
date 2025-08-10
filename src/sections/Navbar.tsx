"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@/assets/icons/menu.svg";
import logoImage from "@/assets/images/logosaas.png";
import { ContactButton } from "./Buttons";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-4 bg-black">
      <div className="px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative w-36 h-12">
            <Image
              src={logoImage}
              alt="Saas logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="border border-white border-opacity-30 w-10 h-10 inline-flex justify-center items-center rounded-lg md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Inline close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <MenuIcon className="text-white w-6 h-6" />
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="text-white/60 items-center gap-6 hidden md:flex">
            <a href="#pricing-area" className="hover:text-white transition duration-300">
              Pricing
            </a>
            <a href="#product-showcase" className="hover:text-white transition duration-300">
              About Us
            </a>
            <a href="#faqs" className="hover:text-white transition duration-300">
              FAQ&apos;s
            </a>
            <ContactButton />
          </nav>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="flex flex-col mt-4 space-y-4 text-white/60">
                <a
                  href="#pricing-area"
                  className="hover:text-white transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="#product-showcase"
                  className="hover:text-white transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </a>
                <a
                  href="#faqs"
                  className="hover:text-white transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  FAQ&apos;s
                </a>
                <ContactButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
