import { useState } from 'react'
import SearchBar from '../search-bar'
import LocalTimezone from '../local-timezone'
import Location from '../location'
import WeatherTemperature from '../weather-temperature'
import WeatherData from '../weather-data'
import Forecast from '../forecast'
import { useGetWeather } from '../../hooks/use-weather'
import { useError } from '../../hooks/use-error'
import { useGetForecast } from '../../hooks/use-forecast'

export default function Dashboard() {
  const cityName = "Hanoi";
  const [name, setName] = useState(cityName);
  const { weatherData, error } = useGetWeather(name);
  const { weatherData: defaultData } = useGetWeather(cityName);
  const errorMsg = useError(error, "City not found");
  const usedData = error ? defaultData : weatherData;
  const { forecastData } = useGetForecast(usedData?.name || cityName);
  return (
    <div className='columns-1 w-full justify-center mx-auto my-3 px-20'>
      <div className='flex'>
        <SearchBar name={name} setName={setName} />
        {usedData && <LocalTimezone weatherData={usedData} />}
      </div>
      {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
      {usedData && (
        <>
          <Location weatherData={usedData}/>
          <WeatherTemperature weatherData={usedData} />
          <WeatherData weatherData={usedData} />
        </>
      )}
      <Forecast forecastData={forecastData} />
    </div>
  );
}
