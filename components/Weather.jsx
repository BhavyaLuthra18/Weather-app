import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[400px] max-h-[800px]  w-full   text-gray-300 z-10 ">
        {/*Top*/}
        <div className="relative flex justify-between mb-16">
          <div className="flex flex-col items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              width="60"
              height="60"
              className="overflow-x-hidden"
            />
            <p className="text-2xl font-mono">{data.weather[0].main}</p>
          </div>
          <p className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-mono mb-6">
            {data.main.temp.toFixed(0)}&#176;
          </p>
        </div>
        {/*Bottom*/}
        <div className="bg-black/80 relative p-4 sm:p-4 md:p-8 lg:p-8 rounded-md ">
          <p className="text-xl sm:text-xl md:text-3xl lg-text-3xl text-center font-bold  font-mono">
            Weather in {data.name}
          </p>
          <div className="flex justify-between text-center ">
            <div className="p-2">
              <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl font-mono p-2">
                {data.main.feels_like.toFixed(0)}&#176;
              </p>
              <p className="text-sm sm:text-sm md:text-xl lg:text-xl  font-mono">
                Feels Like
              </p>
            </div>
            <div className="p-2">
              <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl font-mono p-2">
                {data.main.humidity}%
              </p>
              <p className="text-sm sm:text-sm md:text-xl lg:text-xl font-mono">
                Humidity
              </p>
            </div>
            <div className="p-2">
              <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-2xl font-mono p-2">
                {data.wind.speed.toFixed(0)}&#176;
              </p>
              <p className="text-sm sm:text-sm md:text-xl lg:text-xl  font-mono">
                Winds
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
