import { useQuery } from "@tanstack/react-query";
import { IMealsResponse } from "../@types/meal";
import { instance } from "../services/api-client";

const fetchMealsByCategory = async (category: string) => {
  const { data } = await instance.get<IMealsResponse>(
    `filter.php?c=${category}`,
  );

  return data.meals.map((meals) => ({
    ...meals,
    strCategory: category,
  }));
};

export const useMeals = (categories: string[]) => {
  return useQuery({
    queryKey: ["meals", categories.sort().join(",")],
    queryFn: async () => {
      const allMeals = await Promise.all(categories.map(fetchMealsByCategory));
      return allMeals.flat();
    },
    enabled: categories.length > 0,
    staleTime: 1000 * 60 * 5,
  });
};
