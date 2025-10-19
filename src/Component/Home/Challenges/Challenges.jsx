import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

const Challenges = () => {
  const { i18n, t } = useTranslation();

  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  const textAlign = i18n.language === "ar" ? "text-right" : "text-left";
  const bgClass = i18n.language === "ar" ? "backChalenge-ar" : "backChalenge-en";

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",  
    });
  };

  return (
    <section
      className="relative w-full text-[#808080] overflow-hidden min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('https://www.aait.com.sa/images/aboutusbg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition:
          i18n.language === "ar" ? "left center" : "right center",}}>
      <div className="w-full">
        <div dir={dir} className="max-w-7xl mx-auto px-6 py-40">
          <h2 className="text-2xl md:text-4xl mb-7 font-[500] ">
            {t("Areyoufacingthesechallenges")}
          </h2>
          <p className="mb-6  text-2xl md:text-3xl md:w-2/4 font-light">
            {t("Aquickoverviewofthemostimportantchallengesfacingcustomers")}
          </p>
          <ul
            className={`list-disc list-inside ${textAlign} pr-5 space-y-2 leading-relaxed text-sm`}
          >
            <li>{t("Areoutagesandmalfunctionshinderingyourwork")}</li>
            <li>{t("Technicalissuestakingtoolongtoresolve")}</li>
            <li>
              {t(
                "Thereisnoperformancemeasurementoractionplanforthetechnicalteam"
              )}
            </li>
            <li>{t("Problemskeeprecurringandwastealotoftimefortheteam")}</li>
            <li>{t("Needalotoftimetokeepupwithotherpartiesdemands")}</li>
          </ul>
          <NavLink to="problem" onClick={handleNavClick}>
        <button className="mt-8 btn text-white py-2 px-6 rounded transition">
          {t("Thesolutionishere")}
        </button>
      </NavLink>

        </div>
      </div>
    </section>
  );
};

export default Challenges;
