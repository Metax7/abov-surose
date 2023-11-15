"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";
import Image from "next/image";
import HeroSliderImg1 from "@/assets/img/heroslider-image-1.jpg";
import HeroSliderImg2 from "@/assets/img/heroslider-image-2.jpg";
import MainBtn from "./MainBtn";

export default function HomeHeroSlider() {
  const sliderImg = [
    {
      image: HeroSliderImg1,
      title: "Woman’s Jewellery Collection",
      desc: "Jewellery may be made from a wide range of materials. Jewellery has been made to adorn nearly every body part from hairpins to toe.",
      btn: <MainBtn btnName="Shop Now" btnLink={"/"} />,
    },
    {
      image: HeroSliderImg2,
      title: "Woman’s Jewellery Collection",
      desc: "Jewellery may be made from a wide range of materials. Jewellery has been made to adorn nearly every body part from hairpins to toe.",
      btn: <MainBtn btnName="Shop Now" btnLink={"/"} />,
    },
  ];

  return (
    <div className="w-full h-full">
      <Swiper
        spaceBetween={false}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        parallax={true}
        speed={2500}
        modules={[Parallax, Pagination, Autoplay]}
      >
        {sliderImg.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                style={{ backgroundImage: `url(${item.image.src})` }}
                className="relative w-full h-full bg-cover bg-[200%] sm:bg-center py-52 max-sm:after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#ffffffb3]"
              >
                <div className="relative z-20 max-w-screen-xl mx-auto px-7 sm:px-20 xl:px-0">
                  <div className="w-[600px] overflow-hidden">
                    <div className="space-y-5 relative">
                      <h1
                        data-swiper-parallax="-400"
                        className="text-4xl sm:text-5xl font-mont font-bold max-sm:pr-80"
                      >
                        {item.title}
                      </h1>
                      <p
                        data-swiper-parallax="-300"
                        className="text-lg font-open max-sm:pr-80"
                      >
                        {item.desc}
                      </p>
                      <div data-swiper-parallax="-200">{item.btn}</div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
