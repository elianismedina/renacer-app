import React from "react";
import Image from "next/image";

export default function Project1Page() {
  return (
    <>
      <div>
        <div className="top-0 mt-24 flex h-full w-full md:mt-0">
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1701360508/Slide_16_9_-_1_1_y1wi3s.jpg"
            alt="Image project 1"
            width={1920}
            height={1080}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full bg-white">
          <div className="mx-auto mt-0 h-48 w-3/4 bg-black md:h-96 md:w-2/4"></div>
        </div>
        <div className="p-8">
          <p className="text-center text-2xl font-bold text-lime-950">
            Imagenes del proyecto
          </p>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
          <div className="m-auto h-80 w-80 rounded-lg bg-black text-center text-2xl text-white md:h-96 md:w-96">
            <p className="mt-36">Image 1</p>
          </div>
          <div className="m-auto h-80 w-80 rounded-lg bg-black text-center text-2xl text-white md:h-96 md:w-96">
            <p className="mt-36">Image 2</p>
          </div>
          <div className="m-auto h-80 w-80 rounded-lg bg-black text-center text-2xl text-white md:h-96 md:w-96">
            <p className="mt-36">Image 3</p>
          </div>
        </div>
      </div>
    </>
  );
}
