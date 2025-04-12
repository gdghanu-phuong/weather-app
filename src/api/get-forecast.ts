import { API_CONFIG } from "../constant/api"

const getForecast = async(cityName: string) => {
    try{
        const response = await fetch(`${API_CONFIG.FORECAST_URL}?q=${cityName}&appid=${API_CONFIG.API_KEY}`);
        if (!response.ok){
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default getForecast;
