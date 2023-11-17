import Image from "next/image";
import Link from "next/link";
import { IoLink } from "react-icons/io5";

export default function WidgetsProductsCard({ image, name, cost }) {
  return (
    <div className="flex items-center space-x-3">
      <Link
        href={"/"}
        className="border block group relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#000000b3] before:opacity-0 before:invisible before:transition-all before:duration-300 hover:before:opacity-100 hover:before:visible"
      >
        <Image width={90} src={image} />
        <div className="text-white text-xl absolute left-[50%] top-[50%] mt-5 -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:mt-0 group-hover:opacity-100 transition-all duration-500">
          <IoLink />
        </div>
      </Link>
      <div className="flex flex-col">
        <Link
          href={"/"}
          className="block font-mont font-bold hover:text-main-yellow transition-all duration-300"
        >
          {name}
        </Link>
        <span className="text-[#777]">${cost}</span>
      </div>
    </div>
  );
}
