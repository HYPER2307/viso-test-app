import cn from "classnames";
import debounce from "lodash.debounce";
import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useRef,
  useState,
} from "react";
import crossIcon from "../../assets/icons/cross.svg";
import searchIcon from "../../assets/icons/search-black-base.svg";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useSearchMeals } from "../../hooks/useSearchMeals";
import { Button } from "../Button";
import { SearchList } from "./SearchList";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Search: FC<Props> = ({ value, setValue }) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [query, setQuery] = useState(value);

  const { data: meals, isLoading: searchMealsLoading } = useSearchMeals(query);

  const handleOpenMenu = () => {
    setIsActiveMenu(true);
  };

  const handleCloseMenu = () => {
    setIsActiveMenu(false);
  };

  const handleInputClick = () => {
    if (value.length) {
      setIsActiveMenu(true);
    }
  };

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      setQuery(searchTerm);
    }, 300),
    [],
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    debouncedSearch(value);

    if (value.length) {
      setIsActiveMenu(true);
    } else {
      setIsActiveMenu(false);
    }
  };

  const resetValue = () => {
    setValue("");
    setQuery("");
  };

  useClickOutside(searchRef, handleCloseMenu);

  return (
    <div
      className="relative z-50 h-12 w-full max-w-112.5 overflow-visible"
      ref={searchRef}
    >
      <input
        className="border-black-base border-opacity-20 rounded-10 absolute z-20 size-full rounded-sm border bg-white pr-24 pl-4"
        value={value}
        type="text"
        onChange={handleInputChange}
        onClick={handleInputClick}
        placeholder="Пошук товару..."
      />
      {Boolean(value.length) && (
        <div className="absolute top-1/2 right-15 z-20 -translate-y-1/2">
          <Button onClick={resetValue} className="hover:rotate-90">
            <img className="h-4 w-4" src={crossIcon} alt="cross" />
          </Button>
        </div>
      )}
      <div className="absolute top-1/2 right-5 z-20 -translate-y-1/2">
        <Button onClick={handleOpenMenu}>
          <img className="h-5 w-5" src={searchIcon} alt="search" />
        </Button>
      </div>

      <div
        className={cn(
          "bg-white-base absolute top-full right-0 left-0 grid -translate-y-2 grid-rows-[0fr] rounded-2xl transition-all",
          {
            "!grid-rows-[1fr]": isActiveMenu,
          },
        )}
      >
        <div className="min-h-0 overflow-hidden">
          {searchMealsLoading && (
            <p className="rounded-sm border bg-white p-10">Meals loading...</p>
          )}

          {!searchMealsLoading && (
            <>
              {meals?.length ? (
                <SearchList mealsList={meals} />
              ) : (
                <p className="rounded-sm border bg-white p-10">
                  Meals not found
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
