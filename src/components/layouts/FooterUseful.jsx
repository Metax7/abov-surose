import Link from "next/link";
import FooterTitle from "./FooterTitle";
import { IoMdArrowDropright } from "react-icons/io";

export default function FooterUseful() {
  const linkList = [
    { title: "About Us", link: "/" },
    { title: "Delivery Info", link: "/" },
    { title: "Privacy & Policy", link: "/" },
    { title: "Returns & Refunds", link: "/" },
    { title: "Terms & Conditions", link: "/" },
    { title: "Contact Us", link: "/" },
  ];

  return (
    <div className="space-y-7">
      <FooterTitle title="Useful Link" />
      <ul className="space-y-1 text-[#777]">
        {linkList.map((item, index) => {
          return (
            <li className="relative group" key={index}>
              <span className="absolute text-2xl top-0 -left-2 opacity-0 group-hover:opacity-100 group-hover:text-main-yellow transition-all duration-500">
                <IoMdArrowDropright />
              </span>{" "}
              <Link
                href={item.link}
                className="relative block hover:translate-x-3 hover:text-main-yellow transition-all duration-500"
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
