import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../interestSystems/swiper-custom.css";
import image1 from "../../../assets/images/1.png";
import erp from "../../../assets/images/ERP.png";
import extract from "../../../assets/images/extract.png";
import workflow from "../../../assets/images/workfloww.png";
import archive from "../../../assets/images/archive.png";
import { useTranslation } from "react-i18next";

const InterestSystems = () => {
  const [isRTL, setIsRTL] = useState(document.dir === "rtl");
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const observer = new MutationObserver(() =>
      setIsRTL(document.dir === "rtl")
    );
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["dir"],
    });
    return () => observer.disconnect();
  }, []);

  const items = [
    { title: t("ElectronicPortal"), image: image1 },
    { title: "ERP", image: erp },
    { title: t("AbstractManagement"), image: extract },
    { title: t("Workflow"), image: workflow },
    { title: t("Electronicarchiving"), image: archive },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white py-7   overflow-hidden">
      <h2 className="text-center headerSection">{t("system")}</h2>

      <div className="max-w-[1600px] mx-auto px-4 relative pb-24">
        <Swiper
          key={isRTL ? "rtl" : "ltr"}
          dir={isRTL ? "rtl" : "ltr"}
          modules={[Pagination, Autoplay]}
          centeredSlides
          loop
          spaceBetween={40}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 3, spaceBetween: 60 },
            1800: { slidesPerView: 3, spaceBetween: 80 },
          }}
          className="interest-swiper cursor-pointer"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              {({ isActive }) => (
                <div
                  className={`flex relative flex-col items-center justify-center text-center transition-all duration-500 h-[180px] w-[370px] mx-auto ${
                    isActive
                      ? "bg-white scale-110 shadow-2xl opacity-100 z-20"
                      : "bg-gray-50 scale-95 opacity-60 z-10"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-16 h-16 mb-6 object-contain transition-all duration-300 ${
                      isActive ? "opacity-100 scale-105" : "opacity-70 scale-90"
                    }`}
                  />

                  <h3
                    className={`text-md font-light ${
                      isActive ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* <button
                    className={`px-7 py-2 rounded-xl text-sm font-extralight transition-all duration-300 absolute top-[90%] ${
                      isActive
                        ? "bg-[#3190E7] text-white shadow-md"
                        : "bg-blue-100 text-blue-300"
                    }`}
                  >
                    {t("More")}
                  </button> */}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default InterestSystems;
