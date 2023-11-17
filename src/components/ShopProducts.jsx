import { ProductsData } from "@/data/ProductsData";
import ProductsCard from "./ProductsCard";

export default function ShopProducts({ filter }) {
  const filteredProducts = ProductsData.filter((product) => {
    return (
      product.cost >= filter.priceRange[0] &&
      product.cost <= filter.priceRange[1]
    );
  });

  return (
    <>
      <div className="space-y-12">
        <from className="flex max-md:flex-col max-lg:space-y-2 justify-between items-center">
          <p className="text-[#777]">
            Showing {filteredProducts.length} products of {ProductsData.length}
          </p>
          <select
            name=""
            id=""
            className="border outline-none px-5 py-3 text-[#777]"
          >
            <option value="default">Default Sorting</option>
            <option value="name">Name A-Z</option>
            <option value="date">Date</option>
            <option value="best">Best Sellers</option>
            <option value="trending">Trending</option>
          </select>
        </from>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((item) => {
            return <ProductsCard key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
