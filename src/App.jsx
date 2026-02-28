import { useState, useEffect } from "react";
import { getCurrentWeather, getAQI } from "./services/weatherService";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import InfoGrid from "./components/InfoGrid";


function App() {
  const [weather, setWeather] = useState(null);
  const [aqi, setAqi] = useState(null);

  useEffect(() => {
    fetchWeather("Mumbai"); // default city
  }, []);

  const fetchWeather = async (city) => {
    try {
      const weatherData = await getCurrentWeather(city);
      setWeather(weatherData);

      const { lat, lon } = weatherData.coord;
      const aqiData = await getAQI(lat, lon);
      setAqi(aqiData.list[0].main.aqi);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  const getAQILabel = (value) => {
    const map = {
      1: "Good",
      2: "Fair",
      3: "Moderate",
      4: "Poor",
      5: "Very Poor"
    };
    return map[value] || "-";
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric"
  });

  if (!weather) return null;

 return (
  <div className="min-h-screen bg-[#0c0f14] text-white px-10 py-14">
    <div className="max-w-6xl mx-auto">

      <SearchBar onSearch={fetchWeather} />   {/* NEW */}

      <Hero weather={weather} />

      <div className="mt-14" />

      <InfoGrid weather={weather} aqi={aqi} />

    </div>
  </div>
);
}

function Card({ title, value, desc, accent }) {
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

export default App;