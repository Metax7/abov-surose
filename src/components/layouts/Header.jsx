"use client";
import Image from "next/image";
import Logo from "@/assets/img/logo.png";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineMenu } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  const headerMenu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/",
    },
    {
      title: "Shop",
      link: "/",
    },
    {
      title: "Pages",
      link: "/",
    },
    {
      title: "Blog",
      link: "/",
    },
    {
      title: "Contact",
      link: "/",
    },
  ];

  const iconList = [
    { icon: <AiOutlineHeart />, link: "/" },
    { icon: <BsHandbag />, link: "/" },
    { icon: <AiOutlineMenu />, link: "/" },
  ];

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-7 sm:px-20 xl:px-0">
        <div className="relative flex flex-wrap items-center justify-between py-5">
          <div className="max-md:order-1">
            <Link href={"/"}>
              <Image className="max-sm:w-32" src={Logo} />
            </Link>
          </div>
          <div className="max-md:order-3 w-[500px] max-md:mx-auto max-md:mt-3">
            <form
              action=""
              className="border rounded-full flex justify-between items-center overflow-hidden"
            >
              <input
                type="text"
                name=""
                id=""
                placeholder="Search product..."
                className="w-full h-full pl-5 outline-none"
              />
              <button
                type="submit"
                className="bg-black hover:bg-main-yellow text-white text-2xl py-3 px-4 transition-all duration-300"
              >
                <AiOutlineSearch />
              </button>
            </form>
          </div>
          <div className="max-md:order-2">
            <ul className="flex text-xl md:text-2xl space-x-2">
              {iconList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={`${index === 2 ? "md:hidden" : ""}`}
                    onClick={() =>
                      index === 2 ? setOpenMenu((prev) => !prev) : null
                    }
                  >
                    <Link
                      href={item.link}
                      className="hover:text-main-yellow transition-all duration-300"
                    >
                      {item.icon}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            className={
              openMenu
                ? "absolute opacity-0 invisible scale-0 overflow-hidden top-16 right-0 md:hidden transition-all duration-300"
                : "absolute opacity-100 visible scale-110 overflow-hidden top-16 right-0 md:hidden transition-all duration-300"
            }
          >
            <ul className="w-56 bg-slate-50 font-mont border">
              {headerMenu.map((item, index) => {
                return (
                  <li className="border-b" key={index}>
                    <Link
                      href={item.link}
                      className="hover:text-main-yellow transition-all block px-3 py-2 duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full border shadow-[0_2px_2px_rgba(0,0,0,.11)]">
        <div className="max-w-screen-xl px-7 sm:px-20 xl:px-0 mx-auto p-4 hidden md:block">
          <div className="flex justify-center">
            <ul className="flex space-x-8 font-open font-semibold">
              {headerMenu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      href={item.link}
                      className="hover:text-main-yellow transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
