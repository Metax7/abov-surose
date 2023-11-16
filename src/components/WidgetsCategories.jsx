import Link from "next/link";
import WidgetsTitle from "./WidgetsTitle";

export default function WidgetsCategories() {
  const categoriesList = [
    { title: "Make Up", link: "/" },
    { title: "Leapstick", link: "/" },
    { title: "Face Powder", link: "/" },
    { title: "Eyeliner", link: "/" },
    { title: "Maskara", link: "/" },
    { title: "Foundation", link: "/" },
  ];

  return (
    <div className="">
      <WidgetsTitle title="Categories" />
      <ul className="mt-3">
        {categoriesList.map((item, index) => {
          return (
            <li key={index} className="">
              <Link href={item.link} className="block font-open font-normal text-[#777] py-3 border-b-2 border-dotted">
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
