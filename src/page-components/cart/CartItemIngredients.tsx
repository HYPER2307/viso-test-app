import { FC } from "react";
import { IngredientsList } from "../../components/IngredientsList";
import { getArrayFromIngredients } from "../../helpers/getArrayFromIngredients";
import { useMealDetails } from "../../hooks/useMealDetails";

interface Props {
  id: string;
}

export const CartItemInfo: FC<Props> = ({ id }) => {
  const { data } = useMealDetails(id);

  const { idMeal, strMeal } = data || {};

  const ingredients = getArrayFromIngredients(data);

  console.log(ingredients, idMeal);

  return (
    <div className="w-full max-w-80 rounded-2xl bg-white p-2 transition-all hover:scale-[105%]">
      <h3 className="mb-3">
        <span className="font-semibold">Name:</span> {strMeal}
      </h3>

      <h4 className="font-semibold">Ingredients:</h4>

      <ul>
        <IngredientsList ingredients={ingredients} />
      </ul>
    </div>
  );
};
