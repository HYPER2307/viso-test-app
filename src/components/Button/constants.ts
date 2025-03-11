import { ButtonVariants } from "./types";

export const BUTTON_STYLE_VARIANTS = {
  [ButtonVariants.DEFAULT]: "",
  [ButtonVariants.PRIMARY]:
    "px-5 py-3 w-full text-xs text-white leading-normal tracking-1 bg-orange-base shadow-default rounded-20 hover:brightness-110",
  [ButtonVariants.SECONDARY]:
    "px-5 py-2 w-full text-xs leading-normal tracking-1 bg-cream-base border border-brown-base rounded-20 hover:bg-black hover:bg-opacity-10",
  [ButtonVariants.SHADOW_SECONDARY]:
    "px-5 py-2 w-full text-10 leading-normal font-bold tracking-1 bg-cream-base border border-pastel-beige shadow-button rounded-20",
};
