import { useAppSelector } from "../../hooks/redux";
import { MealsList } from "../../page-components/all-meals/MealsList";
import { CartItemInfo } from "../../page-components/cart/CartItemIngredients";
import { CartItemInstruction } from "../../page-components/cart/CartItemInstructions";
import { selectCartItems } from "../../redux/cart/selectors";

const Cart = () => {
  const cartList = useAppSelector(selectCartItems);

  console.log(cartList);

  if (!cartList.length) {
    return (
      <p className="p-20 text-center text-4xl text-white">Cart empty...</p>
    );
  }

  return (
    <div className="p-10">
      <h2 className="mb-5 text-4xl text-white">Cart</h2>

      <div className="mb-10">
        <MealsList mealsList={cartList} />
      </div>

      <hr className="mb-10 text-white" />

      <h3 className="mb-5 text-center text-2xl font-semibold text-white">
        All ingredients
      </h3>

      <div className="mb-5 flex flex-wrap justify-center gap-3">
        {cartList.map(({ idMeal }) => (
          <CartItemInfo id={idMeal} />
        ))}
      </div>

      <hr className="mb-5 text-white" />

      <h3 className="mb-5 text-center text-2xl font-semibold text-white">
        All instructions
      </h3>

      <div>
        <span className="font-semibold">Instruction: </span>
        <div className="flex flex-wrap justify-center gap-3">
          {cartList.map(({ idMeal }) => (
            <CartItemInstruction id={idMeal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
