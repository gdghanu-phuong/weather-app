import { API_CONFIG } from "../constant/api"

const getCity = async(name: string) => {
    try{
        const response = await fetch(`${API_CONFIG.CITY_URL}?q=${name}&appid=${API_CONFIG.API_KEY}`);
        if (!response.ok){
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error);
    }
}

export default getCity;