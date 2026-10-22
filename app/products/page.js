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
                    <img
                      src={slide.banner}
                      className="w-full h-full object-cover "
                    />
                    <p className="font-dancing font-bold absolute text-sm md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                      View
                    </p>
                    <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}

            {/* <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full ">
              <div className="relative w-[75%] md:w-[74%] lg:w-[60%] h-[50%] md:h-[60%]  rounded-full overflow-hidden shadow-xl/28 -translate-y-15 md:-translate-y-14 flex items-end justify-center ">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEShlZ86zAA0Bu2CZdb0UVbE-HyPOOdrHgWw&s"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
            
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative w-[75%] md:w-[74%] lg:w-[60%] h-[57%] md:h-[40%] rounded-full overflow-hidden shadow-xl/28 translate-y-0 md:-translate-y-15 flex items-end justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGVZwWQw5mM5kyuXfqw4fYH2OH6zoXsGAXg&s"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative w-[75%] h-[40%] md:w-[74%] lg:w-[60%] md:h-[50%] rounded-full overflow-hidden shadow-xl/28 translate-y-2 md:translate-y-6 flex items-end justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUR-L85mFuH7XB5NQBoKydj1kpbbfxT7Degw&s"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative w-[75%] h-[40%] md:w-[74%] lg:w-[60%] md:h-[50%] rounded-full overflow-hidden shadow-xl/28 -translate-y-7.5 md:-translate-y-18 flex items-end justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhoWLqTB12paQg8aUV3mqpAK1Xv0d0Y9NNA&s"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full">
              <div className="relative w-[75%] h-[43%] md:w-[74%] lg:w-[60%] md:h-[45%] rounded-full overflow-hidden shadow-xl/28 translate-y-2.5 md:translate-y-10 flex items-end justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHYUxlzSe_C3kLn6kanz0mI2gmOJqu8s2pQg&s"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full ">
              <div className="relative w-[75%] h-[50%] md:w-[74%] lg:w-[60%] md:h-[50%] rounded-full overflow-hidden shadow-xl/28 -translate-y-15 md:-translate-y-10 flex items-end justify-center">
                <img
                  src="https://mwallpaper.ir/wp-content/uploads/2022/06/%D8%A8%DA%A9-%DA%AF%D8%B1%D8%A7%D9%86%D8%AF-%D8%A7%D8%B3%D8%AA%D9%88%D8%B1%DB%8C-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A2%D8%A8%DB%8C-%D8%A8%D8%A7-%D9%82%D9%84%D8%A8.jpg"
                  className="w-full h-full object-cover"
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]  ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full ">
              <Link
                href="/"
                className="relative w-[75%] h-[43%] lg:w-[60%] md:w-[74%]  md:h-[50%] rounded-full overflow-hidden shadow-xl/28 translate-y-2.5 md:translate-y-8 flex items-end justify-center"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQODehFikyXmrxxOsWUp8j-amyCGAb34w5wRQ&s"
                  className="w-full h-full object-cover "
                />
                <p className=" absolute text-xs md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6] opacity-0 hover:opacity-1 ">
                  view
                </p>
                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </Link>
            </div>
          </SwiperSlide> */}

            {/* <SwiperSlide>
            <div className="relative flex justify-center items-center w-full h-full ">
              <div className="relative w-[75%] h-[50%] md:w-[60%] md:h-[50%] rounded-full overflow-hidden shadow-xl/28 -translate-y-15 md:-translate-y-10">
                <img
                  src="https://mwallpaper.ir/wp-content/uploads/2022/06/%D8%A8%DA%A9-%DA%AF%D8%B1%D8%A7%D9%86%D8%AF-%D8%A7%D8%B3%D8%AA%D9%88%D8%B1%DB%8C-%D8%B5%D9%88%D8%B1%D8%AA%DB%8C-%D9%88-%D8%A2%D8%A8%DB%8C-%D8%A8%D8%A7-%D9%82%D9%84%D8%A8.jpg"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent "></div>
              </div>
            </div>
          </SwiperSlide> */}
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
