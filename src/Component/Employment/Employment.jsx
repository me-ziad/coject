import React, { useState, useEffect } from "react";
import "../../index.css";
import TitleSection from "../../Component/titleSection/TitleSection";
import { useTranslation } from "react-i18next";
import Header from "../../Component/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Employment() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    email: "",
    phone: "",
    city: "",
    salary: "",
    jobTitle: "",
    nationality: "",
    birthPlace: "",
    birthDate: "",
    maritalStatus: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  // Set direction based on selected language
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  // Validate all form fields
  const validate = () => {
    let tempErrors = {};

    if (!formData.fullName.trim()) tempErrors.fullName = t("errors.fullName");
    if (!formData.nationalId.trim())
      tempErrors.nationalId = t("errors.nationalId");
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      tempErrors.email = t("errors.email");
    if (!/^5\d{8}$/.test(formData.phone)) tempErrors.phone = t("errors.phone");
    if (!formData.city.trim()) tempErrors.city = t("errors.city");
    if (!formData.salary.trim()) tempErrors.salary = t("errors.salary");
    if (!formData.jobTitle.trim())
      tempErrors.jobTitle = t("errors.jobTitle");
    if (!formData.nationality.trim())
      tempErrors.nationality = t("errors.nationality");
    if (!formData.birthPlace.trim())
      tempErrors.birthPlace = t("errors.birthPlace");
    if (!formData.birthDate.trim())
      tempErrors.birthDate = t("errors.birthDate");
    if (!formData.address.trim()) tempErrors.address = t("errors.address");
    if (!formData.maritalStatus)
      tempErrors.maritalStatus = t("errors.maritalStatus");

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle input changes and remove errors immediately when user edits
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove specific field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      toast.success(t("success"), { position: "top-center" });

      // Reset form fields after successful submission
      setFormData({
        fullName: "",
        nationalId: "",
        email: "",
        phone: "",
        city: "",
        salary: "",
        jobTitle: "",
        nationality: "",
        birthPlace: "",
        birthDate: "",
        maritalStatus: "",
        address: "",
      });

      setErrors({});
    }
  };

  // Input field base style
  const baseStyle =
    "w-full border border-[#7e7e7eb6] rounded-sm p-2 focus:outline-none focus:border-[#3190E7] text-[#7e7e7eb6] placeholder-[#666] transition-colors duration-200";

  return (
    <>
      {/* Page Header */}
      <Header
        title={t("Employment")}
        role={t("Home")}
        description={t("Employment")}
      />

      {/* Section Title */}
      <TitleSection title2={t("Employment")} />

      {/* Employment Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto mt-10 p-6 sm:p-8 bg-white shadow-lg rounded-2xl"
        dir={direction}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("fullName")}
            </label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName}</p>
            )}
          </div>

          {/* National ID */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("nationalId")}
            </label>
            <input
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.nationalId && (
              <p className="text-red-500 text-sm">{errors.nationalId}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("email")}
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={baseStyle}
              type="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("phone")}
            </label>
            <div className="flex border border-[#7e7e7eb6] rounded-sm focus-within:border-[#3190E7] transition-colors duration-200">
              <span className="px-3 py-2 bg-gray-100 text-[#7e7e7eb6] border-r border-[#7e7e7eb6]">
                +966
              </span>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 outline-none text-[#7e7e7eb6] placeholder-[#666]"
                placeholder="5xxxxxxxx"
                type="text"
              />
            </div>
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("city")}
            </label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          {/* Salary */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("salary")}
            </label>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className={baseStyle}
              type="number"
            />
            {errors.salary && (
              <p className="text-red-500 text-sm">{errors.salary}</p>
            )}
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("jobTitle")}
            </label>
            <input
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.jobTitle && (
              <p className="text-red-500 text-sm">{errors.jobTitle}</p>
            )}
          </div>

          {/* Nationality */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("nationality")}
            </label>
            <input
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.nationality && (
              <p className="text-red-500 text-sm">{errors.nationality}</p>
            )}
          </div>

          {/* Birth Place */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("birthPlace")}
            </label>
            <input
              name="birthPlace"
              value={formData.birthPlace}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.birthPlace && (
              <p className="text-red-500 text-sm">{errors.birthPlace}</p>
            )}
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("birthDate")}
            </label>
            <input
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className={baseStyle}
              type="date"
            />
            {errors.birthDate && (
              <p className="text-red-500 text-sm">{errors.birthDate}</p>
            )}
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("maritalStatus")}
            </label>
            <div className="flex flex-wrap items-center gap-4 mt-1 text-[#7e7e7eb6]">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="married"
                  checked={formData.maritalStatus === "married"}
                  onChange={handleChange}
                />
                {t("married")}
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  name="maritalStatus"
                  value="single"
                  checked={formData.maritalStatus === "single"}
                  onChange={handleChange}
                />
                {t("single")}
              </label>
            </div>
            {errors.maritalStatus && (
              <p className="text-red-500 text-sm">{errors.maritalStatus}</p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-[#7e7e7ef6] text-[16px] mb-1 font-light">
              {t("address")}
            </label>
            <input
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={baseStyle}
              type="text"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="bg-[#3190E7] text-white px-10 py-2 cursor-pointer rounded-md border-[#3190E7] border hover:bg-[#ffffff] hover:text-[#3190E7] transition"
          >
            {t("submit")}
          </button>
        </div>
      </form>

      {/* Toast Notification */}
      <ToastContainer />
    </>
  );
}
