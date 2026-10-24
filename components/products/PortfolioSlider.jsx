"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { arr } from "@/data/projects";
import PortfolioSlide from "./PortfolioSlide";

export default function PortfolioSlider() {
    console.log(arr)
  return (
    
    <div className="relative h-[70dvh] min-h-[400px]">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper h-full lg:w-1/2 md:w-3/5 w-4/5 relative mb-0"
        pagination={{ type: "bullets", clickable: true }}
        autoplay={true}
        loop={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          0: { slidesPerView: 5, spaceBetween: 1 },
          620: { slidesPerView: 6, spaceBetween: 1 },
          1024: { slidesPerView: 7, spaceBetween: 1 },
        }}
      >
        {arr.map((slide) => (
          <SwiperSlide key={slide.id}>
            <PortfolioSlide slide={slide}/>
          </SwiperSlide>
        ))}
      </Swiper>

      <button type="button" className="custom-prev" aria-label="Previous project">
        <FiChevronLeft size={30} />
      </button>

      <button type="button" className="custom-next" aria-label="Next project">
        <FiChevronRight size={30} />
      </button>
    </div>
  );
}