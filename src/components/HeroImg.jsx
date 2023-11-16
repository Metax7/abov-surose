import Link from "next/link";
import StandartContainer from "./StandartContainer";

export default function HeroImg() {
  const data = (
    <div className="font-mont text-white space-y-5">
      <h2 className="font-bold text-4xl">Products</h2>
      <ul className="flex space-x-2">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>/</li>
        <li>Shop</li>
      </ul>
    </div>
  );

  return (
    <>
      <div className="w-full bg-hero-bg bg-cover bg-center bg-no-repeat">
        <StandartContainer data={data} />
      </div>
    </>
  );
}
