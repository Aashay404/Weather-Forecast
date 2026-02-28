import InfoCard from "./InfoCard";

function InfoGrid({ weather, aqi }) {

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

      <InfoCard
        title="Wind"
        value={`${weather.wind.speed} km/h`}
        desc="Wind speed"
      />

      <InfoCard
        title="Air Quality"
        value={aqi || "-"}
        desc={getAQILabel(aqi)}
        accent="text-amber-400"
      />

      <InfoCard
        title="Humidity"
        value={`${weather.main.humidity}%`}
        desc="Moisture level"
      />

      <InfoCard
        title="Visibility"
        value={`${weather.visibility / 1000} km`}
        desc="Atmospheric clarity"
      />

      <InfoCard
        title="Feels Like"
        value={`${Math.round(weather.main.feels_like)}°`}
        desc="Perceived temperature"
      />

    </div>
  );
}

export default InfoGrid;