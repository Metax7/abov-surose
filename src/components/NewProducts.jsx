import { ProductsData } from "@/data/ProductsData";
import StandartContainer from "./StandartContainer";
import Title from "./Title";
import ProductsCard from "./ProductsCard";
import MainBtn from "./MainBtn";

export default function NewProducts() {
  const data = (
    <>
      <Title
        title="NEW ARRVAL PRODUCTS"
        subTitle="Our popular products are so beautyful to see that the shoppers are easily attracted to them."
      />
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {ProductsData.filter((product) => product.new === true).map(
          (product) => {
            return <ProductsCard key={product.id} {...product} />;
          }
        )}
      </div>
      <div className="flex justify-center">
        <MainBtn btnName="All Products" btnLink={"/"} />
      </div>
    </>
  );

  return <StandartContainer data={data} />;
}
