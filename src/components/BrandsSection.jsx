import BrandsSlider from "./BrandsSlider";
import StandartContainer from "./StandartContainer";

export default function BrandsSection() {
  const data = (
    <div>
      <BrandsSlider />
    </div>
  );

  return (
    <div className="w-full bg-main-gray">
      <StandartContainer data={data} />
    </div>
  );
}
