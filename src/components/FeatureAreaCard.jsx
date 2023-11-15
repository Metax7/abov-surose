export default function FeatureAreaCard({ icon, title, desc }) {
  return (
    <div className="flex items-center space-x-5">
      <div className="text-main-yellow text-5xl">{icon}</div>
      <div className="space-y-2">
        <h6 className="font-mont font-bold text-black text-lg">{title}</h6>
        <p className="font-open text-[#777] ">{desc}</p>
      </div>
    </div>
  );
}
