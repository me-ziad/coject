import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("up");
  const [showFlash, setShowFlash] = useState(false);
  const containerRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const slides = [
    {
      title: t("CustomSystemsDevelopment"),
      text: t("AtAkwad"),
    },
    {
      title: t("Cojectplatform"),
      text: t("integratedtechnology"),
    },
    {
      title: t("ITOperationsandMaintenance"),
      text: t("Akoudprovides"),
    },
  ];
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const slideLinks = ["/Softwaredevelpment","https://coject.com/","/TechnicalSupport",];

  useEffect(() => {
    const timer = setTimeout(() => {
      triggerSlide("up", (current + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const triggerSlide = (dir, nextIndex) => {
    setShowFlash(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(nextIndex);
      setShowFlash(false);
    }, 300);
  };

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 3) {
      triggerSlide("left", (current - 1 + slides.length) % slides.length);
    } else if (x > (rect.width * 2) / 3) {
      triggerSlide("right", (current + 1) % slides.length);
    }
  };

  const variants = {
    up: {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -50, opacity: 0 },
    },
    down: {
      initial: { y: -50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: 50, opacity: 0 },
    },
    left: {
      initial: { x: 100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: -100, opacity: 0 },
    },
    right: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 },
    },
  };

  //The button opens the appropriate link
  const handleButtonClick = () => {
    const link = slideLinks[current];
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <section
      ref={containerRef}
      onClick={handleMouseMove}
      className="relative w-full h-screen backHero text-white flex items-center justify-center overflow-hidden pt-[100px] select-none"
      style={{
        cursor: "pointer",
      }}
    >
      {/* Geometric background */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-cover bg-center opacity-10 pointer-events-none z-0" />

      {/* Flash */}
      {showFlash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-white z-40 pointer-events-none"
        />
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={variants[direction].initial}
            animate={variants[direction].animate}
            exit={variants[direction].exit}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl sm:text-5xl font-medium mb-9">
              {slides[current].title}
            </h1>
            <p className="text-sm sm:text-lg leading-relaxed">
              {slides[current].text}
            </p>

            <button
              onClick={handleButtonClick}
              className="mt-6 bg-green-400 uppercase cursor-pointer hover:bg-green-600 text-white px-6 py-2 rounded"
            >
              {t("Moreinformation")}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleNavClick();
              triggerSlide(index > current ? "right" : "left", index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              current === index ? "bg-green-400 scale-170" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
