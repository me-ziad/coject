import React from "react";
import "../../index.css";
import { useTranslation } from "react-i18next";
import Header from "../Header/Header";
import TitleSection from "../titleSection/TitleSection";
import { motion } from "framer-motion";

export default function Research() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const cards = [
    { id: 1, color: "#979796", title: t("Use"), text: t("Wearecurrently") },
    { id: 2, color: "#3190E7", title: t("Conduct"), text: t("Keeping") },
    {id: 3,color: "rgb(40,203,117)",title: t("Innovating"),text: t("Transforming"),},
    {id: 4,color: "rgb(40,203,117)",title: t("Aligning"),text: t("Ensure"),},
    { id: 5, color: "#979796", title: t("Develop"), text: t("Increases") },
    {id: 6,color: "#3190E7",title: t("Modeling"),text: t("Developmockups"),},
  ];

  // Preparing the animation for the cards (gradually one after the other)
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <Header
        title={t("Researchcanddevelopment")}
        role={t("Solutions")}
        description={t("Researchanddevelopment")}
      />

      <TitleSection
        title1={t("Research")}
        title2={t("(R&D)")}
        discription={t("AtAkwa")}
      />

      {/* ===== Cards ===== */}
      <motion.div
        className="grid text-[#808080] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-40 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={cardVariant}
            custom={index}
            className="flex bg-white rounded-lg shadow-lg gap-3 overflow-hidden h-50 py-6 px-10 w-full max-w-xl mx-auto items-start"
          >
            {/* Number */}
            <div className="flex items-start justify-center w-20">
              <span
                className="text-white text-3xl font-bold px-5 py-2 translate-y-3 rounded-md"
                style={{
                  backgroundColor: card.color,
                  transform:
                    i18n.language === "ar"
                      ? "translate(-10px, -12px)"
                      : "translate(5px, -12px)",
                }}
              >
                {card.id}
              </span>
            </div>

            {/* text */}
            <div
              className={`flex flex-col justify-start w-full ${
                isArabic ? "pr-6 text-right" : "pl-6 text-left"
              }`}
            >
              <h3 className="font-medium text-md mb-2 uppercase">
                {card.title}
              </h3>
              <p className="font-light text-[14px] leading-relaxed">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Rest of the content ===== */}
      <div
        className={`flex justify-center py-20 px-4 ${
          isArabic ? "text-right" : "text-left"
        }`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        <div
          className={`bg-white shadow-lg rounded-xl max-w-4xl w-full p-10 leading-relaxed ${
            isArabic ? "text-right" : "text-left"
          } text-[#808080]`}
        >
          <h2 className="text-2xl font-medium mb-6">{t("roadmapTitle")}</h2>
          <p className="mb-10 text-[16px] font-light">
            {t("roadmapDescription")}
          </p>

          <h3 className="text-xl font-medium mb-4">
            {t("sectionAchievements")}
          </h3>
          <ul className="space-y-1 font-light mb-8 text-[16px]">
            <li>{t("a1")}</li>
            <li>{t("a2")}</li>
            <li>{t("a3")}</li>
            <li>{t("a4")}</li>
            <li>{t("a5")}</li>
            <li>{t("a6")}</li>
            <li>{t("a7")}</li>
            <li>{t("a8")}</li>
            <li>{t("a9")}</li>
            <li>{t("a10")}</li>
          </ul>

          <div className="bg-[#3190E7] text-white p-6 rounded-lg mb-10 text-center leading-loose text-[17px] font-medium relative">
            <p className="inline-block max-w-4xl relative">
              <span className="text-[#a7a7a7] font-extrabold text-[24px] align-middle">
                “
              </span>
              {t("blueBox")}{" "}
              <a
                href="https://coject.com/"
                className="underline hover:text-gray-100 transition"
                target="_blank"
                rel="noreferrer"
              >
                coject.com
              </a>
              <span className="text-[#a7a7a7] font-extrabold text-[24px] align-middle">
                ”
              </span>
            </p>
          </div>

          <h3 className="text-xl font-medium mb-4">{t("currentProjects")}</h3>
          <ul className="space-y-1 font-light mb-8 text-[16px]">
            <li>{t("p1")}</li>
            <li>{t("p2")}</li>
            <li>{t("p3")}</li>
          </ul>

          <h3 className="text-xl font-medium mb-4">{t("nextStages")}</h3>
          <p className="text-[16px] font-light">{t("nextDescription")}</p>
        </div>
      </div>
    </>
  );
}
