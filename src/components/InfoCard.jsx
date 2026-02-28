function InfoCard({ title, value, desc, accent }) {
  return (
    <div className="bg-[#14171f] p-7 rounded-2xl border border-slate-800 hover:border-slate-600 transition duration-300">
      <p className="text-slate-500 text-xs uppercase tracking-wider">
        {title}
      </p>

      <div className={`text-2xl font-semibold mt-3 ${accent || ""}`}>
        {value}
      </div>

      <p className="text-slate-600 mt-2 text-sm">
        {desc}
      </p>
    </div>
  );
}

export default InfoCard;