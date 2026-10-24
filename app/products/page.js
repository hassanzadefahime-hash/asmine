"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./product.css";
import PortfolioSlider from "@/components/products/PortfolioSlider";
export default function products() {
  return (
    <>
      <div className="flex flex-col h-dvh  content-between">
        <div className="flex min-h-1/11 justify-center  items-end md:mt-8  ">
          <p className="md:text-5xl text-xl text-white-100 font-dancing align-text-bottom  text-shadow-lg/50">
            Portfolio
          </p>
        </div>

        <PortfolioSlider />
      </div>
    </>
  );
}
