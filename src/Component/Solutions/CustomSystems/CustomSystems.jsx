import React from "react";
import { motion } from "framer-motion";

import "../../../index.css";
import TitleSection from "../../titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import imageSection2 from "../../../assets/images/services-5-image.png";

import Header from "../../Header/Header";

export default function CustomSystems() {
  const { t } = useTranslation();

  // إعدادات الأنيميشن الموحدة
  const fadeInLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <>
      <Header
        title={t("Custom")}
        role={t("Solutions")}
        description={t("Custom")}
      ></Header>

      <TitleSection title1={t("Custom")} discription={t("Companywork")} />

      {/* === Service Details Section === */}
      <section className="py-16 bg-white text-[#808080] md:px-10 lg:px-30">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16">
          {/* Right Text Section */}
          <motion.div {...fadeInLeft} className="w-full lg:w-1/2  px-5">
            <div className="flex flex-col gap-7 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3v18h18M9 13l3 3L21 7"
                />
              </svg>
              <h2 className="text-2xl md:text-2xl font-medium text-[#808080]">
                {t("Customsystemsdevelopments")}
              </h2>
            </div>
            <ul className="text-sm sm:text-base font-light mb-4 space-y-1 list-disc pr-5">
              <li className="text-lg">{t("Requirementsanalysis")}</li>
              <li className="text-lg">{t("Designanddevelopments")}</li>
              <li className="text-lg"> {t("ntegratingsystems")} </li>
              <li className="text-lg">{t("Applyingquality")}</li>
              <li className="text-lg">{t("Providingongoing")}</li>
            </ul>
            <span className="leading-relaxed mt-5 mb-4 text-sm sm:text-base md:text-md font-light">
              {t("Throughs")}
            </span>
          </motion.div>

          {/* Left Image Section */}
          <motion.div
            {...fadeInRight}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <img
              src={imageSection2}
              alt="software development illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
