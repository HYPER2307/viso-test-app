import cn from "classnames";
import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "../Header";

interface Props {
  className?: string;
  mainClassName?: string;
}

export const PageWrapper: FC<Props> = ({ className, mainClassName }) => (
  <div className={cn("flex flex-col", className)}>
    <Header />
    <main className={cn("container flex-1", mainClassName)}>
      <Outlet />
    </main>
  </div>
);
