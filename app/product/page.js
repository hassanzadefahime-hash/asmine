"use client";
import "./product.css";
import { useState } from "react";
import image from "./13.png";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function product() {
  const [state, setState] = useState(false);

  const onChange = () => {
    setState((prevState) => !prevState);
  };
  return (
    <>
      <div className="system">
        <div className="flex flex-row h-dvh p-1 ">
          <div className=" h-full w-1/3 flex flex-row items-center justify-center">
            <div className="flex items-start   h-[30vw] ">
              <div className="w-[clamp(2vh,2vw,4vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div>
            </div>

            <div className="w-[clamp(15vh,15vw,16vh)] aspect-square rounded-full -translate-y-8/12">
              <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
            </div>
            <div className="w-[clamp(6vh,6vw,8vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-x-1/2 translate-y-1/3"></div>
            <div className="w-[clamp(10vh,10vw,12vh)] aspect-square rounded-full">
              <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
            </div>
            <div className="w-[clamp(4vh,4vw,6vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full translate-y-11/12"></div>
            <div className=" px-[1vw] ">
              <div className="w-[clamp(2vh,2vw,3vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full translate-y-12"></div>
            </div>
          </div>
          <div className=" h-full w-1/3">
            <div className="">
              <span className="text-xl text-amber-100  flex items-end justify-center tracking-widest h-[10vh] ">
                a t e n
              </span>
            </div>
            <div className=" flex justify-center items-center py-[1vw] h-[54vh] ">
              <div className="h-full w-[24vw] bg-cover rounded-3xl flex relative">
                <div className="h-15/20 w-1/16 bg-[#351820] rounded-full shadow-xl/30 mt-4 duration-300 hover:h-17/20"></div>
                <div className="h-17/20 w-1/16 bg-[#40202A] rounded-full shadow-xl/30 duration-300 hover:h-18/20"></div>
                <div className="h-18/20 w-1/16 bg-[#4A2530] rounded-full shadow-xl/30 duration-300 hover:h-19/20"></div>
                <div className="h-17/20 w-1/16 bg-[#542A36] rounded-full shadow-xl/30 duration-300 hover:h-18/20"></div>
                <div className="h-19/20 w-1/16 bg-[#5E303D] rounded-full shadow-xl/30 duration-300 hover:h-20/20"></div>
                <div className="h-18/20 w-1/16 bg-[#683644] rounded-full shadow-xl/30 duration-300 hover:h-19/20"></div>
                <div className="h-17/20 w-1/16 bg-[#733C4B] rounded-full shadow-xl/30 duration-300 hover:h-18/20"></div>
                <div className="h-15/20 w-1/16 bg-[#7E4353] rounded-full shadow-xl/30 duration-300 hover:h-16/20"></div>
                <div className="h-13/20 w-1/16 bg-[#894B5C] rounded-full shadow-xl/30 duration-300 hover:h-14/20"></div>
                <div className="h-20/20 w-1/16 bg-[#955365] rounded-full shadow-xl/30 duration-300 hover:h-21/20"></div>
                <div className="h-14/20 w-1/16 bg-[#A15C6E] rounded-full shadow-xl/30 duration-300 hover:h-15/20"></div>
                <div className="h-15/20 w-1/16 bg-[#AD6578] rounded-full shadow-xl/30 duration-300 hover:h-16/20"></div>
                <div className="h-18/20 w-1/16 bg-[#B86F82] rounded-full shadow-xl/30 duration-300 hover:h-19/20"></div>
                <div className="h-17/20 w-1/16 bg-[#C17A8C] rounded-full shadow-xl/30 duration-300 hover:h-18/20"></div>
                <div className="h-16/20 w-1/16 bg-[#CA8697] rounded-full shadow-xl/30 duration-300 hover:h-17/20"></div>
                <div className="h-17/20 w-1/16 bg-[#D293A2] rounded-full shadow-xl/30 mt-4 duration-300 hover:h-18/20"></div>

                <div className="h-4/7 w-full  rounded-3xl absolute top-0">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-[url('https://cdn.alibaba.ir/ostorage/alibaba-mag/wp-content/uploads/2021/01/pic-1-Skagit-Valley-2.jpg')] bg-cover bg-center bg-no-repeat transition-all duration-300 ${
                        state ? "blur-pic scale-110" : ""
                      }`}
                    />
                    {state && (
                      <div className="bg-[#00000076]  absolute inset-0"></div>
                    )}
                    {state && (
                      <div className="text-white relative flex justify-center p-8 items-center text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua{" "}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-row justify-between items-center h-[20vh]">
              <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-14"></div>
              <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-3/4">
                <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
              </div>
              <div className="w-[clamp(2vh,2vw,3vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full  -translate-y-10/11"></div>
              <div className="w-[clamp(6vh,6vw,8vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center">
                <FaAngleLeft />
              </div>
              <button
                className="w-[clamp(10vh,10vw,12vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-1/10"
                onClick={onChange}
                style={{ fontFamily: "arial" }}
              >
                <div className="w-[clamp(8vh,8vw,10vh)] aspect-square bg-[#3a1d24] rounded-full flex items-center justify-center">
                  Info
                </div>
              </button>
              <div className="w-[clamp(6vh,6vw,8vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full  flex items-center justify-center">
                <FaAngleRight />
              </div>
              <div className="w-[clamp(2vh,2vw,3vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-10/11"></div>
              <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-3/4">
                <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
              </div>
              <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full  -translate-y-14"></div>
            </div>
          </div>

          <div className=" h-full w-1/3 flex flex-row items-center justify-center">
            <div className=" px-[1vw]">
              <div className="w-[clamp(2vh,2vw,3vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full translate-y-12"></div>
            </div>

            <div className="w-[clamp(4vh,4vw,6vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full translate-y-11/12"></div>
            <div className="w-[clamp(10vh,10vw,12vh)] aspect-square rounded-full">
              <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
            </div>
            <div className="w-[clamp(6vh,6vw,8vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full translate-x-1/2 translate-y-1/3"></div>
            <div className="w-[clamp(15vh,15vw,16vh)] aspect-square rounded-full -translate-y-8/12">
              <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
            </div>
            <div className="flex items-start   h-[30vw] ">
              <div className="w-[clamp(2vh,2vw,4vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mobile ">
        <span className="text-xl text-amber-100  flex items-center justify-center tracking-widest h-[14vh] ">
          a t e n
        </span>

        <div className=" flex justify-center items-center h-[48vh] ">
          <div className="h-[82%] w-54 m-2   bg-cover  rounded-3xl  flex relative">
            <div className="h-16/20 w-1/16 bg-[#3a1d24] rounded-full shadow-xl/30 mt-5 "></div>
            <div className="h-19/20 w-1/16 bg-[#44222a] rounded-full shadow-xl/30 "></div>
            <div className="h-18/20 w-1/16 bg-[#502730] rounded-full shadow-xl/30 "></div>
            <div className="h-17/20 w-1/16 bg-[#4d262f] rounded-full shadow-xl/30 "></div>
            <div className="h-18/20 w-1/16 bg-[#5b2e39] rounded-full shadow-xl/30 "></div>
            <div className="h-18/20 w-1/16 bg-[#5b2f39] rounded-full shadow-xl/30 "></div>
            <div className="h-17/20 w-1/16 bg-[#63333e] rounded-full shadow-xl/30"></div>
            <div className="h-16/20 w-1/16 bg-[#6d3744] rounded-full shadow-xl/30"></div>
            <div className="h-17/20 w-1/16 bg-[#824351] rounded-full shadow-xl/30"></div>
            <div className="h-16/20 w-1/16 bg-[#854554] rounded-full shadow-xl/30"></div>
            <div className="h-17/20 w-1/16 bg-[#985061] rounded-full shadow-xl/30"></div>
            <div className="h-17/20 w-1/16 bg-[#a75a6c] rounded-full shadow-xl/30"></div>
            <div className="h-18/20 w-1/16 bg-[#b06274] rounded-full shadow-xl/30"></div>
            <div className="h-19/20 w-1/16 bg-[#af6879] rounded-full shadow-xl/30"></div>
            <div className="h-18/20 w-1/16 bg-[#c06c7f] rounded-full shadow-xl/30"></div>
            <div className="h-16/20 w-1/16 bg-[#d08899] rounded-full shadow-xl/30 mt-5"></div>

            <div className="h-5/9 w-full  rounded-2xl absolute top-0 flex justify-center">
              {/* <img
                src={image}
                
              /> */}
              <Image
                src={image}
                // width={500}
                // height={500}
                alt="Picture of the author"
                className=" object-top rounded-2xl h-full w-auto "
              />
            </div>
          </div>
        </div>

        <div className=" flex flex-row justify-around items-center h-[20vh] mb-8 mx-[1vh] ">
          <div className="h-full">
            <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div>
          </div>
          <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-1/4">
            <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
          </div>
          <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-7/8"></div>
          <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
            <FaAngleLeft />
          </div>
          <div
            className="w-[clamp(10vh,10vw,11vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-1/2"
            style={{ fontFamily: "arial" }}
          >
            info
          </div>
          <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
            <FaAngleRight />
          </div>
          <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-11/12"></div>
          <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-1/4">
            <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
          </div>
          <div className="h-full">
            <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div>
          </div>
        </div>
      </div>
    </>
  );
}
