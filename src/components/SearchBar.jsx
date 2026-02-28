import { useState, useEffect } from "react";
import { getCitySuggestions } from "../services/weatherService";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const data = await getCitySuggestions(query);
        setSuggestions(data);
      } catch (error) {
        console.error(error);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSelect = (city) => {
    onSearch(city.name);
    setQuery("");
    setSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-md mb-12">

      <input
        type="text"
        placeholder="Search city..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-5 py-3 rounded-xl bg-[#14171f] border border-slate-800 focus:outline-none focus:border-slate-600"
      />

      {suggestions.length > 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-[#14171f] border border-slate-800 rounded-xl shadow-lg z-50">

          {suggestions.map((city, index) => (
            <div
              key={index}
              onClick={() => handleSelect(city)}
              className="px-5 py-3 hover:bg-[#1f2330] cursor-pointer transition"
            >
              {city.name}
              {city.state ? `, ${city.state}` : ""}, {city.country}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SearchBar;