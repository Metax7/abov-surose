"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BrandLogo1 from "@/assets/img/brandlogo-1.png";
import BrandLogo2 from "@/assets/img/brandlogo-2.png";
import BrandLogo3 from "@/assets/img/brandlogo-3.png";
import BrandLogo4 from "@/assets/img/brandlogo-4.png";
import BrandLogo5 from "@/assets/img/brandlogo-5.png";
import BrandsLogo from "./BrandsLogo";

export default function BrandsSlider() {
  const brandLogo = [
    {
      image: BrandLogo1,
      brandStyle: "py-[23px]",
    },
    {
      image: BrandLogo2,
      brandStyle: "py-[22px]",
    },
    {
      image: BrandLogo3,
    },
    {
      image: BrandLogo4,
      brandStyle: "py-[23px]",
    },
    {
      image: BrandLogo5,
      brandStyle: "py-[24px]",
    },
  ];

  return (
    <>
      <div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          speed={1500}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {brandLogo.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BrandsLogo {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
