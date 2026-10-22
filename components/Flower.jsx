import Link from "next/link";
import "./flower.css";
import { FaBriefcase } from "react-icons/fa";
import {  FaPhoneFlip } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
const Flower = () => {
  return (
    <div className="w-full min-h-10 md:min-h-12 lg:min-h-14 relative ">
      <Link href="/contact">
        <div className="back-one h-full hover:bg-[#8C5A66] transition-colors duration-300 ease-in-out w-4/5 md:w-4/8  bg-[#9A6874]  absolute  rounded-r-full shadow-lg flex justify-end   items-center md:pr-5 pr-4">
          <FaPhoneFlip className=" md:h-[38%] h-[40%] w-auto text-red-50" />
        </div>
      </Link>

      <Link href="/skills">
        <div className="back-two h-full hover:bg-[#956471] transition duration-300 ease-in-out w-3/5 md:w-3/8 bg-[#A2717D]  absolute rounded-r-full shadow-lg flex justify-end   items-center md:pr-5 pr-4">
          <IoPersonSharp className=" md:h-[38%] h-[40%] w-auto text-red-50"/>
        </div>
      </Link>
      <Link href="/products">
        <div className="back-three h-full hover:bg-[#9D6C78] transition duration-300 ease-in-out w-2/5 md:w-2/8 bg-[#AA7A86] absolute rounded-r-full shadow-lg flex justify-end   items-center md:pr-5 pr-4">
          <FaBriefcase className="md:h-[38%] h-[40%] w-auto text-red-50" />
        </div>
      </Link>
      <Link href="/">
        <div className="back-four h-full hover:bg-[#A97783] transition duration-300 ease-in-out w-1/5 md:w-1/7 bg-[#B2818D]  absolute rounded-r-full shadow-lg flex justify-end   items-center md:pr-5 pr-0">
          <img
            src="/logo-flower.svg"
            alt="logo-flowe"
            className="h-full object-contain"
          />
        </div>
      </Link>
    </div>
  );
};
export default Flower;
