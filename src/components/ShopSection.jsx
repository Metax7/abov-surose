'use client'

import { useState } from "react";
import ShopProducts from "./ShopProducts";
import ShopWidgets from "./ShopWidgets";
import StandartContainer from "./StandartContainer";

export default function ShopSection() {
  const [filter, setFilter] = useState({ priceRange: [0, 800] });

  const updateFilter = (newFilter) => {
    setFilter(newFilter);
  };

  const data = (
    <div className="flex max-lg:flex-col lg:space-x-5">
      <div className="lg:w-1/5 max-lg:order-2">
        <ShopWidgets onFilterUpdate={updateFilter} />
      </div>
      <div className="lg:w-4/5 max-lg:order-1 max-lg:mb-20">
        <ShopProducts filter={filter} />
      </div>
    </div>
  );

  return <StandartContainer data={data} />;
}
