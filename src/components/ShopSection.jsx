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
    <div className="flex space-x-5">
      <div className="w-1/5">
        <ShopWidgets onFilterUpdate={updateFilter} />
      </div>
      <div className="w-4/5">
        <ShopProducts filter={filter} />
      </div>
    </div>
  );

  return <StandartContainer data={data} />;
}
