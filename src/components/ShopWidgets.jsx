import WidgetsCategories from "./WidgetsCategories";
import WidgetsFilter from "./WidgetsFilter";

export default function ShopWidgets() {
  return (
    <div className="space-y-7">
      <WidgetsCategories />
      <WidgetsFilter />
    </div>    
  );
}
