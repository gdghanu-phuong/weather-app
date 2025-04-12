import { useQuery } from "@tanstack/react-query";
import getWeather from "../api/get-weather";

export function useGetWeather(cityName: string) {
  const { data, error } = useQuery({
    queryKey: ['getWeather', cityName],
    queryFn: async () => {
      const result = await getWeather(cityName);
      if (result.cod === "404") {
        throw new Error("City not found");
      }
      return result;
    },
    enabled: !!cityName,
    retry: false
  });

  return { weatherData: data, error };
}
