import { API_CONFIG } from "../constant/api"
import type { ForecastDataType } from "../type/forecast.type";

const getForecast = async(cityName: string) => {
    try{
        const response = await fetch(`${API_CONFIG.FORECAST_URL}?q=${cityName}&appid=${API_CONFIG.API_KEY}`);
        if (!response.ok){
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return { forecastData: data } as unknown as ForecastDataType;
    }catch(error){
        console.log(error);
    }
}

export default getForecast;
