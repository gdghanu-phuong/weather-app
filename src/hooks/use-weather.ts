import { useQuery } from "@tanstack/react-query";
import getWeather from "../api/get-weather";

export function useGetWeather(cityName: string) {
  const { data, error, isPending } = useQuery({
    queryKey: ['getWeather', cityName],
    queryFn: async () => {
      const result = await getWeather(cityName);
      if (!result) {throw new Error("City not found");} return result;
    },
    enabled: !!cityName,
    retry: false
  });


  return { data, error, isPending };
}
