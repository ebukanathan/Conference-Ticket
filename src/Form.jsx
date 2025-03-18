import React, { useState } from "react";
import broken from "./assets/images/pattern-lines.svg";
import downspiral from "./assets/images/pattern-squiggly-line-bottom-desktop.svg";
import upspiral from "./assets/images/pattern-squiggly-line-top.svg";
import logo from "./assets/images/logo-full.svg";
import iconupload from "./assets/images/icon-upload.svg";
import iconinfo from "./assets/images/icon-info.svg";

function Form({
  handleFiles,
  handleChange,
  inputs,
  handleSubmit,
  images,
  setImages,
  handleImageChange,
  error,
}) {
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  return (
    <>
      <div className=" h-[100%] relative  bg-[url('./assets/images/background-desktop.png')] bg-cover bg-center bg-no-repeat">
        <img src={broken} alt="broken pattern" />
        <img src={upspiral} alt="" className="absolute top-0 right-0" />
        <img src={downspiral} alt="" className="absolute left-0 bottom-0" />
        <div className=" absolute inset-x-7 top-0 flex flex-col text-white  gap-5 justify-center items-center w-full mx-auto p-5 ">
          <img src={logo} alt="" />
          <div className="text-6xl text-bold text-center capitalize ">
            Your journey to coding conf<br></br> 2025 starts here
          </div>
          <p className="text-sm">
            secure your spot at next year's biggest coding conference
          </p>
          <div className="flex flex-col justify-center items-center p-6 border-2  border-dashed border-gray-400 w-2/3  max-w-lg mx-auto ">
            {images ? (
              <div className="flex flex-col justify-center gap-2 items-center ">
                <img src={images} alt="" className="object-cover w-[100px]" />
                <div className="flex gap-2">
                  <button
                    className="p-1 rounded-sm bg-red-400"
                    onClick={() => setImages("")}
                  >
                    remove
                  </button>
                  <button className="p-1 rounded-sm bg-red-400">change</button>
                </div>
              </div>
            ) : (
              <div className="">
                <div className=" m-2 w-1/3 mx-auto bg-slate-500 rounded-md border-2 border-zinc-50 hover:bg-slate-300">
                  <img src={iconupload} alt="" className="mx-auto w-1/2" />
                </div>
                <div
                  className={`w-full p-6 text-center transition-all duration-300 ${
                    dragActive ? "bg-gray-200" : "bg-white"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleFiles}
                >
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    id="fileInput"
                    onChange={handleImageChange}
                  />
                  <label
                    htmlFor="fileInput"
                    className="cursor-pointer text-gray-600 hover:text-gray-800"
                  >
                    Drag & Drop images here or
                    <span className="text-blue-500 underline">
                      click to upload
                    </span>
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    Max file size: 500KB
                  </p>
                </div>
              </div>
            )}
          </div>
          {error && (
            <p className=" text-sm flex gap-2 items-center text-left">
              <img src={iconinfo} alt="" />{" "}
              <span>please enter a valid email address</span>
            </p>
          )}
          <form action="" onSubmit={handleSubmit} className="w-2/3">
            <div className="flex flex-col justify-start w-2/3 mx-auto mb-6">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                type="text"
                className="h-10 opacity-20 rounded-lg p-3 text-orange-700"
                name="fullName"
                value={inputs.fullName}
                onChange={handleChange}
              />
              {error.fullName && (
                <p className=" text-sm flex gap-2 items-center text-left">
                  <img src={iconinfo} alt="" /> <span>{error.fullName}</span>
                </p>
              )}
            </div>
            <div className="flex flex-col justify-start w-2/3 mx-auto mb-6">
              <label htmlFor="email" className="">
                Email Address
              </label>
              <input
                type="text"
                className="h-10 opacity-20 rounded-lg p-3  text-orange-700"
                name="email"
                value={inputs.email}
                onChange={handleChange}
              />
              {error.email && (
                <p className=" text-sm flex gap-2 items-center text-left">
                  <img src={iconinfo} alt="" /> <span>{error.email}</span>
                </p>
              )}
            </div>
            <div className="flex flex-col justify-start w-2/3 mx-auto mb-6">
              <label htmlFor="" className="">
                GitHub Username
              </label>
              <input
                type="text"
                className="h-10 opacity-20 rounded-lg  text-orange-700"
                name="github"
                value={inputs.github}
                onChange={handleChange}
              />
            </div>
            <button className=" flex flex-col justify-start w-2/3 mx-auto rounded-lg bg-orange-700 text-black p-3">
              Generate My Tickect
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
