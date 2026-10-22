"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./product.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { arr } from "../../components/db.js";
import Image from "next/image";
export default function products() {
  return (
    <>
      <div className="flex flex-col h-dvh  content-between">
        <div className="flex h-1/11 justify-center  items-end md:mt-12  ">
          <p className="md:text-5xl text-xl text-white-100 font-dancing align-text-bottom  text-shadow-lg/50">
            Portfolio
          </p>
        </div>

        <div className="relative min-h-9/12">
          <Swiper
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            className="mySwiper h-full lg:w-1/2 md:w-3/5 w-4/5 relative  mb-0  "
            pagination={{ type: "bullets", clickable: true }}
            autoplay={true}
            loop={true}
            modules={[Navigation, Pagination]}
            breakpoints={{
              0: { slidesPerView: 5, spaceBetween: 1 }, // موبایل
              620: { slidesPerView: 6, spaceBetween: 1 }, // تبلت کوچک
              1024: { slidesPerView: 7, spaceBetween: 1 }, // لپ‌تاپ و دسکتاپ
            }}
          >
            {arr.map((slide) => (
              <SwiperSlide>
                <div className="relative flex justify-center items-center w-full h-full  ">
                  <Link
                    href={`/products/${slide.id}`}
                    className={`relative w-[75%] lg:w-[60%] md:w-[74%] h-[var(--mobile-height)]
                md:h-[var(--desktop-height)]  rounded-full overflow-hidden shadow-xl/28  ${slide.translate} flex items-end justify-center  `}
                    style={{
                      "--mobile-height": slide.hmobile,
                      "--desktop-height": slide.hdesktop,
                    }}
                  >
                    <Image
                      src={slide.banner}
                      alt="Product"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 75vw, 40vw"
                    />
                    <p className="font-dancing font-bold absolute text-sm md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                      View
                    </p>
                    <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="custom-prev">
            <FiChevronLeft size={30} />
          </button>
          <button className="custom-next">
            <FiChevronRight size={30} />
          </button>
        </div>
      </div>
    </>
  );
}
