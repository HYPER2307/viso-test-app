import { FC } from "react";

interface Props {
  label: string;
}

export const InfoLabel: FC<Props> = ({ label }) => (
  <span className="rounded-xl bg-gray-300 px-3 py-1">{label}</span>
);
