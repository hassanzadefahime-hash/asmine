
"use client";

export default function ProjectArtwork({
  product,
  showInfo,
  mobile = false,
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl">
      <div
        className={`absolute inset-0 bg-no-repeat transition-all duration-300 ${
          showInfo ? "blur-pic scale-110" : ""
        }`}
        style={{
          backgroundImage: product?.img
            ? `url("${product.img}")`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {showInfo && (
        <div className="absolute inset-0 bg-[#00000076]" />
      )}

      {showInfo && (
        <div
          className={`relative flex h-full items-center justify-center text-center font-dancing font-bold text-white text-shadow-lg/50 ${
            mobile
              ? "px-2 py-2 text-sm tracking-widest"
              : "p-8 text-xl"
          }`}
        >
          {product?.description}
        </div>
      )}
    </div>
  );
}
