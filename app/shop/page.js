"use client"
import { FaBeer, faHome } from "react-icons/fa";

export default function shop() {
  return (
    <div className="flex flex-col">
      <div className="">
        <span className="text-xl text-amber-100  flex items-end justify-center tracking-widest h-[14vh] ">
          a t e n
        </span>
      </div>
      <div className="">
        <div className=" flex justify-center items-center  h-[50vh]">
          <div className="h-[40vh] w-[68vw]   bg-cover  rounded-3xl  flex relative">
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
            <div className="h-17/20 w-1/16 bg-[#d3768b] rounded-full shadow-xl/30"></div>
            <div className="h-16/20 w-1/16 bg-[#d08899] rounded-full shadow-xl/30 mt-5"></div>

            <div className="h-5/9 w-full  rounded-2xl absolute top-0">
              <img
                src="https://www.alamto.com/wp-content/uploads/2023/05/flower-9.jpg"
                className="w-full  h-full object-cover rounded-2xl  "
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-row justify-around items-center h-[18vh]">
        <div className="h-full"><div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div></div>
        <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-1/4">
            <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
          </div>
        <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-7/8"></div>
        <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
          {"<"}
        </div>
        <div className="w-[clamp(10vh,10vw,11vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-1/2">
          info
        </div>
        <div className="w-[clamp(6vh,6vw,7vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full flex items-center justify-center translate-y-2/3">
           <FaBeer className="text-red-50"/>
        </div>
        <div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full -translate-y-11/12"></div>
        <div className="w-[clamp(4vh,4vw,6vh)] aspect-square rounded-full -translate-y-1/4">
            <div className="  bg-[url('/gol-contact-1.png')] w-full h-full bg-no-repeat bg-cover  "></div>
          </div>
        <div className="h-full"><div className="w-[clamp(2vh,2vw,2vh)] aspect-square bg-[#774a54]  shadow-circle  shadow-box  rounded-full "></div></div>
      </div>
    </div>
  );
}
