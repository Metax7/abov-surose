import FeatureAreaCard from "./FeatureAreaCard";
import StandartContainer from "./StandartContainer";
import { SlPlane } from "react-icons/sl";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

export default function HomeFeatureArea() {
  const areaCardData = [
    {
      icon: <SlPlane />,
      title: "Free Shipping",
      desc: "We provide free shipping for all order over $200.00",
    },
    {
      icon: <LiaShippingFastSolid />,
      title: "Fast Delivery",
      desc: "We always deliver our customers very quickly.",
    },
    {
      icon: <MdSupportAgent />,
      title: "24/7 Support",
      desc: "We provide support to our customers within 24 hours. ",
    },
  ];

  const data = (
    <div className="flex max-lg:flex-col justify-center gap-10">
      {areaCardData.map((item, index) => {
        return <FeatureAreaCard key={index} {...item} />;
      })}
    </div>
  );

  return (
    <div className="w-full bg-main-gray py-14">
      <StandartContainer data={data} />
    </div>
  );
}
