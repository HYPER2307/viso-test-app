import { FC } from "react";
import { useMealDetails } from "../../hooks/useMealDetails";

interface Props {
  id: string;
}

export const CartItemInstruction: FC<Props> = ({ id }) => {
  const { data } = useMealDetails(id);

  const { strInstructions, strMeal } = data || {};

  return (
    <div className="w-full max-w-[550px] rounded-2xl bg-white p-2">
      <h3 className="mb-3">
        <span className="font-semibold">Name:</span> {strMeal}
      </h3>

      <p>{strInstructions}</p>
    </div>
  );
};
