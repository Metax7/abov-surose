"use client";

import HeroImg from "@/components/HeroImg";
import MainBtn from "@/components/MainBtn";
import ProductsSlider from "@/components/ProductsSlider";
import ShopWidgets from "@/components/ShopWidgets";
import StandartContainer from "@/components/StandartContainer";
import { ProductsData } from "@/data/ProductsData";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage({ params }) {
  const [quantity, setQuantity] = useState(1);

  const pathName = params.slug.split("-");

  pathName.forEach((name, index, array) => {
    array[index] = name.charAt(0).toUpperCase() + name.slice(1);
  });

  const title = pathName.join(" ");

  const product = ProductsData.find((item) => item.slug === params.slug);

  const productInfo = [
    { name: "Product ID:", info: product.id },
    { name: "Category:", info: product.category },
    {
      name: "Avialible:",
      info: product.soldOut ? (
        <span className="text-red-500 font-semibold">Sold Out</span>
      ) : (
        <span className="text-main-yellow font-semibold"> In Stock</span>
      ),
    },
    { name: "Share:", info: "#" },
  ];

  const condition = (products) => products.category === product.category;

  const data = (
    <div className="flex max-lg:flex-col lg:space-x-5">
      <div className="lg:w-1/5 max-lg:order-2">
        <ShopWidgets />
      </div>
      <div className="lg:w-4/5 max-lg:order-1 space-y-10">
        <div className="flex max-md:flex-col max-md:space-y-5 space-x-5">
          <div className="border">
            <Image
              className="h-full object-cover"
              src={product.image}
              width={1300}
              height={1000}
            />
          </div>
          <div className="space-y-5">
            <div>
              <h1 className="font-mont font-bold text-lg">{product.name}</h1>
              <span className="text-main-yellow font-bold">
                ${product.cost}
              </span>
            </div>
            <div>
              <ul>
                {productInfo.map((item, index) => {
                  return (
                    <li key={index} className="space-x-2">
                      <span className="font-bold">{item.name}</span>
                      <span className="uppercase">{item.info}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="text-[#777] border-t border-b py-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                numquam adipisci dolorum corrupti accusantium! Doloremque quod
                incidunt architecto, fuga enim doloribus ex sunt quia, excepturi
                aspernatur et cum animi dolores.
              </p>
            </div>
            <div className="flex max-lg:flex-col max-lg:space-y-5 items-center justify-evenly">
              <div className="text-xl">Quantity :</div>
              <div className="relative inline-block w-[80px]">
                <div className="pl-[5px] pr-[30px] h-[50px] w-full border flex items-center justify-center">
                  <span>{quantity}</span>
                </div>
                <div>
                  <button
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    className="absolute top-auto bottom-0 right-0 border h-[25.5px] w-[25px] text-center leading-[23px]"
                  >
                    -
                  </button>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="absolute top-0 right-0 border h-[25.5px] w-[25px] text-center leading-[23px]"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <MainBtn btnName="Add To Cart" />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-2xl font-mont font-bold">Product Description</h1>
          <p className="pl-5 text-[#777]">{product.description}</p>
        </div>
        <div className="space-y-5">
          <h1 className="font-mont font-bold text-2xl">Simillar Products</h1>
          <div>
            <ProductsSlider filterCondition={condition} slidesPerView={3} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HeroImg>
        <li>/</li>
        <li>{title}</li>
      </HeroImg>
      <StandartContainer data={data} />
    </>
  );
}
