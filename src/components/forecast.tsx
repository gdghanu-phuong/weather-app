import  type{ ForecastDataType } from '../type/forecast.type';
import { convertTemp } from '../utils/convert-temp';

export default function Forecast({ forecastData }: ForecastDataType) {
  if (!forecastData) return <p>No forecast data available</p>;
  return (
    <div className="w-full mt-15">
      <p className="text-2xl font-semibold mb-3">Forecast for the next 5 days</p>
      <div className="grid grid-cols-9 gap-4">
          {forecastData.list.slice(0,36).map((data) => {
            const temp = convertTemp(data.main.temp);
            const time = new Date(data.dt * 1000).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' });
            const date = new Date(data.dt * 1000).toLocaleDateString(undefined, { day: '2-digit', month: 'short' });

            return (
              <div className="flex-shrink-2 text-center border-b border-gray-400" key="">
                <img
                  src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                  alt={data.weather[0].description}
                  className="mx-auto"
                />
                <p className="text-md font-medium">
                  {temp > 0 ? `+${temp}` : `${temp}`}°
                </p>
                <p className="text-sm">{`${time}`}</p>
                <p className="text-sm pb-2">{`${date}`}</p>
              </div>
            );
          })}
        </div>
      </div>
  );
}
