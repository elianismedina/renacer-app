"use client";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Inicio",
    page: "/",
  },
  {
    label: "El consejo",
    page: "/concejo",
  },
  {
    label: "Proyectos",
    page: "projectos",
  },
  {
    label: "Donaciones",
    page: "donaciones",
  },
  {
    label: "Noticias",
    page: "noticias",
  },
  {
    label: "Contacto",
    page: "/contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="fixed top-0 z-40 mx-auto w-full bg-slate-50 px-2 text-black shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="ml-6 flex items-center justify-between py-3">
            <div className="md:block md:py-2">
              <Image
                className="ml-16 cursor-pointer hover:opacity-75"
                src="/images/Vector.svg"
                alt="logo"
                width={100}
                height={100}
                priority={true}
              />
            </div>
            <div className="mr-6 mt-0 p-6 px-6 md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={20} /> : <IoMdMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-2 md:mt-0 md:block md:pb-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="mb-12 ml-6 items-center justify-center space-y-8 sm:mb-0 sm:space-x-10 sm:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    href={item.page}
                    className={
                      "block font-bold text-lime-950 hover:text-neutral-500 dark:text-neutral-100 lg:inline-block"
                    }
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
