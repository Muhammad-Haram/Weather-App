"use client"
import { useState } from 'react'
import Image from 'next/image'
import Input from './components/Input'
import Current from './components/Current'
import WeatherDetails from './components/WeatherDetails'
import WeekForcast from './components/WeekForecast'
import weatherLogo from './3d.png'

const page = () => {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `https://api.weatherapi.com/v1/forecast.json?key=2e59c87adc894a0f801183150243004&q=${location}&days=7&aqi=yes&alerts=yes`

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        let response = await fetch(url)
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("")
      }
      catch (error) {
        setError("City Not found")
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">Welcome to the Weather App</h2>
        <p className="text-xl">Enter a city name to get the weather forecast</p>
      </div>
    )
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a valid city name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForcast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    )
  }

  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to-blue-300 h-fit">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">

        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <Image
            className='mb-8 md:mb-0 order-1 py-2 px-4'
            src={weatherLogo}
            width={180}
            height={180}
            alt="Picture of the author"
          />

        </div>
        {content}
      </div>
    </div >
  )
}

export default page