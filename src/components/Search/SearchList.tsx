import { FC } from "react";
import { IMeal } from "../../@types/meal";
import { SearchItem } from "./SearchItem";

interface Props {
  mealsList: IMeal[];
}

export const SearchList: FC<Props> = ({ mealsList }) => (
  <ul className="border-black-base border-opacity-20 flex max-h-50 flex-col gap-1 overflow-y-scroll rounded-sm border border-t-0 bg-white p-4 pt-6">
    {mealsList.map(({ idMeal, strMeal }) => (
      <SearchItem
        key={idMeal}
        label={strMeal}
        path={`/product-details/${idMeal}`}
      />
    ))}
  </ul>
);
