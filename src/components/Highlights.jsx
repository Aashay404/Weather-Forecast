function Highlights({ data }) {
  return (
    <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700">
      <h3 className="text-lg font-semibold mb-4">
        Today's Highlights
      </h3>

      <div className="grid grid-cols-2 gap-4">
        <Card label="Humidity" value={`${data.main.humidity}%`} />
        <Card label="Wind Speed" value={`${data.wind.speed} m/s`} />
        <Card label="Pressure" value={`${data.main.pressure} hPa`} />
        <Card label="Visibility" value={`${data.visibility / 1000} km`} />
      </div>
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="bg-[#111827] p-4 rounded-xl border border-slate-600">
      <p className="text-slate-400 text-sm">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}

export default Highlights;