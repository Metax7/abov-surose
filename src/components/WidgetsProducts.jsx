import { ProductsData } from "@/data/ProductsData";
import WidgetsTitle from "./WidgetsTitle";
import WidgetsProductsCard from "./WidgetsProductsCard";

export default function WidgetsProducts() {
  return (
    <div className="space-y-7">
      <WidgetsTitle title="Popular Product" />
      <div className="space-y-5">
        {ProductsData.filter((product) => product.popular === true)
          .slice(0, 3)
          .map((product) => (
            <WidgetsProductsCard key={product.id} {...product} />
          ))}
      </div>
    </div>
  );
}
