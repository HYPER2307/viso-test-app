import cn from "classnames";
import { FC } from "react";
import { Sizes } from "../../@types/sizes";
import { LOADER_SIZES } from "./constants";

interface Props {
  size?: Sizes;
  className?: string;
}

export const Loader: FC<Props> = ({ size = Sizes.XS, className }) => (
  <div
    className={cn(
      "mx-auto animate-spin rounded-full border-2 border-gray-400 border-t-orange-400",
      LOADER_SIZES[size],
      className,
    )}
  />
);
