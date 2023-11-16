import ShopWidgets from "./ShopWidgets";
import StandartContainer from "./StandartContainer";

export default function ShopSection() {
  const data = (
    <div>
      <div>
        <ShopWidgets />
      </div>
      <div></div>
    </div>
  );

  return <StandartContainer data={data} />;
}
