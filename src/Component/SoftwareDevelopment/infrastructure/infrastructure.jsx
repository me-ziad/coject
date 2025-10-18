import React from "react";
import "../../../index.css";
import TitleSection from "../../titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import imageSection2 from "../../../assets/images/services-5-image.png";
import imageSection3 from "../../../assets/images/services-2-image.png";
import imageSection4 from "../../../assets/images/services-3-image.png";
import Header from "../../Header/Header";
import { motion } from "framer-motion";

export default function Infrastructure() {
  const { t } = useTranslation();

  // Unified animation settings
  const fadeUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const fadeLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  const fadeRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  };

  return (
    <>
      <Header
        title={t("InfrastructureandNetworkService")}
        role={t("service")}
        description={t("InfrastructureandNetworkService")}
      />

      <TitleSection
        title1={t("Infrastructure")}
        title2={t("andnetworks")}
        discription={t("Webuildandmanage")}
      />

      {/* === Service Details Section === */}
      <motion.section
        {...fadeUp}
        className="py-16 bg-white text-[#808080] md:px-10 lg:px-30"
      >
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16">
          {/* Right Text Section */}
          <motion.div {...fadeLeft} className="w-full lg:w-1/2 px-5">
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
              <h2 className="text-2xl md:text-3xl font-light text-[#808080]">
                {t("Servicedetails")}
              </h2>
            </div>

            <p className="leading-relaxed mb-4 text-sm sm:text-base md:text-md font-light">
              {t("Networkinfrastructure")}
            </p>

            <h3 className="text-lg font-semibold mb-3 text-[#808080]">
              {t("Whatweoffer")}
            </h3>

            <ul className="text-sm sm:text-base font-light space-y-1 list-disc pr-5">
              <li>{t("Networkdesignandimplementation")}</li>
              <li>{t("ServersManagement")}</li>
              <li>{t("Cloudcomputing")}</li>
              <li>{t("Buildingandmanagingdatacenters")}</li>
            </ul>
          </motion.div>

          {/* Left Image Section */}
          <motion.div
            {...fadeRight}
            className="w-full lg:w-1/2 flex justify-center items-center"
          >
            <img
              src={imageSection2}
              alt="software development illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain drop-shadow-md"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* === Service Features Section === */}
      <motion.section
        {...fadeUp}
        className="py-16 bg-[#f5f7fa] text-[#808080] md:px-10 lg:px-30"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-4 sm:px-8 lg:px-16">
          {/* Right Image Section */}
          <motion.div
            {...fadeLeft}
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            <img
              src={imageSection3}
              alt="service features illustration"
              className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-2xl"
            />
          </motion.div>

          {/* Left Text Section */}
          <motion.div {...fadeRight} className="w-full lg:w-1/2 px-5">
            <div className="flex flex-col gap-6 mb-4">
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
              <h2 className="text-2xl md:text-3xl font-light text-[#808080]">
                {t("Servicefeatures")}
              </h2>
            </div>

            <ul className="text-sm sm:text-base font-light space-y-1 list-disc pr-5">
              <li>{t("Highstabilityofnetworksandsystems")}</li>
              <li>
                {t("Flexiblereadinesstoexpandaccordingtotheorganizationneeds")}
              </li>
              <li>{t("Advancedinfrastructureprotectionndecurity")}</li>
              <li>{t("Continuoussupportandcontinuity")}</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* === Target Audience Section === */}
      <motion.section
        {...fadeUp}
        className="py-20 bg-white text-[#4f4f4f] md:px-10 lg:px-30"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16">
          {/* Right Text Section */}
          <motion.div {...fadeLeft} className="w-full lg:w-1/2 px-5">
            <div className="flex flex-col gap-3 mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <h2 className="text-2xl md:text-3xl font-light text-[#808080]">
                {t("Whoisthisservicesuitablefor")}
              </h2>
            </div>

            <p className="leading-relaxed text-sm sm:text-base font-light md:text-md text-gray-600">
              {t("Weservegovernment")}
            </p>
          </motion.div>

          {/* Left Image Section */}
          <motion.div
            {...fadeRight}
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            <img
              src={imageSection4}
              alt="Target audience illustration"
              className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain rounded-3xl"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
