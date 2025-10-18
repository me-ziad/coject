import React from "react";
import "../../index.css";
import TitleSection from "../../Component/titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import Header from "../../Component/Header/Header";
import {AreaChart, BarChart, Boxes, Calendar, Cog, Edit3, File, FileText,LineChart, Link, Mail, Phone, PieChart, RefreshCw, Settings, Users,Download, TreePine, MessagesSquare, Send, Clock, Bell} from "lucide-react";
import { motion } from "framer-motion";

export default function Broducts() {
  const { t } = useTranslation();

  const productss = [
    { icon: <AreaChart size={60} className="text-[#3190E7] mb-6" />, title: t("Electronic") },
    { icon: <BarChart size={60} className="text-[#3190E7] mb-6" />, title: t("Work") },
    { icon: <LineChart size={60} className="text-[#3190E7] mb-6" />, title: t("Abstract") },
    { icon: <PieChart size={60} className="text-[#3190E7] mb-6" />, title: t("Electronics") },
    { icon: <BarChart size={60} className="text-[#3190E7] mb-6" />, title: t("ERP") },
    { icon: <LineChart size={60} className="text-[#3190E7] mb-6" />, title: t("Reporting") },
    { icon: <AreaChart size={60} className="text-[#3190E7] mb-6" />, title: t("Investment") },
    { icon: <Mail size={60} className="text-[#3190E7] mb-6" />, title: t("Email") },
    { icon: <Phone size={60} className="text-[#3190E7] mb-6" />, title: t("Administrative") },
    { icon: <Link size={60} className="text-[#3190E7] mb-6" />, title: t("Electronicss") },
    { icon: <Calendar size={60} className="text-[#3190E7] mb-6" />, title: t("Attendance") },
    { icon: <File size={60} className="text-[#3190E7] mb-6" />, title: t("Point") },
    { icon: <Users size={60} className="text-[#3190E7] mb-6" />, title: t("Human") },
    { icon: <FileText size={60} className="text-[#3190E7] mb-6" />, title: t("Financial") },
    { icon: <Boxes size={60} className="text-[#3190E7] mb-6" />, title: t("Warehouse") },
    { icon: <Edit3 size={60} className="text-[#3190E7] mb-6" />, title: t("Investigation") },
    { icon: <BarChart size={60} className="text-[#3190E7] mb-6" />, title: t("Performances") },
    { icon: <Cog size={60} className="text-[#3190E7] mb-6" />, title: t("Project") },
    { icon: <RefreshCw size={60} className="text-[#3190E7] mb-6" />, title: t("Vehicle") },
    { icon: <Settings size={60} className="text-[#3190E7] mb-6" />, title: t("Maintenancesystem") },
    { icon: <Download size={60} className="text-[#3190E7] mb-6" />, title: t("sElectronic") },
    { icon: <TreePine size={60} className="text-[#3190E7] mb-6" />, title: t("Land") },
    { icon: <FileText size={60} className="text-[#3190E7] mb-6" />, title: t("Reportsss") },
    { icon: <MessagesSquare size={60} className="text-[#3190E7] mb-6" />, title: t("Meeting") },
    { icon: <Send size={60} className="text-[#3190E7] mb-6" />, title: t("arguments") },
    { icon: <Download size={60} className="text-[#3190E7] mb-6" />, title: t("Tendering") },
    { icon: <Clock size={60} className="text-[#3190E7] mb-6" />, title: t("Appointment") },
    { icon: <Users size={60} className="text-[#3190E7] mb-6" />, title: t("Medical") },
    { icon: <Bell size={60} className="text-[#3190E7] mb-6" />, title: t("Task") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,  
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <>
      <Header
        title={t("Products")}
        role={t("Home")}
        description={t("Products")}
      />

      <TitleSection title1={t("Products")} />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-3 md:px-40 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {productss.map((product, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-white rounded-lg py-8 flex flex-col items-center shadow-xl"
          >
            {product.icon}
            <h3 className="text-[16px] font-medium text-[#808080] mb-4 text-center">
              {product.title}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
