import { FC } from "react";
import { Link } from "react-router";
import { ISearchItem } from "../Header/constants";

export const SearchItem: FC<Omit<ISearchItem, "id">> = ({ label, path }) => (
  <li className="text-gray-400 transition-all hover:text-black">
    <Link className="block p-1" to={path}>
      {label}
    </Link>
  </li>
);
