"use client";
import { useState } from "react";
import ReactSlider from "react-slider";
import WidgetsTitle from "./WidgetsTitle";

export default function WidgetsFilter(props) {
  const [priceRange, setPriceRange] = useState([0, 550]);

  const handleSliderChange = (newRange) => {
    setPriceRange(newRange);
    if (props.onFilterUpdate) {
      props.onFilterUpdate({ priceRange: newRange });
    }
  };

  return (
    <div className="space-y-7">
      <WidgetsTitle title="Filter by Price" />
      <div>
        <ReactSlider
          className="relative"
          thumbClassName="bg-main-yellow w-4 h-4 rounded-full text-transparent outline-none cursor-pointer -top-1"
          trackClassName="py-1 rounded-xl bg-[#969696]"
          defaultValue={priceRange}
          onChange={handleSliderChange}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
          max={550}
        />
      </div>
      <div className="flex items-center justify-between pt-7">
        <div className="text-[#707070] font-open font-bold">
          Price: $<span className="font-normal">{priceRange[0]}</span> - $
          <span className="font-normal">{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
