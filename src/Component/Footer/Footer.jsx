import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaClock,} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const { i18n, t } = useTranslation();
  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",  
    });
  };

  return (
    <>
      <footer className="bg-[#666] text-[#ccc] text-center md:text-right text-md py-10 mt-10 font-extralight relative">
        {/* top */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-4 
            text-white bg-[#3190E7] font-bold 
            relative md:absolute md:-top-12 
            md:right-1/2 md:translate-x-1/2 
            w-full md:w-[80%] 
            overflow-hidden shadow-lg">
          <div className="flex flex-col items-center justify-center gap-2 py-6 shadow-[-2px_0_8px_0_#2323232d]">
            <FaPhoneAlt size={28} />
            <p>+966501532687</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-6 shadow-[-2px_0_8px_0_#2323232d]">
            <FaEnvelope size={28} />
            <p>Sales@aait.com.sa</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-6 shadow-[-2px_0_8px_0_#2323232d]">
            <FaMapMarkerAlt size={28} />
            <p>{t("KingdomofSaudiArabia")}</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 py-6 shadow-[-2px_0_8px_0_#2323232d]">
            <FaClock size={28} />
            {i18n.language === "ar" ? (
              <p>
                {" "}
                <p> م 06:00 - ص 08:00 </p>{" "}
              </p>
            ) : (
              <p>08:00 AM - 06:00 PM </p>
            )}
          </div>
        </div>

        {/* Middle part */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-13 py-10 md:px-7 lg:px-40 mt-5">
          {/* About codes */}
          <div className="lg:px-5">
            <h3 className="text-[23px] font-medium mb-3">{t("Aboutcodes")}</h3>
            <p className="leading-relaxed">
              {t("Founded")}
              <br />
              {t("Visiontobe")}
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-[23px] font-medium mb-3">{t("Ourservices")}</h3>
            <ul className="space-y-2">
              <li className="border-b-[0.5px] hover:text-white border-[#757575] py-1.5">
                <NavLink onClick={handleNavClick} to={"Infrastructure"}>
                  {t("Infrastructurenetworkservices")}
                </NavLink>
              </li>
              <li className="border-b-[0.5px] hover:text-white border-[#757575] py-1.5">
                <NavLink onClick={handleNavClick} to={"Softwaredevelpment"}>
                  {t("Softwaredevelopmentservices")}
                </NavLink>
              </li>
              <li className="border-b-[0.5px] hover:text-white border-[#757575] py-1.5">
                <NavLink onClick={handleNavClick} to={"TechnicalSupport"}>
                  {t("Technicalsupportservices")}
                </NavLink>
              </li>
              <li className="border-b-[0.5px] hover:text-white border-[#757575] py-1.5">
                <NavLink onClick={handleNavClick} to={"DatabaseServices"}>
                  {t("Databaseservices")}
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink onClick={handleNavClick} to={"SystemsIntegration"}>
                  {t("Systemsconsolidationservices")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Our solutions */}
          <div>
            <h3 className="text-[23px] font-medium mb-3">
              {t("Oursolutions")}
            </h3>
            <ul className="space-y-2">
              <li
                onClick={handleNavClick}
                className="border-b-[0.5px] border-[#757575] py-1.5 hover:text-white"
              >
                <NavLink to={"OperationAndMaintenance"}>
                  {t("ITOperationsandMaintenance")}
                </NavLink>
              </li>
              <li onClick={handleNavClick} className=" hover:text-white">
                <NavLink to={"CustomSystems"}>
                  {t("Customsystemsdevelopment")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-[23px] font-medium mb-3">{t("Subscribe")}</h3>
            <p className="mb-3">
              {" "}
              {t("Subscribetothemailinglisttoreceivethelatestnews")}{" "}
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={t("Enteremail")}
                className="p-2 rounded text-black bg-white text-center"
              />
              <button
                type="submit"
                className="bg-[#28CB75] hover:bg-[#595959] cursor-pointer transition p-2 rounded text-sm font-medium"
              >
                {t("Subscribe")}
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* bottom */}
      <div className="bg-[#525151] text-sm py-4 relative bottom-0 text-center text-gray-300">
        <p>© Copyright AKWAD ARABIA</p>
      </div>
    </>
  );
}
