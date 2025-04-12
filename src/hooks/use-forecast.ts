import { useQuery } from "@tanstack/react-query";
import getForecast from "../api/get-forecast";


export function useGetForecast(cityName:string) {
    const {data} = useQuery({
        queryKey: ['getForecast', cityName],
        queryFn: () => getForecast(cityName),
        enabled: !!cityName
    });

    return {forecastData: data};
}