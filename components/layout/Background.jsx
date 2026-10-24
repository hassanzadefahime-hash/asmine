"use client";
import { usePathname } from "next/navigation";

export default function Background() {
  const pathname = usePathname();

  const showBackground =
    pathname === "/" ||
    pathname === "/products" ||
    pathname === "/skills";

  const hideOnMobile = pathname === "/products";

  return (
    <>
      {showBackground && (
        <div
          className={`
            absolute inset-0
            bg-[url('/images/decoration/flower.webp')]
            bg-size-[clamp(50vh,60vw,82vh)_auto]
            lg:bg-position-[top_right_-12rem]
            md:bg-position-[center_right_-11rem]
            bg-position-[bottom_right_-8rem]
            bg-no-repeat opacity-5
            ${hideOnMobile ? "max-md:hidden" : ""}
          `}
        />
      )}
    </>
  );
}