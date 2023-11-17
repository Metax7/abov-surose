import Link from "next/link";
import WidgetsTitle from "./WidgetsTitle";

export default function WidgetsSizes() {
  const sizesList = [
    { title: "Small Size", link: "/" },
    { title: "Medium Size", link: "/" },
    { title: "Large Size", link: "/" },
    { title: "Extra Size", link: "/" },
  ];

  return (
    <div className="space-y-7">
      <WidgetsTitle title="Sizes" />
      <div>
        <ul className="space-y-1">
          {sizesList.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.link}
                  className="text-[#777] hover:text-main-yellow transition-all duration-300"
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
