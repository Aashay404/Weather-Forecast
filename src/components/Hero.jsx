function Hero({ weather }) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  return (
    <div className="bg-[#151821] rounded-3xl px-16 py-16 border border-slate-800 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-slate-500 tracking-wide uppercase">
            Current Weather
          </p>

          <h1 className="text-4xl font-semibold mt-2">
            {weather.name}
          </h1>

          <p className="text-slate-500 mt-1">
            {today}
          </p>

          <div className="mt-10 text-[96px] leading-none font-bold">
            {Math.round(weather.main.temp)}°
          </div>

          <p className="text-slate-400 text-lg mt-4 capitalize">
            {weather.weather[0].description}
          </p>
        </div>

        <div className="text-[110px] opacity-90">
          ☀️
        </div>
      </div>
    </div>
  );
}

export default Hero;