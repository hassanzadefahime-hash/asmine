"use client";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

import "./contact.css";
import { useState } from "react";

export default function contact() {
  const [state, setState] = useState({ loading: [false, false, false] });

  const onchange = (index) => {
    setState({ ...state }, (state.loading[index] = false));
    setTimeout(() => {
      setState({ ...state }, (state.loading[index] = true));
    }, 0);
    setTimeout(() => {
      setState({ ...state }, (state.loading[index] = false));
    }, 2500);
  };
  return (
    <>
      <div className=" system " id="system">
        <div className="flex justify-center items-center h-screen flex-1  ">
          <div className="flex flex-col h-full mt-85 items-center flex-1">
            <div className="flex flex-col gap-8">
              <div
                style={{ fontFamily: "arial" }}
                className="flex flex-col gap-4 text-red-100"
              >
                <div>
                  <div className="flex gap-4">
                    <p className="text-6xl font-dancing font-bold text-shadow-lg/50 font-bold">
                      Let' s Talk
                    </p>

                    {/* <p className="text-6xl font-dancing">Talk</p> */}
                    <div className="  bg-[url('/gol-contact-1.png')] w-[5vw] h-[5vw] bg-no-repeat bg-cover "></div>
                  </div>
                </div>
                <div className="border-2 w-16 border-red-100 text-shadow-lg/50 font-bold"></div>
                <div>
                  <p className="text-xl font-dancing text-shadow-lg/50 font-bold">
                    Have a project in mind ?
                  </p>
                  <p className="text-xl font-dancing text-shadow-lg/50 font-bold">
                    I' d love to hear from you .
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                  <FaLinkedinIn className="text-2xl" />
                </div>
                <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                  <FaInstagram className="text-2xl" />
                </div>
                <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                  <FaTelegram className="text-2xl" />
                </div>
                <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                  <FaXTwitter className="text-2xl" />
                </div>
              </div>
              <div className="  bg-[url('/gol-contact-1.png')] w-[10vw] h-[10vw] bg-no-repeat bg-cover "></div>
            </div>
          </div>
          <div className="flex flex-row items-center  h-full transform rotate-14 px-2">
            <div className="w-[clamp(16vh,16vw,32vh)] aspect-square bg-[#9C6975] shadow-circle rounded-full -translate-y-4/5 flex justify-center items-center  ">
              <div className="w-[clamp(11vh,11vw,22vh)] aspect-square bg-[#895865] rounded-full shadow-box flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Name"
                  className="h-full w-full z-20 rounded-full transform -rotate-14 px-2 text-white"
                  onClick={() => onchange(0)}
                  style={{ fontFamily: "arial" }}
                />
              </div>
              <svg
                className="w-[clamp(17vh,17vw,34vh)] absolute pointer-events-none "
                viewBox="0 0 100 100"
              >
                <g className={state.loading[0] ? "spin-once" : ""}>
                  <path
                    d="M39.64,88.64 A40,40 0 0,1 50,10"
                    fill="none"
                    stroke="#AA7B87"
                    strokeWidth="14"
                    strokeLinecap="round"
                    className="shadow-whatch"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-row items-center  h-full ">
            <div className="w-[clamp(17vh,17vw,32vh)] aspect-square bg-[#966472] rounded-full shadow-circle flex justify-center items-center -translate-y-1/6">
              <div className="w-[clamp(12vh,12vw,22vh)] aspect-square bg-[#835361] shadow-box rounded-full flex justify-center items-center">
                <input
                  type="text"
                  placeholder="Email"
                  className="h-full w-full z-20 rounded-full  px-2"
                  onClick={() => onchange(1)}
                  style={{ fontFamily: "arial" }}
                />
              </div>

              <svg
                className="w-[clamp(18vh,18vw,34vh)] absolute"
                viewBox="0 0 100 100"
              >
                <g className={state.loading[1] ? "spin-once" : ""}>
                  <path
                    d="M39.64,88.64 A40,40 0 0,1 50,10"
                    fill="none"
                    stroke="#A47480"
                    strokeWidth="14"
                    strokeLinecap="round"
                    className="shadow-whatch"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex flex-row items-center h-full  transform rotate-40 ">
            <div className="w-[clamp(30vh,30vw,45vh)] aspect-square bg-[#895967] shadow-circle rounded-full  flex justify-center items-center">
              <div className="w-[clamp(25vh,25vw,35vh)] aspect-square bg-[#784B59] shadow-box rounded-full flex justify-center items-center">
                <input
                  className="w-full h-full rounded-full  resize-none overflow-y-scroll px-4
           [scrollbar-width:none] [&::-webkit-scrollbar]:hidden  z-20 transform -rotate-40"
                  placeholder="Your message..."
                  onClick={() => onchange(2)}
                  style={{ fontFamily: "arial" }}
                />
              </div>
              <svg
                className="w-[clamp(32vh,32vw,50vh)] absolute pointer-events-none"
                viewBox="0 0 100 100"
              >
                <g className={state.loading[2] ? "spin-once" : ""}>
                  <path
                    d="M39.64,88.64 A40,40 0 0,1 50,10"
                    fill="none"
                    stroke="#986775"
                    strokeWidth="10"
                    strokeLinecap="round"
                    className="shadow-whatch"
                  />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <div className="w-[clamp(12vh,12vw,14vh)] aspect-square bg-[#90616E] shadow-circle  rounded-full flex items-center justify-center">
                <button onClick={() => onchange(3)}>
                  <div
                    className="w-[clamp(6vh,6vw,9vh)] transform -rotate-40 text-red-50 aspect-square bg-[#7D4F5D] shadow-box sha rounded-full flex justify-center items-center font-bold"
                    style={{ fontFamily: "arial" }}
                  >
                    send
                  </div>
                </button>

                <svg
                  className="w-[clamp(10vh,10vw,14vh)] absolute"
                  viewBox="0 0 100 100"
                >
                  <g className={state.loading[3] ? "spin-once" : ""}>
                    <path
                      d="M50,90 A40,40 0 0,1 50,10"
                      fill="none"
                      stroke="#9F6E7A"
                      strokeWidth="16"
                      strokeLinecap="round"
                      className="shadow-whatch"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile" id="mobile">
        <div className="flex flex-col justify-start items-center w-full h-screen mt-10">
          <div className="  flex  flex-col justify-center items-center ">
            <div className="flex  items-cenetr  justify-center ">
              <div className="flex flex-col justify-end items-end">
              <div className="  bg-[url('/gol-contact-1.png')] w-[18vw] h-[18vw] bg-no-repeat bg-cover"></div>
                <div className="w-[clamp(20vh,22vw,22vh)]  aspect-square bg-[#9C6975] rounded-full  flex  justify-center items-center translate-x-1/17 shadow-circle ">
                  <div className="w-[clamp(15vh,18vw,18vh)] aspect-square bg-[#895865] rounded-full flex justify-center items-center text-xs font-sans shadow-box">
                    <input
                      type="text"
                      placeholder="Email"
                      className="h-full w-full z-20 rounded-full px-1 rtl text-white"
                      onClick={() => onchange(0)}
                    />
                  </div>
                  <svg
                    className="w-[clamp(22vh,25vw,25vh)] absolute"
                    viewBox="0 0 100 100"
                  >
                    <g className={state.loading[0] ? "spin-once" : ""}>
                      <path
                        d="M39.64,88.64 A40,40 0 0,1 50,10"
                        fill="none"
                        stroke="#AA7B87"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className="shadow-whatch"
                      />
                    </g>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[clamp(20vh,23vw,23vh)] aspect-square bg-[#966472]  rounded-full flex justify-center items-center  shadow-circle">
                  <div className="w-[clamp(15vh,18vw,18vh)] aspect-square bg-[#835361] rounded-full flex justify-center items-center text-xs font-sans shadow-box">
                    <input
                      type="text"
                      placeholder="Name"
                      className="h-full w-full z-20 rounded-full px-1 text-white   "
                      onClick={() => onchange(1)}
                      style={{ fontFamily: "arial" }}
                    />
                  </div>
                  <svg
                    className="w-[clamp(22vh,25vw,25vh)] absolute"
                    viewBox="0 0 100 100"
                  >
                    <g className={state.loading[1] ? "spin-once" : ""}>
                      <path
                        d="M39.64,88.64 A40,40 0 0,1 50,10"
                        fill="none"
                        stroke="#A47480"
                        strokeWidth="10"
                        strokeLinecap="round"
                        className="shadow-whatch"
                      />
                    </g>
                  </svg>
                </div>
                <div className="  bg-[url('/gol-contact-1.png')] w-[18vw] h-[18vw] bg-no-repeat bg-cover"></div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row items-center justify-center ">
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex flex-row items-center">
                  <div className="w-[clamp(32vh,32vw,34vh)] aspect-square bg-[#90616E] rounded-full  flex justify-center items-center shadow-circle ">
                    <div className="w-[clamp(24vh,24vw,27vh)] aspect-square bg-[#7D4F5D] rounded-full  flex justify-center items-center shadow-box">
                      <input
                        type="text"
                        placeholder="Message..."
                        className="h-full w-full z-20 rounded-full  px-1 rtl text-white   "
                        onClick={() => onchange(2)}
                        style={{ fontFamily: "arial" }}
                      />
                    </div>
                    <svg
                      className="w-[clamp(35vh,35vw,37vh)] absolute"
                      viewBox="0 0 100 100"
                    >
                      <g className={state.loading[2] ? "spin-once" : ""}>
                        <path
                          d="M39.64,88.64 A40,40 0 0,1 50,10"
                          fill="none"
                          stroke="#9F6E7A"
                          strokeWidth="10"
                          strokeLinecap="round"
                          className="shadow-whatch"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start   w-full transform rotate-14">
                  <div className="w-[clamp(11vh,11vw,11vh)] aspect-square bg-[#895967] rounded-full  flex justify-center items-center transform -rotate-14  shadow-circle">
                    <div
                      className="w-[clamp(7vh,7vw,7vh)] aspect-square bg-[#784B59] rounded-full flex justify-center items-center shadow-box"
                      style={{ fontFamily: "arial" }}
                    >
                      send
                    </div>
                    <svg
                      className="w-[clamp(11vh,11vw,11vh)] absolute"
                      viewBox="0 0 100 100"
                    >
                      <g className={state.loading[3] ? "spin-once" : ""}>
                        <path
                          d="M39.64,88.64 A40,40 0 0,1 50,10"
                          fill="none"
                          stroke="#986775"
                          strokeWidth="16"
                          strokeLinecap="round"
                          className="shadow-whatch"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                    <FaLinkedinIn className="text-xl" />
                  </div>
                  <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                    <FaInstagram className="text-xl" />
                  </div>
                  <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                    <FaTelegram className="text-xl" />
                  </div>
                  <div className="w-[clamp(5vh,5vw,6vh)] aspect-square  bg-[#653b44] rounded-full shadow-circle  shadow-box flex justify-center items-center ">
                    <FaXTwitter className="text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
