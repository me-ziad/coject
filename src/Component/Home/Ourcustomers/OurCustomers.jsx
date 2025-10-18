import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./swipere-custom.css";
import { useTranslation } from "react-i18next";
import logo1 from "../../../assets/clintImage/البكيرية.png";
import logo2 from "../../../assets/clintImage/المخواة.png";
import logo3 from "../../../assets/clintImage/امارة الباحة.png";
import logo4 from "../../../assets/clintImage/بلجرشي.png";
import logo5 from "../../../assets/clintImage/شعار_وزارة_الشؤون_البلدية.png";
import logo6 from "../../../assets/clintImage/عسير.png";
import logo7 from "../../../assets/clintImage/عنيزة.png";
import logo8 from "../../../assets/clintImage/معشوقة.png";

const OurCustomers = () => {
  const [isRTL, setIsRTL] = useState(document.dir === "rtl");
  const { t } = useTranslation();

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

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  return (
    <section className="w-full bg-white py-10 px-6 md:px-20 lg:px-40 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-8 headerSection">
        {t("Ourcustomers")}
      </h2>

      <div className="max-w-[1400px] mx-auto px-4 relative pb-10">
        <Swiper
          key={isRTL ? "rtl" : "ltr"}
          dir={isRTL ? "rtl" : "ltr"}
          modules={[Pagination, Autoplay]}
          slidesPerView={5}
          spaceBetween={40}
          loop={true}
          speed={800}
          autoplay={{
            delay: 1500, // يوقف 2.5 ثانية قبل ما ينتقل
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="logos-swiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`logo-${index}`}
                className="w-15 h-15 object-contain bg-white border border-gray-200 hover:scale-105 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurCustomers;
