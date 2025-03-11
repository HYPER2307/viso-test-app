import { IMealDetails } from "../@types/meal";

export const getArrayFromIngredients = (meal: IMealDetails | undefined) => {
  return Array.from({ length: 20 }, (_, i) => {
    const keyIngredient = `strIngredient${i + 1}` as keyof IMealDetails;
    const keyMeasure = `strMeasure${i + 1}` as keyof IMealDetails;

    const ingredient = meal?.[keyIngredient];
    const measure = meal?.[keyMeasure];

    return {
      key: crypto.randomUUID(),
      ingredient,
      measure,
    };
  });
};
