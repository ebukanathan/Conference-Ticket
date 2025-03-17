import React, { useState } from "react";
import broken from "./assets/images/pattern-lines.svg";
import downspiral from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import upspiral from "./assets/images/pattern-squiggly-line-top.svg";
import logo from "./assets/images/logo-full.svg";

function Submitted({ images, inputs, random }) {
  return (
    <>
      <div className=" h-[100%] relative  bg-[url('./assets/images/background-desktop.png')] bg-cover bg-center bg-no-repeat">
        <img src={broken} alt="broken pattern" />
        <img src={upspiral} alt="" className="absolute top-0 right-0" />
        <img src={downspiral} alt="" className="absolute left-0 bottom-0" />
        <div className=" absolute inset-x-7 top-0 flex flex-col text-white  gap-5 justify-center items-center w-full mx-auto p-5 ">
          <img src={logo} alt="" />
          <div className="text-6xl text-bold text-center capitalize ">
            congrats {inputs.fullName} your ticket is ready
          </div>
          <p className="text-sm">we ve emailed your ticket to {inputs.email}</p>
          <div className="bg-[url('./assets/images/pattern-ticket.svg')] bg-no-repeat p-8 w-1/2 h-[50vh]  text-white">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-20 items-center justify-evenly">
                <div className="">
                  <img src={logo} alt="" />
                  <p className="pl-12">date</p>
                </div>
                <div className="flex gap-3">
                  <img src={images} alt="" className="object-cover w-[40px]" />
                  <div className="flex flex-col">
                    <div className="">{inputs.fullName}</div>
                    <p>{inputs.github}</p>
                  </div>
                </div>
              </div>
              <div className="rotate-90 mt-8">{random}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Submitted;
