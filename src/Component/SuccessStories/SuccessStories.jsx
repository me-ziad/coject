import React from "react";
import "../../index.css";
import TitleSection from "../../Component/titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import Header from "../../Component/Header/Header";
import { LineChart } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessStories() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <>
      <Header
        title={t("Successstories")}
        role={t("Home")}
        description={t("Atkwad")}
      />

      <TitleSection
        title1={t("Successstories")}
        title2={t("Unifying")}
        discription={t("One")}
      />

      {/* === Section 1 === */}
      <motion.div
        dir={isArabic ? "rtl" : "ltr"}
        className="flex flex-col gap-12 mt-20 items-center justify-center bg-[#f7f8fa] py-20 px-6"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* solition */}
        <motion.div
          className="flex flex-col items-start w-full max-w-6xl"
          variants={fadeInUp}
        >
          <div className="flex px-5 items-start gap-4 mb-4">
            <LineChart className="w-10 h-10 text-green-500" />
            <h2 className="text-3xl font-light text-[#808080]">{t("The")}</h2>
          </div>

          <ul
            className={`text-base font-light space-y-2 list-disc list-inside leading-relaxed text-[#808080] ${
              isArabic ? "pr-8 text-right" : "pl-8 text-left"
            }`}
          >
            <li>{t("Reanalyze")}</li>
            <li>{t("Integratez")}</li>
            <li>{t("Run")}</li>
            <li>{t("Theproject")}</li>
            <li>{t("Linking")}</li>
          </ul>
        </motion.div>

        {/* النتيجة */}
        <motion.div
          className="flex flex-col items-start md:items-end w-full max-w-6xl"
          variants={fadeInUp}
        >
          <div className="flex px-5 text-right md:w-90 lg:w-144 gap-4 mb-4">
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
            <h2 className="text-3xl font-light text-[#808080]">
              {t("Result")}
            </h2>
          </div>

          <ul
            className={`text-base font-light md:w-[50%] space-y-2 list-disc list-inside leading-relaxed text-[#808080] ${
              isArabic ? "pr-8 text-right" : "pl-8 text-left"
            }`}
          >
            <li>{t("Theentity")}</li>
            <li>{t("SuccessStory")}</li>
          </ul>
        </motion.div>
         </motion.div>

      {/* === Section 2 === */}
          <motion.div
            className="flex flex-col gap-8 py-20 w-[79%] m-auto"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-4xl text-center font-medium text-[#808080]">
              {t("Another")}
            </h2>
            <p className="text-[#808080] font-light">{t("Oneof")}</p>
            <ul className="text-base font-light space-y-1 list-disc list-inside leading-relaxed text-[#808080]">
              <li>{t("Difficulty")}</li>
              <li>{t("Delay")}</li>
              <li>{t("Poor")}</li>
            </ul>
          </motion.div>

      {/* === Section 3 === */}
          <motion.div
            dir={isArabic ? "rtl" : "ltr"}
            className="flex flex-col gap-12 items-center justify-center bg-[#f7f8fa] py-20 px-6"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
          >
            {/* الحل */}
            <motion.div
              className="flex flex-col items-start w-full max-w-6xl"
              variants={fadeInUp}
            >
              <div className="flex px-5 items-start gap-4 mb-4">
                <LineChart className="w-10 h-10 text-green-500" />
                <h2 className="text-3xl font-light text-[#808080]">{t("The")}</h2>
              </div>

              <ul
                className={`text-base font-light space-y-2 list-disc list-inside leading-relaxed text-[#808080] ${
                  isArabic ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <li>{t("Rebuilding")}</li>
                <li>{t("Design")}</li>
                <li>{t("Leverage")}</li>
              </ul>
            </motion.div>

            {/* النتيجة */}
            <motion.div
              className="flex flex-col items-start md:items-end w-full max-w-6xl"
              variants={fadeInUp}
            >
              <div className="flex px-5 text-right md:w-90 lg:w-144 gap-4 mb-4">
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
                <h2 className="text-3xl font-light text-[#808080]">
                  {t("Result")}
                </h2>
              </div>

              <ul
                className={`text-base font-light md:w-[50%] space-y-2 list-disc list-inside leading-relaxed text-[#808080] ${
                  isArabic ? "pr-8 text-right" : "pl-8 text-left"
                }`}
              >
                <li>{t("Theclient")}</li>
              </ul>
            </motion.div>
          </motion.div>
    </>
  );
}
