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
      <div className=" h-[918px] w-full relative md:h-auto">
        <img src={broken} alt="broken pattern" className="bg-cover bg-center" />
        <img src={upspiral} alt="" className="absolute top-0 right-0" />
        <img src={downspiral} alt="" className="absolute left-0 bottom-0 " />

        <div className="flex flex-col text-white  gap-5  justify-center items-center  md:w-2/3 mx-auto p-5 absolute inset-x-7 top-0">
          <img src={logo} alt="" />
          <div className="text-3xl text-bold text-center capitalize w-full md:text-6xl  ">
            Your journey to coding conf<br></br> 2025 starts here
          </div>
          <p className="text-sm">
            secure your spot at next year's biggest coding conference
          </p>
          <div className="flex flex-col justify-center items-center p-6  border-2  border-dashed border-gray-400 w-full mx-auto rounded-lg  bg-white/10 hover:bg-white/40 md:w-2/3 ">
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
              <div className="w-full">
                <div className=" m-2 w-1/3 mx-auto bg-slate-500 rounded-md border-2 border-zinc-50 hover:bg-slate-300">
                  <img src={iconupload} alt="" className="mx-auto w-1/2" />
                </div>
                <div
                  className="w-full p-6 text-center transition-all duration-300"
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
                    className="cursor-pointer text-white hover:text-white/70"
                  >
                    Drag & Drop images here or
                    <span className="text-blue-500 underline ml-2 hover:text-blue-300">
                      click to upload
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
          {!images && (
            <p className="w-full  text-sm flex gap-2 items-center text-left md:w-2/3">
              <img src={iconinfo} alt="" /> <span>Upload Images</span>
            </p>
          )}
          {error.largeFile && (
            <p className=" w-full text-sm flex gap-2 items-center text-left md:w-2/3">
              <img src={iconinfo} alt="" /> <span>{error.largeFile}</span>
            </p>
          )}
          {error.type && (
            <p className=" w-full text-sm flex gap-2 items-center text-left md:w-2/3">
              <img src={iconinfo} alt="" /> <span>{error.type}</span>
            </p>
          )}

          <form action="" onSubmit={handleSubmit} className="w-full md:w-2/3">
            <div className="flex flex-col justify-start w-full mx-auto mb-6">
              <label htmlFor="name" className="">
                Full Name
              </label>
              <input
                type="text"
                className="h-10 bg-white/10 rounded-lg p-4  text-white focus:outline-double hover:bg-white/40"
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
            <div className="flex flex-col justify-start w-full mx-auto mb-6">
              <label htmlFor="email" className="">
                Email Address
              </label>
              <input
                type="text"
                className="h-10 bg-white/10 rounded-lg p-4  text-white focus:outline-double hover:bg-white/40"
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
            <div className="flex flex-col justify-start w-full mx-auto mb-6">
              <label htmlFor="" className="">
                GitHub Username
              </label>
              <input
                type="text"
                className="h-10 bg-white/10 rounded-lg p-4  text-white focus:outline-double hover:bg-white/40"
                name="github"
                value={inputs.github}
                onChange={handleChange}
              />
            </div>
            <button className=" flex flex-col justify-start w-full mx-auto rounded-lg bg-orange-700 text-black p-3 hover:text-white hover:bg-orange-800  focus:outline-double ">
              Generate My Ticket
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
