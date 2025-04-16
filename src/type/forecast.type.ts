import type { WeatherType } from "./weather.type";

interface ForecastResponse {
    dt: number;
    main: {temp: number};
    weather: WeatherType[];
}

interface ForecastList {
    list: ForecastResponse[];
}

export interface ForecastDataType{
    forecastData: ForecastList;
}