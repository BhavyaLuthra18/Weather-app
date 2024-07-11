import Image from "next/image";
import React from "react";

const Weather = ({ data }) => {
  return (
    <>
      <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10">
        {/*Top*/}
        <div className="relative flex justify-between pt-12">
          <div className="flex flex-col items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.weather[0].description}
              width="100"
             height="100"
            />
            <p className="text-2xl font-mono">{data.weather[0].main}</p>
          </div>
          <p className="text-8xl font-mono">
            {data.main.temp.toFixed(0)}&#176;
          </p>
        </div>
        {/*Bottom*/}
        <div className="bg-black/80 relative p-8 rounded-md">
          <p className="text-3xl text-center font-bold pb-6 font-mono">
            Weather in {data.name}
          </p>
          <div className="flex justify-between text-center p-18 ">
            <div className="p-2">
              <p className="font-bold text-2xl font-mono p-2">
                {data.main.feels_like.toFixed(0)}&#176;
              </p>
              <p className="text-xl font-mono">Feels Like</p>
            </div>
            <div className="p-2">
              <p className="font-bold text-2xl font-mono p-2">
                {data.main.humidity}%
              </p>
              <p className="text-xl font-mono">Humidity</p>
            </div>
            <div className="p-2">
              <p className="font-bold text-2xl font-mono p-2">
                {data.wind.speed.toFixed(0)}&#176;
              </p>
              <p className="text-xl font-mono">Winds</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
