import { FC } from "react";
import { IMeal } from "../../@types/meal";
import { ProductCard } from "../../components/ProductCard";

interface Props {
  mealsList: IMeal[];
}

export const MealsList: FC<Props> = ({ mealsList }) => (
  <div className="grid grid-cols-3 gap-4">
    {mealsList.map((meal) => (
      <ProductCard key={meal.idMeal} {...meal} />
    ))}
  </div>
);
