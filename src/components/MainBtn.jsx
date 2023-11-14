import Link from "next/link";

export default function MainBtn({ btnName, btnLink }) {
  return (
    <Link
      href={`${btnLink}`}
      className="relative z-10 before:absolute before:w-full before:h-full before:bg-black before:-top-full before:left-0 before:-z-10 inline-block px-6 py-3 bg-main-yellow text-white font-bold font-open rounded-md overflow-hidden hover:before:top-0 before:transition-all before:duration-300 before:ease-in-out"
    >
      {btnName}
    </Link>
  );
}
