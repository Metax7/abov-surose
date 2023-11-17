"use client";
import { ProductsData } from "@/data/ProductsData";
import ProductsCard from "./ProductsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function ProductsSlider({ filterCondition, slidesPerView }) {
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
              slidesPerView: slidesPerView,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {ProductsData.filter(filterCondition).map((product, index) => (
            <SwiperSlide key={index}>
              <div>
                <ProductsCard {...product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
