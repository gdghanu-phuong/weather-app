import { useState } from 'react'
import SearchBar from '../search-bar'
import LocalTimezone from '../local-timezone'
import Location from '../location'
import WeatherTemperature from '../weather-temperature'
import WeatherData from '../weather-data'
import Forecast from '../forecast'
import { useGetWeather } from '../../hooks/use-weather'
import { useGetForecast } from '../../hooks/use-forecast'
import { CITY_NAME } from '../../constant'

export default function Dashboard() {
  const [name, setName] = useState(CITY_NAME);
  const { data: weatherData, error, isPending } = useGetWeather(name);
  const { forecastData} = useGetForecast(name);
  if (isPending) return <p>Loading...</p>
  return (
    <div className='columns-1 w-full justify-center mx-auto my-3 px-20'>
      <div className='flex'>
        <SearchBar setName={setName} />
        {weatherData && <LocalTimezone timezone={weatherData.weatherData?.timezone} />}
      </div>
      {error && <p className="text-red-600 mt-2">{error.message}</p>}
      {weatherData?.weatherData && (
        <>
          <Location timezone={weatherData.weatherData.timezone} name={weatherData.weatherData.name}/>
          <WeatherTemperature weatherData={weatherData.weatherData} />
          <WeatherData weatherData={weatherData.weatherData} />
        </>
      )}
    {forecastData && <Forecast forecastData={forecastData?.forecastData}/>}
    </div>
  );
}
