import StandartContainer from "./StandartContainer";
import BannerImg1 from "@/assets/img/banner-image-1.jpg";
import BannerImg2 from "@/assets/img/banner-image-2.jpg";
import BannerImg3 from "@/assets/img/banner-image-3.jpg";
import Image from "next/image";

export default function HomeBanners() {
  const banners = [
    {
      image: BannerImg1,
    },
    {
      image: BannerImg2,
    },
    {
      image: BannerImg3,
    },
  ];
  return (
    <>
      <div className="max-w-screen-xl px-7 sm:px-20 xl:px-0 mx-auto">
        <div className="flex max-md:flex-col items-center max-xl:gap-5 justify-between">
          {banners.map((item, index) => {
            return (
              <div key={index}>
                <Image src={item.image} width={400} height={400} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
