import Image from "next/image";
import { AiFillEye, AiFillHeart } from "react-icons/ai";

export default function ProductsCard(props) {
  return (
    <>
      <div className="flex justify-center ml-3 lg:ml-0">
        <div className="flex flex-col group">
          <div className="relative overflow-hidden">
            <Image width={300} height={300} src={props.image} alt="" />
            <div className="absolute top-[15px] left-[10px]">
              <div>
                {props.sale ? (
                  <div className="px-3 bg-main-yellow text-sm text-white mb-1">
                    SALE
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div>
                {props.new ? (
                  <div className="px-3 bg-main-yellow text-sm text-white">
                    New
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="absolute group-hover:bottom-[10px] opacity-0 group-hover:opacity-100 flex text-lg -bottom-[50px] left-[60px] space-x-1 transition-all duration-500">
              <a
                className="block text-sm p-3 bg-main-yellow rounded-sm text-white"
                href="#"
              >
                Add to cart
              </a>
              <a
                className="block p-3 bg-main-yellow rounded-sm text-white"
                href="#"
              >
                <AiFillHeart />
              </a>
              <a
                className="block p-3 bg-main-yellow rounded-sm text-white"
                href="#"
              >
                <AiFillEye />
              </a>
            </div>
            <div className="absolute top-[15px] right-[10px]">
              {props.soldOut ? (
                <div className="bg-black px-2 text-sm text-white">Sold out</div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="p-7">
            <h4 className="font-prata text-black text-xl">{props.name}</h4>
            <div className="flex items-center justify-between">
              <div className="font-bold text-main-yellow text-lg font-rubik">
                ${props.cost}
              </div>
              {/* <a
                className="text-main-yellow text-xl relative translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
                href="#"
              >
                <AiOutlineArrowRight />
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
