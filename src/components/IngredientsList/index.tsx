import { FC } from "react";
import { getArrayFromIngredients } from "../../helpers/getArrayFromIngredients";

interface Props {
  ingredients: ReturnType<typeof getArrayFromIngredients>;
}

export const IngredientsList: FC<Props> = ({ ingredients }) => (
  <>
    {ingredients.map(({ key, ingredient, measure }) => {
      if (ingredient) {
        return (
          <li key={key}>
            {ingredient}: {measure}
          </li>
        );
      }
    })}
  </>
);
