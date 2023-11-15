import ProductsSlider from "./ProductsSlider";
import StandartContainer from "./StandartContainer";
import Title from "./Title";

export default function PopularProducts() {
  const data = (
    <>
      <div className="space-y-24">
        <Title
          title="POPULAR PRODUCTS"
          subTitle="Our popular products are so beautyful to see that the shoppers are easily attracted to them."
        />
        <div>
          <ProductsSlider />
        </div>
      </div>
    </>
  );

  return <StandartContainer data={data} />;
}
