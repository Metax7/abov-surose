import WidgetsCategories from "./WidgetsCategories";
import WidgetsFilter from "./WidgetsFilter";
import WidgetsProducts from "./WidgetsProducts";
import WidgetsSizes from "./WidgetsSizes";

export default function ShopWidgets(props) {
  return (
    <div className="space-y-7">
      <WidgetsCategories />
      <WidgetsFilter onFilterUpdate={props.onFilterUpdate} />
      <WidgetsProducts />
      <WidgetsSizes />
    </div>
  );
}
