import React from "react";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto mb-0 mt-0 grid grid-cols-2 bg-slate-50 py-28 text-center font-bold text-black">
        <Image
          src="/images/under-construction.svg"
          alt="Logo"
          width={200}
          height={200}
        />
        <div>
          <h1 className="p-4 text-start text-4xl font-extrabold">Proyectos</h1>
        </div>
        <div className="relative mx-auto">
          <div className="absolute -right-14 top-12 h-48 w-2/3 rounded-lg bg-sky-800 text-2xl text-white opacity-50">
            <p className="p-4">Projecto 1</p>
            <button className="btn btn-accent">Ver projecto</button>
          </div>
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/t_Project1Renacer/v1701022632/Imagen_de_WhatsApp_2023-11-25_a_las_11.55.07_d28391c9_htfnw1.jpg"
            alt="Proyecto 1"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="relative mx-auto">
          <div className="absolute -right-14 top-12 h-48 w-2/3 rounded-lg bg-sky-800 text-2xl text-white opacity-50">
            <p className="p-4">Projecto 2</p>
          </div>
          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/t_Project2Renacer/v1701023065/Imagen_de_WhatsApp_2023-11-25_a_las_11.54.45_02fb6a1e_wnjmym.jpg"
            alt="Proyecto 2"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
