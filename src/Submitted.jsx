import React, { useState } from "react";
import broken from "./assets/images/pattern-lines.svg";
import downspiral from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import upspiral from "./assets/images/pattern-squiggly-line-top.svg";
import logo from "./assets/images/logo-full.svg";
import bg from "./assets/images/pattern-ticket.svg";

function Submitted({ images, inputs, random }) {
  return (
    <>
      <div className=" h-[918px] bg-[url('./assets/images/background-desktop.png')] bg-cover bg-center bg-no-repeat md:h-auto">
        <img src={broken} alt="broken pattern" />
        <img src={upspiral} alt="" className="absolute top-0 right-0" />
        <img src={downspiral} alt="" className="absolute left-0 bottom-0" />
        <div className=" absolute inset-x-7 top-0 flex flex-col text-white  gap-5 justify-center items-center w-full mx-auto p-5 ">
          <img src={logo} alt="" />
          <div className="text-6xl text-bold text-center capitalize w-2/3 ">
            congrats {inputs.fullName}
            <span className="lowercase"> your ticket is ready</span>
          </div>
          <p className="text-sm">
            we ve emailed your ticket to{" "}
            <span className="text-red-300 hover:text-white cursor-pointer">
              {inputs.email}
            </span>
          </p>
          <div className=" relative mx-auto bg-cover bg-no-repeat p-2 w-1/2 text-white min-w-1/2 md:w-1/2  ">
            <div className="absolute top-0 left-0 w-[100%]">
              <img src={bg} alt="" className=" w-[100%] h-[100%]" />
            </div>
            <div className=" flex ">
              <div className="flex flex-col gap-5 items-center justify-evenly md:gap-20">
                <div className="w-[200px] bg-red-500">
                  <img src={logo} alt="" className="w-[200px]" />
                  <p className=" pl-3 block md:pl-12 ">March | Tx Houston</p>
                </div>
                <div className="flex gap-3 ml-1">
                  <div className="w-[40px]">
                    <img src={images} alt="" className="object-cover  w-full" />
                  </div>
                  <div className="flex flex-col">
                    <div className="">{inputs.fullName}</div>
                    <p>{inputs.github}</p>
                  </div>
                </div>
              </div>
              <div className="absolute right-14 top-12 rotate-90 mt-8  text-3xl font-semibold">
                {random}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-red-800 w-[300px] mx-auto">
        <div className="text-6xl  ">happy</div>
        <img src={bg} alt="" className="absolute top-0" />
      </div>
    </>
  );
}

export default Submitted;
