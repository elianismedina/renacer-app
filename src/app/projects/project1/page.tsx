import React from "react";
import Image from "next/image";

export default function Project1Page() {
  return (
    <>
      <div>
        <div className="relative top-0 mt-24 flex h-full w-full md:mt-0">
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/t_SlideShowImage1/v1701362288/Slide_16_9_-_1_5_viwwkt.jpg"
            alt="Image project 1"
            width={1920}
            height={1080}
            layout="intrinsic"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-x-0 top-60 mx-auto h-96 w-3/4 rounded-lg bg-lime-300 p-2 md:bottom-0 md:mt-80 md:h-80 md:w-2/4">
          <h1 className="ml-10 mt-10 text-3xl font-bold">Atrapasueños</h1>
          <p className="ml-10 mt-4 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            sunt omnis velit quas praesentium! Nemo a explicabo suscipit optio
            odit ducimus vitae? Nostrum veniam doloribus ratione. Modi in a
            architecto.
          </p>
          <p className="ml-10 mt-2 text-sm font-bold">Fecha de inicio:</p>
          <p className="ml-10 mt-2 text-sm font-bold">Municipio:</p>
          <p className="ml-10 mt-2 text-sm font-bold">
            Cantidad de participantes:{" "}
          </p>
        </div>

        <div className="mt-96 p-8 md:mt-24">
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
