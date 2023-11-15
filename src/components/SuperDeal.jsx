import Image from "next/image";
import StandartContainer from "./StandartContainer";
import SuperDealText from "./SuperDealText";
import SuperDealImg from "@/assets/img/offer-image-1.png";

export default function SuperDeal() {
  const data = (
    <>
      <div className="flex max-lg:flex-col items-center max-lg:space-y-20 lg:space-x-32">
        <div className="lg:w-1/2 order-2 lg:order-1">
          <SuperDealText />
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <div className="flex items-center justify-center w-[270px] h-[270px] md:w-[450px] md:h-[450px] m-auto p-[20px] relative offer">
            <Image
              className="relative z-10"
              src={SuperDealImg}
              width={350}
              height={350}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="w-full bg-main-gray">
        <StandartContainer data={data} />
      </div>
    </>
  );
}
