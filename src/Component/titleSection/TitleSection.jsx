import React from "react";

export default function TitleSection({ title1, title2, discription }) {
  return (
    <section>
      <div className=" flex flex-col justify-center items-center mt-20 mb-3 text-center">
        <div className=" text-2xl md:text-4xl font-[500]  text-[#3190E7] ">
          <span className="text-[#808080]">{title1}</span> {title2}
        </div>
        <div className=" text-md w-[80%] font-light text-[#808080] my-6">
          {discription}
        </div>
        <div className=" w-13 bg-[#E3E8EB] h-0.5"></div>
      </div>
    </section>
  );
}
