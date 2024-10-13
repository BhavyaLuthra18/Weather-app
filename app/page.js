"use client";

import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import Weather from "@/components/Weather";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, SetWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = async (e) => {
    e.preventDefault();

    // Check if the city input is not empty after trimming whitespace
    if (!city.trim()) {
      SetWeather(null);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(url);
      SetWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
      SetWeather(null);
    }
    setLoading(false);
  };

  // useEffect to reset weather state whenever the city state changes
  useEffect(() => {
    SetWeather(null);
  }, [city]);

  return (
    <>
      <main className="flex flex-col min-h-screen items-center justify-between relative">
        {/*Overlay*/}
        <div className="absolute left-0 top-0 right-0 bottom-0 bg-black/40 z-[1]" />

        {/*Background*/}
        <Image
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/63076398938995.5f6bcd7a7e218.png"
          alt="Weather background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-[-1] overflow-x-hidden w-full h-full"
        />

        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[400px] w-full m-auto text-white z-10 pt-4">
          {" "}
          {/* Added pt-4 for spacing */}
          <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-xl"
          >
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-xl sm:text-xl md:text-2xl lg:text-2xl font-mono"
              type="text"
              placeholder="Search city"
            />
            <button onClick={fetchWeather}>
              <BiSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}
        <div className="flex-grow flex items-center justify-center pt-8">
          {" "}
          {/* Added flex-grow and pt-8 to adjust positioning */}
          {city.trim() && weather && weather.weather ? (
            <Weather data={weather} />
          ) : null}
        </div>
      </main>
    </>
  );
}
