
export interface WeatherType {
  main: string,
  description: string;
  icon: string;
}

interface WeatherData {
    weather: WeatherType[];
    name: string;
    wind: { speed: number; gust?: number };
    main: { humidity: number; pressure: number; temp:number;};
    visibility: number;
    clouds: { all: number };
    timezone: number;
  }

export interface WeatherDataType {
    weatherData: WeatherData;
}
