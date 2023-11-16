import Image from "next/image";

export default function BrandsLogo({ image, brandStyle }) {
  return (
    <>
      <div
        className={`${brandStyle} border bg-white py-5 px-10 flex items-center justify-center`}
      >
        <Image className="max-w-full" src={image} />
      </div>
    </>
  );
}
