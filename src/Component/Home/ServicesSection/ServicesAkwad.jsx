import React from "react";
import {MdAccessTime,MdSelfImprovement,MdSupport,MdAssessment,} from "react-icons/md";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function ServicesAkwad() {
  const { t } = useTranslation();

  const handleNavClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // General animation preparation for cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  //Prepare animation for each card
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold headerSection">
          {t("Codesservices")}
        </h2>
      </div>

      {/* Main container for cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-lg p-6 flex flex-col items-center shadow-xl transition duration-300"
        >
          <MdAccessTime className="text-[#3190E7] text-7xl mb-6" />
          <h3 className="font-semibold text-[#808080] mb-4 text-center text-[13px]">
            {t("Systemsconsolidationservices")}
          </h3>
          <NavLink
            onClick={handleNavClick}
            to={"SystemsIntegration"}
            className="btn text-white text-sm px-4 py-1.5 rounded"
          >
            {t("More")}
          </NavLink>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-lg p-6 flex flex-col items-center shadow-xl transition duration-300"
        >
          <MdSelfImprovement className="text-[#3190E7] text-7xl mb-6" />
          <h3 className="text-[13px] font-semibold text-[#808080] mb-4 text-center">
            {t("Technicalconsultingservices")}
          </h3>
          <NavLink
            onClick={handleNavClick}
            to={"TechnicalConsulting"}
            className="btn text-white text-sm px-4 py-1.5 rounded"
          >
            {t("More")}
          </NavLink>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-lg p-6 flex flex-col items-center shadow-xl transition duration-300"
        >
          <MdSupport className="text-[#3190E7] text-7xl mb-6" />
          <h3 className="text-[13px] font-semibold text-[#808080] mb-4 text-center">
            {t("Technicalsupportservices")}
          </h3>
          <NavLink
            onClick={handleNavClick}
            to={"TechnicalSupport"}
            className="btn text-white text-sm px-4 py-1.5 rounded"
          >
            {t("More")}
          </NavLink>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          variants={cardVariants}
          className="bg-white rounded-lg p-6 flex flex-col items-center shadow-xl transition duration-300"
        >
          <MdAssessment className="text-[#3190E7] text-7xl mb-6" />
          <h3 className="text-[13px] font-semibold text-[#808080] mb-4 text-center">
            {t("Softwaredevelopmentservices")}
          </h3>
          <NavLink
            onClick={handleNavClick}
            to={"Softwaredevelpment"}
            className="btn text-white text-sm px-4 py-1.5 rounded"
          >
            {t("More")}
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
