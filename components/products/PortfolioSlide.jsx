import Link from "next/link";
import Image from "next/image";

export default function PortfolioSlide ({slide}){
    return(
        <div className="relative flex justify-center items-center w-full h-full">
              <Link
                href={`/products/${slide.id}`}
                className={`relative w-[75%] lg:w-[60%] md:w-[74%] h-[var(--mobile-height)] md:h-[var(--desktop-height)] rounded-full overflow-hidden shadow-xl/28 ${slide.translate} flex items-end justify-center`}
                style={{
                  "--mobile-height": slide.hmobile,
                  "--desktop-height": slide.hdesktop,
                }}
              >
                <Image
                  src={slide.banner}
                  alt={slide.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 75vw, 40vw"
                />

                <p className="font-dancing font-bold absolute text-sm md:text-md lg:text-lg z-1 mb-4 text-[#d9abb6]">
                  View
                </p>

                <div className="absolute bottom-0 h-1/2 w-full bg-linear-to-t from-[#93606c] to-transparent" />
              </Link>
            </div>
    )
}