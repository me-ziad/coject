import React from "react";
import "../../index.css";
import { useTranslation } from "react-i18next";
import Header from "../../Component/Header/Header";
import {
  MessageSquare,
  Layers,
  BadgeCheck,
  Lightbulb,
  Building2,
  ShieldCheck,
} from "lucide-react";

export default function Whyakwad() {
  const { t } = useTranslation();
  const features = [
    {icon: <MessageSquare className="w-13 h-13 text-[#3190E7]" />,title: t("Continuous"),description: t("Weprovides"),},
    {icon: <Layers className="w-13 h-13 text-[#3190E7]" />,title: t("Customx"),description: t("Wedesign")},
    {icon: <BadgeCheck className="w-13 h-13 text-[#3190E7]" />,title: t("Deep"),description: t("Wehave"),},
    {icon: <Lightbulb className="w-13 h-13 text-[#3190E7]" />,title: t("Global"),description: t("Weadhere"),},
    {icon: <Building2 className="w-13 h-13 text-[#3190E7]" />,title: t("Speed"),description: t("Wearecommitted"),},
  ];

  return (
    <>
      <Header
        title={t("Whyakwad")}
        role={t("Home")}
        description={t("Whyakwad")}
      />

      <section className="bg-white py-20 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* text */}
          <div className="w-full lg:w-1/2 text-right">
            <div className="max-w-[600px] m-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold text-[#555] mb-4 leading-snug">
                <span className="text-[#3190E7] font-medium">
                  <span className="text-[#808080]">{t("Why")}</span>{" "}
                  {t("codes")}
                </span>
              </h2>

              <p className="mb-3 font-medium text-[16px] sm:text-[17px] leading-relaxed">
                {t("Weare")}
              </p>

              <p className="font-light text-[16px] sm:text-[17px] leading-relaxed">
                {t("Akwads")}
              </p>

              <div className="bg-[#3190E7] text-white font-medium text-center rounded-md p-8 shadow-md w-full mt-10">
                <p className="text-lg sm:text-xl leading-relaxed">
                  <span className="text-3xl text-[#bababa]">❞</span>
                  {t("Ourvalues")}
                  <br />
                  {t("Trust")}
                  <br />
                  {t("Fulfilling")}
                  <span className="text-3xl text-[#bababa]">❝</span>
                </p>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="bg-white rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.1)] p-4 w-full max-w-[530px]">
              <img
                src="https://www.aait.com.sa/images/whyAkwad.jpg"
                alt="Akwad"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F5F7] py-20 px-6 md:px-12 overflow-x-hidden">
        <div className="max-w-screen-xl mx-auto text-right">
          <h2 className="text-3xl sm:text-3xl font-medium mb-12">
            {t("distinguishes")}
          </h2>

          <div className="flex justify-center items-center gap-8 flex-wrap">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" p-6 flex flex-col justify-center items-center lg:w-[30%] text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-md font-medium mb-2 mt-5">
                  {feature.title}
                </h3>
                <p className="text-[16px] font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className=" shadow-2xl md:w-[75%] mx-auto my-20 text-center py-20">
        <div className="flex flex-col justify-center items-center gap-7 px-10">
          <h3 className=" font-medium text-[#666]  text-[34px] ">
            {t("partnership")}
          </h3>
          <div className="h-0.5 w-20 bg-[#66666691]"></div>
          <p className="text-[18px] font-light">{t("When")}</p>
        </div>
      </div>
    </>
  );
}
