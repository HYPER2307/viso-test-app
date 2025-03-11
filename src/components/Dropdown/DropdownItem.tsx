import { FC } from "react";
import { IDropdownItem } from "./types";

interface Props {
  item: IDropdownItem;
  onClick?: VoidFunction;
}

export const DropDownItem: FC<Props> = ({ item, onClick }) => (
  <li
    className="cursor-pointer p-2 transition-all hover:bg-gray-200"
    onClick={onClick}
  >
    {item.label}
  </li>
);
