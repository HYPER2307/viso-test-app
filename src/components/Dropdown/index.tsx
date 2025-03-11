import cn from "classnames";
import { FC, useRef, useState } from "react";
import arrowDownIcon from "../../assets/icons/arrow-down-brown-base.svg";
import { useClickOutside } from "../../hooks/useClickOutside";
import { DropDownItem } from "./DropdownItem";
import { IDropdownItem } from "./types";

interface Props {
  items: IDropdownItem[];
  onItemClick: (v: IDropdownItem) => void;
  currentItem: IDropdownItem | null;
  initialLabel: string;
}

export const Dropdown: FC<Props> = ({
  items,
  onItemClick,
  currentItem,
  initialLabel,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsActive(false);
  };

  const handleItemClick = (item: IDropdownItem) => {
    onItemClick(item);
    setIsActive(false);
  };

  useClickOutside(ref, handleCloseDropdown, isActive);

  return (
    <div className="relative z-10 w-40" ref={ref}>
      <div
        className="flex h-10 cursor-pointer items-center justify-between rounded-t-sm border bg-white p-2"
        onClick={handleDropdownClick}
      >
        <span>{!currentItem ? initialLabel : currentItem.label}</span>
        <img src={arrowDownIcon} alt="arrow" />
      </div>

      <div
        className={cn(
          "absolute right-0 left-0 grid grid-rows-[0fr] transition-all",
          {
            "!grid-rows-[1fr]": isActive,
          },
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <ul className="flex max-h-40 flex-col gap-2 overflow-y-scroll rounded-b-md border border-t-0 bg-white py-2">
            {items.map((item) => (
              <DropDownItem
                key={item.id}
                item={item}
                onClick={() => handleItemClick(item)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
