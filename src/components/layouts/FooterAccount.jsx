import Link from "next/link";
import FooterTitle from "./FooterTitle";
import { IoMdArrowDropright } from "react-icons/io";

export default function FooterAccount() {
  const accountList = [
    { title: "My Account", link: "/" },
    { title: "Cart", link: "/" },
    { title: "Wishlist", link: "/" },
    { title: "Newsletter", link: "/" },
    { title: "Check out", link: "/" },
    { title: "Frequently Questions", link: "/" },
  ];

  return (
    <div className="space-y-7">
      <FooterTitle title="My Account" />
      <ul className="space-y-1 text-[#777]">
        {accountList.map((item, index) => {
          return (
            <li className="relative group" key={index}>
              <span className="absolute text-2xl top-0 -left-2 opacity-0 group-hover:opacity-100 group-hover:text-main-yellow transition-all duration-500">
                <IoMdArrowDropright />
              </span>
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
