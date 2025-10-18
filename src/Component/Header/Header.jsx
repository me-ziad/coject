import React from "react";
import "../../index.css";

export default function Header({ title, role, description }) {
  return (
    <section className="relative w-full h-[50vh] backHero  bg-[#2D71AF] text-white flex items-center justify-center overflow-hidden pt-[100px] select-none">
      {/* Slider Content */}
      <div className=" z-10 text-center py-20  text-white">
        <h1 className="text-[28px] font-bold mb-4 border-b border-[#a4bcfa39] inline-block pb-6 font-[Tajawal]">
          {title}
        </h1>

        <div className="mt-2 px-20">
          <p className="text-sm sm:text-base opacity-90">
            {role} <span className=" mx-1">/</span> {description}
          </p>
        </div>
      </div>
    </section>
  );
}
