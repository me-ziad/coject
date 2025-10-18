import React from 'react'
import '../../../index.css'
import TitleSection from '../../titleSection/TitleSection'
import { useTranslation } from 'react-i18next'
import Header from '../../Header/Header'
import { motion } from 'framer-motion'

export default function OperationAndMaintenance() {
  const { t } = useTranslation()

  // Aaimation  (Fade In)
  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 1.2, ease: "easeOut" },
    viewport: { once: true, amount: 0.3 },
  }

  return (
    <>
      <Header title={t('Maintenance')} role={t('Solutions')} description={t('ITOperations')} />
    
      <TitleSection title1={t('Maintenance')} />

      {/* === Service Details Section === */}
      <motion.section
        {...fadeIn}
        className="py-16 bg-white text-[#808080]"
      >
        <div className="w-[77%] m-auto px-9 pb-20">
          <p className="leading-relaxed mb-4 text-sm sm:text-base md:text-md font-light">
            {t('Operatingservicesareprovided')}
          </p>
          <p className="leading-relaxed mb-4 text-sm sm:text-base md:text-md font-light">
            {t('Through')}
          </p>
        </div>

        <motion.section
          {...fadeIn}
          className="py-16 bg-[#f5f7fa] text-[#808080] md:px-10 lg:px-30"
        >
          <div className="container flex flex-col px-4 sm:px-8 lg:px-16">
            <div className="w-full px-5">
              <div className="flex flex-col gap-6 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18M9 13l3 3L21 7" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-light text-[#808080]">
                  {t('Operationandmaintenance')}
                </h2>
              </div>

              <ul className="text-sm sm:text-base font-light space-y-1 list-disc pr-5">
                <li>{t('Operationandmanagement')}</li>
                <li>{t('Performancemonitoring')}</li>
                <li>{t('Implementplans')}</li>
                <li>{t('Applysecurity')}</li>
                <li>{t('Providesupport')}</li>
                <li>{t('Preparingreports')}</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.p
          {...fadeIn}
          className="md:px-8 pb-3 w-[80%] mx-auto text-center pt-20 font-light text-2xl"
        >
          {t('through')}
        </motion.p>
      </motion.section>
    </>
  )
}
