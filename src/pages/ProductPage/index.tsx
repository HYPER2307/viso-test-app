import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router";
import { Sizes } from "../../@types/sizes";
import { InfoLabel } from "../../components/InfoLabel";
import { IngredientsList } from "../../components/IngredientsList";
import { Loader } from "../../components/Loader";
import { getArrayFromIngredients } from "../../helpers/getArrayFromIngredients";
import { useMealDetails } from "../../hooks/useMealDetails";

const ProductPage = () => {
  const { productId = "" } = useParams();

  const { data, isLoading } = useMealDetails(productId);

  const {
    strMealThumb = "",
    strMeal = "",
    strCategory = "",
    strArea = "",
    strInstructions = "",
  } = data ?? {};

  const ingredients = getArrayFromIngredients(data);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader size={Sizes.XXL} />
      </div>
    );
  }

  return (
    <div className="flex gap-5 rounded-3xl bg-white p-5">
      <div className="flex flex-col gap-10">
        <div className="h-64 min-w-64">
          <LazyLoadImage
            className="mb-10 h-full w-full rounded-2xl object-cover"
            src={strMealThumb}
            effect="blur"
          />
        </div>

        <div className="rounded-2xl border p-2">
          <span className="mb-5 block text-center text-lg">Info</span>

          <div className="flex flex-wrap gap-3">
            <InfoLabel label={strCategory} />
            <InfoLabel label={strArea} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="mb-2 text-center text-3xl">{strMeal}</h2>

        <div>
          <h3 className="mb-2 text-center text-2xl">Ingredients</h3>

          <ul className="rounded-2xl bg-gray-200 p-4">
            <IngredientsList ingredients={ingredients} />
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-center text-2xl">Instruction</h3>
          <p className="rounded-2xl bg-gray-200 p-4">{strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
