import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getCurrentWeather = async (city) => {
  const res = await axios.get(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return res.data;
};

export const getAQI = async (lat, lon) => {
  const res = await axios.get(
    `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return res.data;
};

export const getCitySuggestions = async (query) => {
  const res = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
  );
  return res.data;
};