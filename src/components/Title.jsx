export default function Title({ title, subTitle }) {
  return (
    <div className="max-w-screen-sm mx-auto text-center space-y-5">
      <h1 className="text-2xl sm:text-3xl font-mont font-bold text-black">
        {title}
      </h1>
      <h3 className="text-[#777] sm:px-20 font-open">{subTitle}</h3>
    </div>
  );
}
