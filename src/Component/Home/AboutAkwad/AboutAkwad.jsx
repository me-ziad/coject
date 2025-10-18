import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutAkwad() {
  const { i18n, t } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section
      dir={dir}
      className={`w-full py-35 ${
        i18n.language === "ar"
          ? "backSectionAboutAkwad-ar"
          : "backSectionAboutAkwad-en"
      }`}
    >
      <h2 className="text-center headerSection">{t("Aboutcodes")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:px-40">
        <div className="">
        {/* The Big Box */}
          <div className="md:col-span-3  bg-[#3190E7] text-white relative rounded md:w-100 p-8 shadow-lg z-40">
            <h4 className="text-xl font-semibold mb-4">{t("Aboutcodes")}</h4>
            <hr className="border-white mb-4" />
            <p className="mb-3">{t("Foundedin")}</p>
            <p className="mb-3">
              <span className="font-semibold">{t("Vision")}</span>
              {t(
                "Tobetheleadingreferencefordevelopingcustomsystemsintheregion"
              )}
            </p>
            <p className="mb-3">
              <span className="font-semibold">{t("message")}</span>
              {t("Continuousmonitoring")}
            </p>
            <p>
              <span className="font-semibold">{t("Value")}</span>{" "}
              {t("Actuallocalizationoftechnology")}
            </p>
            {/* Small boxes */}
            <div
              className={`flex flex-col md:mt-0 bg-[#277ccc] rounded text-white md:absolute md:top-6 z-10 md:w-40
             ${dir === "rtl" ? "md:-left-39" : "md:-right-39"} `}
            >
              <div className="text-center border-b border-[#1773c7] py-3">
                <span className="text-2xl font-extrabold">100</span>{" "}
                <span className="text-[20px]">%</span>
                <p className="mt-2 text-[12px] font-light px-4">
                  {t("Percentageofprojectscopecompletion")}
                </p>
              </div>
              <div className="text-center border-b border-[#1773c7] py-3">
                <span className="text-2xl font-extrabold">60</span>{" "}
                <span className="text-[20px]">%</span>
                <p className="mt-2 text-[12px] font-light px-4">
                  {t("Joblocalizationrate")}
                </p>
              </div>
              <div className="text-center border-b border-[#1773c7] py-3">
                <span className="text-2xl font-extrabold">100</span>{" "}
                <span className="text-[20px]">%</span>
                <p className="mt-2 text-[12px] font-light px-4">
                  {t("Technologylocalizationrate")}
                </p>
              </div>
              <div className="text-center border-b border-[#1773c7] py-3">
                <span className="text-2xl font-extrabold">300</span>{" "}
                <span className="text-[20px]">+</span>
                <p className="mt-2 text-[12px] font-light px-4">
                  {t("Numberofimplementedsystems")}
                </p>
              </div>
            </div>
          </div>
        </div>
   
        <div></div>
      </div>
    </section>
  );
}
