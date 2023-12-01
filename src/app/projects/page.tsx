import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "projectos | RENACER",
  description: "Consejo comunitario",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ProjectPage() {
  return (
    <>
      <div>
        <h1 className="mt-32 text-center text-4xl font-bold text-lime-950">
          Proyectos
        </h1>
      </div>
      <div className="mx-auto mb-8 mr-4 mt-8 grid grid-cols-1 gap-16 bg-white p-8 py-2 md:grid-cols-2">
        {/*Projecto 1*/}
        <div className="relative mx-auto gap-2">
          <div className="absolute -right-8 top-8 h-32 w-2/3 rounded-lg bg-lime-300 text-2xl text-white opacity-50 md:h-40">
            <p className="p-4 text-sm font-bold text-black">
              Atrapasueños-ICBF
            </p>
          </div>
          <Link href="/projects/project1" className="text-white">
            <button className="btn absolute bottom-4 right-0 bg-lime-950 p-2 text-slate-50 md:top-28">
              Ver projecto
            </button>
          </Link>

          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1701362027/Slide_16_9_-_1_4_zetpdp.jpg"
            alt="Proyecto 1"
            width={500}
            height={350}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        {/*Projecto 2*/}
        <div className="relative mx-auto gap-2">
          <div className="absolute -right-8 top-8 h-32 w-2/3 rounded-lg bg-lime-300 text-2xl text-white opacity-50 md:h-40">
            <p className="p-4 text-sm font-bold text-black">Projecto 2</p>
          </div>
          <Link href="/projects/project2">
            <button className="btn absolute bottom-4 right-0 bg-lime-950 p-2 text-slate-50 md:top-28">
              Ver projecto
            </button>
          </Link>

          <Image
            src="https://res.cloudinary.com/dxa54qfxx/image/upload/v1701361495/Slide_16_9_-_1_2_om3mgs.jpg"
            alt="Proyecto 2"
            width={500}
            height={350}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </>
  );
}
