"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

import helixImage from "@/assets/images/helix2.png";
import emojiStarImage from "@/assets/images/emojistar.png";

const GOOGLE_SCRIPT_URL ="https://script.google.com/macros/s/AKfycbwtkv5GdJ4Ff--j9_fvNXYsUl2ZaRJ8K_PUT4n0GDuQNrtcirYvRx83L1atuQLR2aBB/exec";

const CallToAction = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);
  setFeedback("");

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: new URLSearchParams(formData).toString(),
    });

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }

    let result;
    try {
      result = await response.json();
    } catch {
      // fallback if response is not JSON
      setFeedback("Message sent! (no JSON response)");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      return;
    }

    if (result.result === "success") {
      setFeedback("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setFeedback("Failed to send message. Please try again.");
      console.error("Error from Google Script:", result);
    }
  } catch (error) {
    setFeedback("An error occurred. Please check the console.");
    console.error("Fetch error:", error);
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 text-center"
    >
      <div className="container max-w-xl mx-auto relative">
        <motion.div style={{ translateY }}>
          <Image
            src={helixImage}
            alt=""
            className="absolute top-6 left-[calc(100%+36px)]"
          />
        </motion.div>
        <motion.div style={{ translateY }}>
          <Image
            src={emojiStarImage}
            alt=""
            className="absolute -top-[120px] right-[calc(100%+24px)]"
          />
        </motion.div>

        <h2 className="text-5xl font-bold">Let&apos;s Get In Touch</h2>

        <p className="text-xl text-white/70 mt-5">
          Have a question or a project in mind? Fill out the form below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-4"
          noValidate
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium w-full"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="h-12 bg-white/20 rounded-lg px-5 font-medium w-full"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="bg-white/20 rounded-lg p-5 font-medium resize-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-white text-black h-12 rounded-lg font-bold w-full sm:w-48 mx-auto disabled:bg-gray-400"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {feedback && <p className="mt-4 text-lg">{feedback}</p>}
        </form>
      </div>
    </section>
  );
};

export default CallToAction;