"use client";
import { ProductsData } from "@/data/ProductsData";
import ProductsCard from "./ProductsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function ProductsSlider() {
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
          {ProductsData.filter((product) => product.popular === true).map(
            (product, index) => (
              <SwiperSlide key={index}>
                <div>
                  <ProductsCard {...product} />
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </>
  );
}
