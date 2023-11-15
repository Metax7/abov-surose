import Image from "next/image";
import FooterLogo from "@/assets/img/logo.png";

export default function FooterContacts() {
  return (
    <div className="space-y-3">
      <div>
        <Image src={FooterLogo} alt="" />
      </div>
      <p className="pr-5 text-[#777]">
        Lorem ipsum dolor sit amet, consect etur adipiscing elit.
      </p>
      <div className="space-y-3">
        <div className="relative pl-[74px] text-[#777] md:pr-5 lg:pr-0">
          <b className="absolute top-0 left-0 text-black">Address :</b>
          2726 Avenue Papineau Montreal, QC, Canada
        </div>
        <div className="relative pl-[74px]">
          <b className="absolute top-0 left-0">Phone :</b>
          <a
            href="tel:+18009156270"
            className="text-[#777] hover:text-main-yellow transition-all duration-300"
          >
            1-800-915-6270
          </a>
        </div>
        <div className="relative pl-[74px]">
          <b className="absolute top-0 left-0">Email :</b>
          <a
            href="mailto:info@example.com"
            className="text-[#777] hover:text-main-yellow transition-all duration-300"
          >
            info@example.com
          </a>
        </div>
      </div>
    </div>
  );
}
