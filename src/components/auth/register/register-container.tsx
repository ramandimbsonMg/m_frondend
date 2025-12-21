"use client";

import clsx from "clsx";
import { RegisterView } from "./register-view";

interface Props {
    className?: string;
}
export const RegisterContainer = ({className}:Props) => {
  return (
    <>
      <RegisterView className={clsx(className)} />
    </>
  );
};
