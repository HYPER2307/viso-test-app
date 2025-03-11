import { useQuery } from "@tanstack/react-query";
import { ISearchMeals } from "../@types/meal";
import { instance } from "../services/api-client";

const fetchMealsByName = async (name: string) => {
  const { data } = await instance.get<ISearchMeals>(`search.php?s=${name}`);

  return data.meals;
};

export const useSearchMeals = (name: string) => {
  return useQuery({
    queryKey: ["searchMeals", name],
    queryFn: () => fetchMealsByName(name),
    enabled: name.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
