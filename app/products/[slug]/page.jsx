"use client";
import { useParams } from "next/navigation";
import "./product.css";
import { useState } from "react";
import { arr } from "../../../components/db.js";
export default function BlogPostPage() {
  const { slug } = useParams();

  let product = arr.find((slide) => slide.id === slug);
  console.log(product?.name);
  const [state, setState] = useState(false);

  const onChange = () => {
    setState((prevState) => !prevState);
  };
  return (
    <>
      <div className="system">
        <div className="flex flex-row h-dvh  ">
          <div className=" h-full w-1/3  flex flex-row items-center justify-center">
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
              <span className="text-3xl text-shadow-lg/50 font-bold font-dancing flex items-end justify-center tracking-widest pb-5 pt-8">
                {product.name}
              </span>
            </div>
            <div className=" flex justify-center items-center py-[1vw] h-[54vh] ">
              <div className="h-full w-95 bg-cover rounded-3xl flex relative">
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
                      className={`absolute inset-0  bg-no-repeat transition-all duration-300 ${
                        state ? "blur-pic scale-110" : ""
                      }`}
                      style={{
                        backgroundImage: product?.img
                          ? `url("${product.img}")`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    {state && (
                      <div className="bg-[#00000076]  absolute inset-0"></div>
                    )}
                    {state && (
                      <div className="text-white relative flex text-shadow-lg/50 font-bold justify-center p-8 items-center text-center font-dancing text-xl text-justify">
                        {product.description}
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
                {/* <FaAngleLeft /> */}
              </div>
              <button
                className="w-[clamp(10vh,10vw,12vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-1/10"
                onClick={onChange}
                style={{ fontFamily: "arial" }}
              >
                <div className="w-[clamp(8vh,8vw,10vh)] aspect-square bg-[#3a1d24] rounded-full flex items-center justify-center font-dancing text-xl font-bold">
                  Info
                </div>
              </button>
              <div className="w-[clamp(6vh,6vw,8vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full  flex items-center justify-center">
                {/* <FaAngleRight /> */}
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
      <div className="flex flex-col mobile  h-[100%] items-center py-8 gap-6">
        
          <div className=" flex items-center justify-center">
            <span className="text-2xl font-dancing tracking-widest text-shadow-lg/50 font-bold ">
            {product.name}
            </span>
          </div>
          <div className="">
            <div className=" flex justify-center items-center">
              <div className="h-70 w-65 bg-cover rounded-3xl flex relative">
                <div className="h-16/20 w-1/13 bg-[#351923] rounded-full shadow-xl/30 mt-5" />
                <div className="h-19/20 w-1/13 bg-[#44202d] rounded-full shadow-xl/30" />
                <div className="h-18/20 w-1/13 bg-[#512636] rounded-full shadow-xl/30" />
                <div className="h-17/20 w-1/13 bg-[#603043] rounded-full shadow-xl/30" />
                <div className="h-18/20 w-1/13 bg-[#71384f] rounded-full shadow-xl/30" />
                <div className="h-18/20 w-1/13 bg-[#80415b] rounded-full shadow-xl/30" />
                <div className="h-17/20 w-1/13 bg-[#914b67] rounded-full shadow-xl/30" />
                <div className="h-16/20 w-1/13 bg-[#a05570] rounded-full shadow-xl/30" />
                <div className="h-17/20 w-1/13 bg-[#ad607b] rounded-full shadow-xl/30" />
                <div className="h-16/20 w-1/13 bg-[#ba6d87] rounded-full shadow-xl/30" />
                <div className="h-17/20 w-1/13 bg-[#c47b93] rounded-full shadow-xl/30" />
                <div className="h-17/20 w-1/13 bg-[#ce8aa0] rounded-full shadow-xl/30" />
                <div className="h-18/20 w-1/13 bg-[#d8a0b2] rounded-full shadow-xl/30" />
                <div className="h-16/20 w-1/13 bg-[#e5b7c5] rounded-full shadow-xl/30 mt-5" />

                <div className="h-4/7 w-full  rounded-3xl absolute top-0">
                  <div className="relative w-full h-full rounded-3xl overflow-hidden">
                    <div
                      className={`absolute inset-0  bg-no-repeat transition-all duration-300 ${
                        state ? "blur-pic scale-110" : ""
                      }`}
                      style={{
                        backgroundImage: product?.img
                          ? `url("${product.img}")`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    {state && (
                      <div className="bg-[#00000076]  absolute inset-0"></div>
                    )}
                    {state && (
                      <div className="text-white relative flex justify-center px-2 py-2 items-center text-center font-dancing tracking-widest text-shadow-lg/50 font-bold text-justify text-sm">
                        {product.description}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-row justify-around items-center ">
            <div className="h-full">
              <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div>
            </div>
            <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-1/4">
              <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
            </div>
            <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-7/8"></div>
            <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
              
            </div>
            <button
                className="w-[clamp(10vh,10vw,12vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-1/2"
                onClick={onChange}
                style={{ fontFamily: "arial" }}
              >
                <div className="w-[clamp(8vh,8vw,10vh)] aspect-square bg-[#3a1d24] rounded-full flex items-center justify-center text-shadow-lg/50 font-bold font-dancing ">
                  Info
                </div>
              </button>
            <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
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
