import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { IMeal } from "../../@types/meal";
import bagIcon from "../../assets/icons/bag-black-base.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart } from "../../redux/cart/actions";
import { selectCartItems } from "../../redux/cart/selectors";

export const ProductCard: FC<IMeal> = ({
  idMeal,
  strMeal,
  strMealThumb,
  strCategory,
}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const cartList = useAppSelector(selectCartItems);

  const isInCart = cartList.some((item) => item.idMeal === idMeal);

  const notify = () => toast(`Meal ${strMeal} added to cart`);

  const handleCardClick = () => {
    navigate(`/product-details/${idMeal}`);
  };

  const handleAddToCart = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          idMeal,
          strCategory,
          strMeal,
          strMealThumb,
        }),
      );

      notify();
    }
  };

  return (
    <div className="min-h-70 rounded-md border bg-white p-4 shadow-md transition-all hover:scale-[105%]">
      <div className="cursor-pointer" onClick={handleCardClick}>
        <LazyLoadImage
          className="h-40 w-full rounded-md object-cover"
          src={strMealThumb}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "0.3s" },
          }}
          alt={strMeal}
        />

        <h3 className="mt-2 mb-2 text-lg font-semibold">{strMeal}</h3>
      </div>

      <div className="flex items-center justify-between">
        <span className="rounded-xl bg-gray-400 px-3 py-1">{strCategory}</span>

        <div className="relative" onClick={handleAddToCart}>
          <img
            className="cursor-pointer transition-all hover:scale-[110%]"
            src={bagIcon}
            alt="bag"
          />

          {isInCart && (
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-green-500" />
          )}
        </div>
      </div>
    </div>
  );
};
