export default function WidgetsTitle({title}) {
  return (
    <h1 className="relative font-mont font-semibold text-xl pb-3 after:absolute after:left-0 after:bottom-0 after:w-16 after:h-[2px] after:bg-main-yellow">
      {title}
    </h1>
  );
}
