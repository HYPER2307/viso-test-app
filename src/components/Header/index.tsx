import { useState } from "react";
import { useNavigate } from "react-router";
import bagIcon from "../../assets/icons/bag-black-base.svg";
import { PATHNAMES } from "../../constants/pathnames";
import { Search } from "../Search";

export const Header = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate(PATHNAMES.CART);
  };

  return (
    <header className="p-2">
      <div className="flex items-center justify-center gap-10">
        <Search value={value} setValue={setValue} />

        <div onClick={handleCartClick}>
          <img
            className="cursor-pointer rounded-full bg-white p-3 transition-all hover:scale-[110%]"
            src={bagIcon}
            alt="bag"
          />
        </div>
      </div>
    </header>
  );
};
