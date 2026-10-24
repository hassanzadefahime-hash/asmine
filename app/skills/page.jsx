import Image from "next/image";

const Skills = () => {
  return (
    <>
      <div className="scroll-smooth flex flex-col justify-center items-center md:mt-18 mt-7 md:w-[75%] w-[90%] mx-auto gap-8">
        <div className="min-h-60 w-full flex gap-4">
          <div className="md:w-[50%] w-[100%] rounded-xl shadow-[#9c6975]/15 md:px-0 px-4 pt-4 flex flex-col gap-3">
            <p className="text-4xl font-dancing text-shadow-lg/50 font-bold font-bold">
              Alex Morgan
            </p>
            <p className="text-lg font-bold font-dancing text-shadow-lg/50 font-bold font-bold">
              UI/UX & Graphic Designer
            </p>
            <div className="border-b border-white w-[100%] bg-red-900"></div>
            <p className="justify-content text-shadow-lg/50 font-bold text-justify font-signature md:text-xl text-lg md:leading-12 leading-8 tracking-wide">
              I'm Olivia Bennett, a passionate UI/UX and Graphic Designer
              skilled in Figma, Adobe Illustrator, and Photoshop. I enjoy
              creating modern, elegant, and user-friendly designs that blend
              creativity with functionality.
            </p>
            <div className="flex gap-4 mt-10">
              <div className="">
                <Image
                  src="/icons/figma.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div className="">
                <Image
                  src="/icons/adobe-illustrato.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
              <div className="">
                <Image
                  src="/icons/photoshop.svg"
                  width={40}
                  height={40}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <p className="p-1 text-[#874264] font-bold font-signature leading-[1.05] text-shadow-lg/50 font-bold text-4xl py-8">
              Building Skills For Future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Skills;
