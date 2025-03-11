import { useQuery } from "@tanstack/react-query";
import { ICategoriesResponse } from "../@types/meal";
import { instance } from "../services/api-client";

const fetchCategories = async () => {
  const { data } = await instance.get<ICategoriesResponse>(`list.php?c=list`);

  return data.meals.map(({ strCategory }) => strCategory);
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 5,
  });
};
