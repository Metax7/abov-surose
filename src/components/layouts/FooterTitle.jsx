export default function FooterTitle({title}) {
  return (
    <h1 className="relative font-mont font-semibold text-black text-xl pb-3 before:absolute before:h-[1px] before:w-16 before:bg-black before:bottom-0 before:left-0">
      {title}
    </h1>
  );
}
