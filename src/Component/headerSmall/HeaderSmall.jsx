import React, { useEffect } from "react";
import TitleSection from "../titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import imageSection2 from "../../../src/assets/images/services-5-image.png";
import imageSection3 from "../../../src/assets/images/services-2-image.png";
import imageSection4 from "../../../src/assets/images/services-3-image.png";
import Header from "../Header/Header";

export default function HeaderSmall({
  details1,
  details2,
  offer1,
  offer2,
  offer3,
  offer4,
  offer5,
  Service1,
  Service2,
  Service3,
  Service4,
  Service5,
  fit,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      {/* === Service Details Section === */}
      <section className="py-16 bg-white text-[#808080] md:px-10 lg:px-30">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16">
          {/* Right Text Section */}
          <div className="w-full lg:w-1/2  px-5">
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
              {details1}
            </p>
            <p className="leading-relaxed mb-4 text-sm sm:text-base md:text-md font-light">
              {details2}
            </p>

            <h3 className="text-lg font-semibold mb-3 text-[#808080]">
              {t("Whatweoffer")}
            </h3>

            <ul className="text-sm sm:text-base font-light space-y-1 list-disc pr-5">
              <li>{offer1}</li>
              <li>{offer2}</li>
              <li> {offer3} </li>
              <li>{offer4}</li>
              <li>{offer5}</li>
            </ul>
          </div>

          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={imageSection2}
              alt="software development illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain drop-shadow-md"
            />
          </div>
        </div>
      </section>

      {/* === Service Features Section === */}
      <section className="py-16 bg-[#f5f7fa] text-[#808080] md:px-10 lg:px-30">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 px-4 sm:px-8 lg:px-16">
          {/* Right Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <img
              src={imageSection3}
              alt="service features illustration"
              className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full h-auto object-contain rounded-2xl "
            />
          </div>

          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 px-5">
            <div className="flex flex-col gap-6 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500 flex-shrink-0 "
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
              <li>{Service1}</li>
              <li>{Service2}</li>
              <li>{Service3}</li>
              <li>{Service4}</li>
              <li>{Service5}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* === Target Audience Section === */}
      <section className="py-20 bg-white text-[#4f4f4f] md:px-10 lg:px-30">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4 sm:px-8 lg:px-16">
          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 px-5">
            <div className="flex flex-col  gap-3 mb-5">
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
              {fit}
            </p>
          </div>

          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <img
              src={imageSection4}
              alt="Target audience illustration"
              className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl h-auto object-contain rounded-3xl "
            />
          </div>
        </div>
      </section>
    </>
  );
}
