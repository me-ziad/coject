import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}

      style={{
        position: "fixed",
        bottom: "1.25rem",  
        [isArabic ? "right" : "left"]: "1.25rem",  
        zIndex: 9999,
      }}
      className={`p-3 rounded-full bg-[#3190E7] cursor-pointer  text-white shadow-lg transition-all duration-300 hover:bg-[#20496f] ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
