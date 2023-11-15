import MainBtn from "./MainBtn";

export default function SuperDealText() {
  const time = [
    {
      count: 0,
      time: "Days",
    },
    {
      count: 0,
      time: "Hours",
    },
    {
      count: 0,
      time: "Minutes",
    },
    {
      count: 0,
      time: "Seconds",
    },
  ];

  return (
    <div className="space-y-10">
      <span className="font-medium">Super deal of the Month</span>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-mont font-bold ">
        Brand ear ring on <span className="text-main-yellow">$250</span> only
      </h1>
      <div className="flex flex-wrap gap-5">
        {time.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className={`text-center bg-white shadow-lg p-6 ${
                  index === 0 || index === 1 ? "py-6 px-8" : ""
                }`}
              >
                <div className="text-4xl font-bold ">{item.count}</div>
                <div className="text-[#777] font-light">{item.time}</div>
              </div>
            </>
          );
        })}
      </div>
      <div>
        <MainBtn btnName="Shop now" btnLink={"/"} />
      </div>
    </div>
  );
}
