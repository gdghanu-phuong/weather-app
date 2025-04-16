import type { WeatherDataType } from '../type/weather.type';

export default function WeatherData({weatherData}:WeatherDataType) {
  const WEATHER_DATA = [
    {label: "Wind Speed", value: `${weatherData.wind.speed} M/C`},
    {label: "Wind Gusts", value: `${weatherData.wind.gust} M/C` || "No value found"},
    {label: "Humidity", value: `${weatherData.main.humidity} %`},
    {label: "Visibility", value: `${weatherData.visibility} km` || "No value found"},
    {label: "Cloudiness", value: `${weatherData.clouds.all} m`},
    {label: "Pressure", value: `${weatherData.main.pressure} hPa`}
]
  return (
    <div className='columns-2 mt-10'>
        {WEATHER_DATA.map(({label, value}) =>
        <div className='pt-3 columns-2 border-b border-gray-400' key="">
          <div>{label}</div>
          <div className='font-semibold'>{value}</div>
        </div>
        )}
    </div>
  )
}
