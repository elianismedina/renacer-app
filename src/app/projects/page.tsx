import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  return (
    <>
      <div className="mx-auto mb-12 mr-4 mt-24 grid grid-cols-1 gap-16 bg-slate-50 p-8 py-2 md:grid-cols-2">
        <div></div>
        <div>
          <h1 className="mt-4 text-4xl">Proyectos</h1>
        </div>
        <div className="relative mx-auto gap-2">
          <div className="absolute -right-8 top-12 h-32 w-2/3 rounded-lg bg-sky-800 text-2xl text-white opacity-50">
            <p className="text-md p-4">Projecto 1</p>
          </div>
          <Link href="/projects/project1" className="text-white">
            <button className="btn btn-accent absolute -bottom-4 right-0 p-2 text-white md:top-28">
              Ver projecto
            </button>
          </Link>

          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/t_Project1Renacer/v1701022632/Imagen_de_WhatsApp_2023-11-25_a_las_11.55.07_d28391c9_htfnw1.jpg"
            alt="Proyecto 1"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>
        <div className="relative mx-auto">
          <div className="absolute -right-8 top-12 h-32 w-2/3 rounded-lg bg-sky-800 text-2xl text-white opacity-50">
            <p className="text-md p-4">Projecto 2</p>
          </div>
          <Link href="/projects/project2">
            <button className="btn btn-accent absolute -bottom-4 right-0 p-2 text-white md:top-28">
              Ver projecto
            </button>
          </Link>

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
