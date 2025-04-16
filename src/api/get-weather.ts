import { API_CONFIG } from "../constant/api"
import type { WeatherDataType } from "../type/weather.type";

const getWeather = async(cityName: string) => {
    try{
        const response = await fetch(`${API_CONFIG.WEATHER_URL}?q=${cityName}&appid=${API_CONFIG.API_KEY}`);
        if (!response.ok){
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return {weatherData: data} as WeatherDataType;
    }catch(error){
        console.log(error);
    }
}

export default getWeather;
