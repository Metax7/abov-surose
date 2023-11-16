import Image from "next/image";
import Link from "next/link";
import { FaUser, FaComments } from "react-icons/fa";

export default function BlogCard({
  title,
  image,
  autor,
  comments,
  desc,
  month,
  day,
}) {
  return (
    <>
      <div className="space-y-3">
        <div className="relative overflow-hidden">
          <Image src={image} className="w-full h-full" />
          <div className="absolute left-0 top-0 bg-main bg-black text-center text-white font-mont font-semibold text-3xl overflow-hidden pl-[30px] w-[100px] h-[70px] leading-[70px]">
            <span className="bg-main-yellow absolute left-0 top-[50%] text-[16px] transform w-full h-[30px] -translate-x-[35%] -translate-y-[50%] -rotate-90 leading-[30px]">
              {month}
            </span>
            {day}
          </div>
        </div>
        <div className="space-y-5">
          <Link
            href={"/"}
            className="font-mont font-bold text-xl hover:text-main-yellow transition-all duration-300"
          >
            {title}
          </Link>
          <div className="space-x-6 flex text-[#777]">
            <Link
              href={"/"}
              className="flex items-center hover:text-main-yellow transition-all duration-300"
            >
              <FaUser className="mr-2 text-main-yellow" /> {autor}
            </Link>
            <Link
              href={"/"}
              className="flex items-center hover:text-main-yellow transition-all duration-300"
            >
              <FaComments className="mr-2 text-main-yellow" /> {comments}
            </Link>
          </div>
          <p className="text-[#777]">{desc}</p>
          <Link
            href={"/"}
            className="block font-bold hover:text-main-yellow transition-all duration-300"
          >
            Read More {">"}
          </Link>
        </div>
      </div>
    </>
  );
}
