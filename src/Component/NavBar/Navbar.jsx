import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/akwad.png';
import { MdExpandMore, MdExpandLess, MdMenu, MdClose } from 'react-icons/md';
import HeroSection from '../Home/HeroSection/HeroSection';
import '../../index.css';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [solutions, setSolutions] = useState(false);
  const [language, setLanguage] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // new: state for mobile menu
  const { t, i18n } = useTranslation();

  // Change page direction based on language
  useEffect(() => {
    if (i18n.language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [i18n.language]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight / 2); // activates after 50vh scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsHovered(false);
    setSolutions(false);
    setLanguage(false);
  };

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // or remove if you want instant scroll
    });
    closeMobileMenu(); // also closes the mobile menu
  };

  return (
    <>
      <nav
        style={{
          transform: isScrolled ? 'translateY(0)' : 'translateY(4%)',
          transition: 'transform 0.4s ease-in-out',
        }}
        className={`NavBar bg-white w-full absolute top-0 z-50 sm:px-4 md:px-10 lg:px-40 
          ${!isScrolled ? 'lg:mt-3' : ''}
          sm:py-0 lg:py-6 shadow-md
          ${isScrolled
            ? 'lg:w-full left-0 fixed'
            : 'lg:w-fit lg:left-1/2 lg:-translate-x-1/2'}
        `}
      >
        {/* Mobile Header: logo + hamburger button (visible only on small screens) */}
        <div className="flex items-center justify-between w-full lg:hidden px-4 py-3">
          <NavLink onClick={handleNavClick} to={'/'} className="flex-shrink-0">
            <img src={logo} className="w-20 h-5" alt="logo" />
          </NavLink>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600 hover:text-gray-800 text-4xl cursor-pointer"
          >
            {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop Navigation: stays visible on large screens, hidden on mobile */}
        <ul className="hidden lg:flex justify-center items-center flex-nowrap w-full space-x-8 text-[13px] ">
          {/* Logo */}
          <NavLink
            onClick={handleNavClick}
            to={'/'}
            className="flex-shrink-0 flex justify-center"
          >
            <img src={logo} className="w-20" alt="logo" />
          </NavLink>

          {/* Services dropdown */}
          <li
            className="relative flex-none text-right"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer pr-1">
              {isHovered ? (
                <MdExpandLess className="text-gray-600 text-base cursor-pointer" />
              ) : (
                <MdExpandMore className="text-gray-600 text-base cursor-pointer" />
              )}
              <span className="cursor-pointer">{t('Services')}</span>
            </div>

            <div
              className={`absolute ${
                i18n.language === 'ar'
                  ? 'right-0 text-right'
                  : 'left-0 text-left'
              } 
              top-full mt-2 bg-white rounded-md w-64 z-50 transition-all duration-300 transform origin-top ${
                isHovered
                  ? 'scale-y-100 opacity-100 visible'
                  : 'scale-y-0 opacity-0 invisible'
              }`}
            >
              <ul className="divide-y divide-gray-200 lg:mt-4">
                <li>
                  <NavLink
                    to={'/Softwaredevelpment'}
                    onClick={handleNavClick}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    {t('Softwaredevelopmentservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'Infrastructure'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Infrastructurenetworkservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'/Cybersecurity'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Cybersecurity')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'SystemsIntegration'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Systemsconsolidationservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'TechnicalSupport'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Technicalsupportservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'DatabaseServices'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Databaseservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'TechnicalConsulting'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Technicalconsultingservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'CloudComputing'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Cloudcomputingservices')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'DataAnalytics'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Analyticsanddataservices')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* Solutions dropdown */}
          <li
            className="relative flex-none text-right"
            onMouseEnter={() => setSolutions(true)}
            onMouseLeave={() => setSolutions(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer pr-1">
              {solutions ? (
                <MdExpandLess className="text-gray-600 text-base" />
              ) : (
                <MdExpandMore className="text-gray-600 text-base" />
              )}
              <span>{t('Solutions')}</span>
            </div>
            <div
              className={`absolute ${
                i18n.language === 'ar'
                  ? 'right-0 text-right'
                  : 'left-0 text-left'
              }
              top-full mt-2 bg-white rounded-md w-64 z-50 transition-all duration-300 transform origin-top ${
                solutions
                  ? 'scale-y-100 opacity-100 visible'
                  : 'scale-y-0 opacity-0 invisible'
              }`}
            >
              <ul className="divide-y divide-gray-200 lg:mt-4">
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'OperationAndMaintenance'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('ITOperations')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={handleNavClick}
                    to={'CustomSystems'}
                    className="block px-4 py-3 hover:bg-gray-100 text-[12px] font-medium text-gray-700"
                  >
                    {t('Custom')}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          {/* Other nav items */}
          <li className="flex-none text-right">
            <NavLink
              onClick={handleNavClick}
              to={'Research'}
              className="block hover:text-gray-700"
            >
              {t('Researchanddevelopment')}
            </NavLink>
          </li>
          <li className="flex-none text-right">
            <NavLink
              onClick={handleNavClick}
              to={'products'}
              className="block hover:text-gray-700"
            >
              {t('Products')}
            </NavLink>
          </li>
          <li className="flex-none text-right">
            <Link
              to="https://coject.com/"
              className="block hover:text-gray-700"
            >
              {t('Coject')}
            </Link>
          </li>
          <li className="flex-none text-right">
            <NavLink
              onClick={handleNavClick}
              to={'Employment'}
              className="block hover:text-gray-700"
            >
              {t('Employment')}
            </NavLink>
          </li>
          <li className="flex-none text-right">
            <NavLink
              onClick={handleNavClick}
              to={'/SuccessStories'}
              className="block hover:text-gray-700"
            >
              {t('Successstories')}
            </NavLink>
          </li>
          <li className="flex-none text-right">
            <NavLink onClick={handleNavClick}
              to={'WhyAkwad'}
              className="block hover:text-gray-700"
            >
              {t('Whyakwad')}
            </NavLink>
          </li>
          <li className="flex-none text-right">
            <NavLink onClick={handleNavClick}
              to={'contact'}
              className="block hover:text-gray-700"
            >
              {t('Contactus')}
            </NavLink>
          </li>

          {/* Language dropdown */}
          <li
            className="relative flex-none text-right"
            onMouseEnter={() => setLanguage(true)}
            onMouseLeave={() => setLanguage(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer pr-1">
              {language ? (
                <MdExpandLess className="text-gray-600 text-base" />
              ) : (
                <MdExpandMore className="text-gray-600 text-base" />
              )}
              <span>{t('language')}</span>
            </div>

            <div
              className={`absolute right-0 top-full mt-2 bg-white rounded-md w-40 text-right z-50 transition-all duration-300 transform origin-top ${
                language
                  ? 'scale-y-100 opacity-100 visible'
                  : 'scale-y-0 opacity-0 invisible'
              }`}
            >
              <ul className="divide-y divide-gray-200">
                <li>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('ar');
                      setLanguage(false);
                    }}
                    className="cursor-pointer w-full text-right block px-4 py-3 hover:bg-gray-100 text-sm font-medium text-gray-700"
                  >
                    العربية
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      i18n.changeLanguage('en');
                      setLanguage(false);
                    }}
                    className="cursor-pointer w-full text-right block px-4 py-3 hover:bg-gray-100 text-sm font-medium text-gray-700"
                  >
                    English
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Mobile Menu: visible only on small screens when hamburger is open */}
          {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40">
            <ul className="flex flex-col w-full py-4 space-y-2 px-4 text-sm">
              {/* الخدمات - مع sub-menu collapsible */}
              <li className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setIsHovered(!isHovered)}
                  className="flex cursor-pointer items-center justify-between w-full text-right text-gray-700 hover:text-gray-900 py-2"
                >
                  <span>{t('Services')}</span>
                  {isHovered ? <MdExpandLess /> : <MdExpandMore />}
                </button>
                {isHovered && (
                  <ul className="mt-2 space-y-1 pl-4 text-xs text-gray-600">
                    <li><NavLink to={'Softwaredevelpment'}   onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900"> {t('Softwaredevelopmentservices')}</NavLink></li>
                    <li><NavLink  to={'Infrastructure'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Infrastructurenetworkservices')} </NavLink></li>
                    <li><NavLink to={'Cybersecurity'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Cybersecurity')}</NavLink></li>
                    <li><NavLink to={'SystemsIntegration'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Systemsconsolidationservices')}</NavLink></li>
                    <li><NavLink to={'TechnicalSupport'}   onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Technicalsupportservices')} </NavLink></li>
                    <li><NavLink to={'DatabaseServices'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900"> {t('Databaseservices')}</NavLink></li>
                    <li><NavLink  to={'TechnicalConsulting'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Technicalconsultingservices')}</NavLink></li>
                    <li><NavLink  to={'CloudComputing'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Cloudcomputingservices')}</NavLink></li>
                    <li><NavLink  to={'DataAnalytics'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900"> {t('Analyticsanddataservices')}</NavLink></li>
                  </ul>
                )}
              </li>

              {/* الحلول - مع sub-menu collapsible */}
              <li className="border-b border-gray-200 pb-2">
                <button
                  onClick={() => setSolutions(!solutions)}
                  className="flex cursor-pointer items-center justify-between w-full text-right text-gray-700 hover:text-gray-900 py-2"
                >
                  <span>{t('Solutions')}</span>
                  {solutions ? <MdExpandLess /> : <MdExpandMore />}
                </button>
                {solutions && (
                  <ul className="mt-2 space-y-1 pl-4 text-xs text-gray-600">
                    <li><NavLink to={'OperationAndMaintenance'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('ITOperations')}</NavLink></li>
                    <li><NavLink  to={'CustomSystems'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-1 hover:text-gray-900">{t('Custom')}</NavLink></li>
                  </ul>
                )}
              </li>

              {/*all*/}
              <li><NavLink to={"/research"} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Researchanddevelopment')}</NavLink></li>
              <li><NavLink to={"/products"} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Products')}</NavLink></li>
              <li><Link to ="https://coject.com/" onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Coject')}</Link></li>
              <li><NavLink  to={'Employment'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Employment')}</NavLink></li>
              <li><NavLink to={'/SuccessStories'}  onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Successstories')}</NavLink></li>
              <li><NavLink to={'WhyAkwad'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Whyakwad')}</NavLink></li>
              <li><NavLink to={'contact'} onClick={()=>{handleNavClick();closeMobileMenu()}} className="block py-2 text-right text-gray-700 hover:text-gray-900 border-b border-gray-200">{t('Contactus')}</NavLink></li>

              {/* اللغة - مع sub-menu collapsible */}
              <li className="border-b border-gray-200  pb-2">
                <button
                  onClick={() => setLanguage(!language)}
                  className="flex cursor-pointer items-center justify-between w-full text-right text-gray-700 hover:text-gray-900 py-2"
                >
                  <span>{t('language')}</span>
                  {language ? <MdExpandLess /> : <MdExpandMore />}
                </button>
                {language && (
                  <ul className="mt-2 space-y-1 pl-4 text-xs text-gray-600">
                    <li>
                      <button
                        onClick={() => {
                          i18n.changeLanguage('ar');
                          closeMobileMenu();
                        }}
                        className="block py-1 text-right hover:text-gray-900 cursor-pointer"
                      >
                        العربية
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          i18n.changeLanguage('en');
                          closeMobileMenu();
                        }}
                        className="block py-1 text-right hover:text-gray-900 cursor-pointer"
                      >
                        English
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
