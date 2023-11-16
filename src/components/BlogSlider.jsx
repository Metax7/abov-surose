"use client";
import BlogCard from "./BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BlogImg1 from "@/assets/img/blog-image-1.jpg";
import BlogImg2 from "@/assets/img/blog-image-2.jpg";
import BlogImg3 from "@/assets/img/blog-image-3.jpg";
import BlogImg4 from "@/assets/img/blog-image-4.jpg";
import BlogImg5 from "@/assets/img/blog-image-5.jpg";

export default function BlogSlider() {
  const cardData = [
    {
      image: BlogImg1,
      month: "Apr",
      day: "17",
      title: "Woman wearing gold-colore ring pendant necklaces",
      autor: "Anderson",
      comments: "3 comments",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque reprehenderit amet quis laboriosam [...]",
    },
    {
      image: BlogImg2,
      month: "Apr",
      day: "17",
      title: "Shallow focus photo of person putting gold-colored ring",
      autor: "Anderson",
      comments: "3 comments",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque reprehenderit amet quis laboriosam [...]",
    },
    {
      image: BlogImg3,
      month: "Apr",
      day: "17",
      title: "Silver-colored tiara rings with clear gemstones",
      autor: "Anderson",
      comments: "3 comments",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque reprehenderit amet quis laboriosam [...]",
    },
    {
      image: BlogImg4,
      month: "Apr",
      day: "17",
      title: "Diamond ring is worn on top of the engagement band",
      autor: "Anderson",
      comments: "3 comments",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque reprehenderit amet quis laboriosam [...]",
    },
    {
      image: BlogImg5,
      month: "Apr",
      day: "17",
      title: "White gold engagement rings for couples",
      autor: "Anderson",
      comments: "3 comments",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus eaque reprehenderit amet quis laboriosam [...]",
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
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
        >
          {cardData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <BlogCard {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
