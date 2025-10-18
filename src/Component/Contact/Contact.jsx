import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const direction = isArabic ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  // Card data
  const cards = [
    {id: <MdOutlineMessage />,color: "#979796",title: t("Contactus"),text: t("hereto"),contact: "Info@aait.com.sa",},
    {id: <FaHeart />,color: "#3190E7",title: t("Askfo"),text: t("supports"),contact: "Info@aait.com.sa",},
    {id: <FaLocationDot />,color: "rgb(40,203,117)",title: t("Visitouroffices"),text: t("Qassim"),contact: "+966501532687",},
  ];

  // Movement of the cards
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

  // status and fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const baseStyle =
    "w-full border border-[#7e7e7eb6] rounded-sm p-2 focus:outline-none focus:border-[#3190E7] text-[#7e7e7eb6] transition-colors duration-200";
  //Verify values
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = t("valid_name");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = t("valid_email");
    if (!/^5\d{8}$/.test(formData.phone)) tempErrors.phone = t("valid_phone");
    if (!formData.message.trim()) tempErrors.message = t("valid_message");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success(t("success_message"), { position: "top-center" });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>
      <Header
        title={t("Contactus")}
        role={t("Home")}
        description={t("Contactus")}
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
            key={index}
            variants={cardVariant}
            custom={index}
            className="flex bg-white rounded-lg shadow-lg gap-3 relative overflow-hidden py-12 px-10 w-full max-w-xl mx-auto items-start"
          >
            <div className="flex items-start justify-center w-20">
              <span
                className="text-white text-3xl font-bold px-5 py-2 translate-y-3 rounded-md"
                style={{
                  backgroundColor: card.color,
                  transform: isArabic
                    ? "translate(-10px, -12px)"
                    : "translate(5px, -12px)",
                }}
              >
                {card.id}
              </span>
            </div>

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
              <p className="font-light cursor-pointer hover:text-black text-[16px] text-blue-500 absolute bottom-4 leading-relaxed">
                {card.contact}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Section Send us a message ===== */}
      <section className="bg-white py-16 px-6 sm:px-20 lg:px-40 text-center">
        <h2 className="text-3xl font-medium mb-8  ">
          {t("Send")} <span className="text-blue-500"> {t("usMessage")}</span>
        </h2>
        <div className="h-0.5 m-auto mb-14  w-20 bg-[#2a2a2a29]"></div>

        <form
          onSubmit={handleSubmit}
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-right"
          dir={direction}
        >
          <div className="flex flex-col gap-6">
            {/* the name */}
            <div>
              <label className="block text-[16px] mb-1 font-light">
                {t("Name")} *
              </label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={baseStyle}
                placeholder={t("name_placeholder")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>

            {/* mail */}
            <div>
              <label className="block text-[16px] mb-1 font-light">
                {t("Email")} *
              </label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={baseStyle}
                placeholder={t("email_placeholder")}
                type="email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* mobile */}
            <div>
              <label className="block text-[16px] mb-1 font-light">
                {t("Phone")} *
              </label>
              <div className="flex border border-[#7e7e7eb6] rounded-sm focus-within:border-[#3190E7] transition-colors duration-200">
                <span className="px-3 py-2 bg-gray-100 text-[#7e7e7eb6] border-r border-[#7e7e7eb6]">
                  +966
                </span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 outline-none text-[#7e7e7eb6]"
                  placeholder="5xxxxxxxx"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          {/* The message */}
          <div>
            <label className="block text-[16px] mb-1 font-light">
              {t("Message")} *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${baseStyle} h-58 resize-none`}
              placeholder={t("message_placeholder")}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
        </form>

        {/* Submit button */}
        <div className="mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#3190E7] text-white px-10 py-2 cursor-pointer rounded-md border border-[#3190E7] hover:bg-white hover:text-[#3190E7] transition"
          >
            {t("SendBtn")}
          </button>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
}
