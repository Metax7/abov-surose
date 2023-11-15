import Image from "next/image";
import StandartContainer from "../StandartContainer";
import FooterAccount from "./FooterAccount";
import FooterContacts from "./FooterContacts";
import FooterNewsletter from "./FooterNewsletter";
import FooterUseful from "./FooterUseful";
import FooterPayImg from "@/assets/img/payment-methods.png";

export default function Footer() {
  const footer = (
    <div className="flex max-md:flex-col md:flex-wrap max-md:space-y-7 font-open">
      <div className="md:w-2/4 lg:w-1/4">
        <FooterContacts />
      </div>
      <div className="md:w-2/4 lg:w-1/4">
        <FooterUseful />
      </div>
      <div className="md:w-2/4 lg:w-1/4 md:mt-10 lg:m-0">
        <FooterAccount />
      </div>
      <div className="md:w-2/4 lg:w-1/4 md:mt-10 lg:m-0">
        <FooterNewsletter />
      </div>
    </div>
  );

  const data = (
    <div className="flex max-sm:flex-col text-center max-sm:space-y-2 sm:justify-between">
      <div className="text-[#777]">© 2019. Designed by <b>ThemeMarch</b></div>
      <div className="max-sm:mx-auto">
        <Image src={FooterPayImg} alt=""/>
      </div>
    </div>
  );

  return (
    <>
      <StandartContainer data={footer} />
      <div className="w-full border-t">
        <StandartContainer data={data} />
      </div>
    </>
  );
}
