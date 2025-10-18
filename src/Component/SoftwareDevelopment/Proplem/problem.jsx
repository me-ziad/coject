// src/components/QuickOverview.jsx
import React from "react";
import Header from "../../Header/Header";
import TitleSection from "../../titleSection/TitleSection";
import { useTranslation } from "react-i18next";

export default function Problem() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Header
        title={t("Commonproblems")}
        role={t("service")}
        description={t("Commonproblems")}
      ></Header>

      <TitleSection
        title1={t("Common")}
        title2={t("problemssection")}
        discription={t("Areyoufacing")}
      />
      <section
        dir={i18n.language === "ar" ? "rtl" : "ltr"}
        className="shadow-2xl lg:w-fit mx-auto text-[#808080] px-6 md:px-12 py-10 md:py-16"
      >
        <div className="max-w-5xl mx-auto">
          {/* Quick Overview */}
          <h2 className="text-2xl md:text-3xl font-semibold text-[#808080] mb-6 pb-2 border-b border-gray-200">
            {t("QuickOverview.overviewTitle")}
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            {t("QuickOverview.overviewParagraph")}
          </p>

          {/* Immediate Actions */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.immediateActions.title")}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.immediateActions.list", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Stage 1 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.phase1.title")}
            </h3>
            <p className="mb-2">
              <strong>{t("QuickOverview.objectives")}:</strong>{" "}
              {t("QuickOverview.phase1.objective")}
            </p>
            <p className="mb-2">
              <strong>{t("QuickOverview.tasks")}:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.phase1.tasks", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Stage 2 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.phase2.title")}
            </h3>
            <p className="mb-2">
              <strong>{t("QuickOverview.objectives")}:</strong>{" "}
              {t("QuickOverview.phase2.objective")}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.phase2.tasks", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Stage 3 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.phase3.title")}
            </h3>
            <p className="mb-2">
              <strong>{t("QuickOverview.objectives")}:</strong>{" "}
              {t("QuickOverview.phase3.objective")}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.phase3.tasks", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Stage 4 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.phase4.title")}
            </h3>
            <p className="mb-2">
              <strong>{t("QuickOverview.objectives")}:</strong>{" "}
              {t("QuickOverview.phase4.objective")}
            </p>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.phase4.tasks", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>

          {/* Stage 5 */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">
              {t("QuickOverview.phase5.title")}
            </h3>
            <p className="mb-2">
              <strong>{t("QuickOverview.tasks")}:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2">
              {t("QuickOverview.phase5.tasks", { returnObjects: true }).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
