import { useQuery } from "@tanstack/react-query";
import { IMealDetailsResponse } from "../@types/meal";
import { instance } from "../services/api-client";

export const fetchMealById = async (id: string) => {
  const { data } = await instance.get<IMealDetailsResponse>(
    `lookup.php?i=${id}`,
  );

  return data.meals[0];
};

export const useMealDetails = (id: string) => {
  return useQuery({
    queryKey: ["meal", id],
    queryFn: () => fetchMealById(id),
    staleTime: 1000 * 60 * 5,
  });
};
