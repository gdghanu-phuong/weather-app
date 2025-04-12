import { WeatherDataType } from '../type/weather.type';


export default function WeatherTemperature({weatherData}:WeatherDataType) {
  if (!weatherData) return <p>Loading...</p>
  const temp = parseFloat((weatherData.main.temp - 273.15).toFixed());
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
