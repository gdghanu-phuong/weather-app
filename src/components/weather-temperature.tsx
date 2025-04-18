import type { WeatherDataType } from '../type/weather.type';
import { convertTemp } from '../utils/convert-temp';

export default function WeatherTemperature({weatherData}:WeatherDataType) {
  const temp = convertTemp(weatherData.main.temp);
  return (
    <div className='w-xs columns-2'>
      <h1 className='text-3xl font-semibold'>
      {temp > 0 ? `+${temp}` : `-${temp}`}°C
      </h1>
      <p className='capitalize'>{weatherData.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
        className="w-15"
      />
    </div>
  )
}
