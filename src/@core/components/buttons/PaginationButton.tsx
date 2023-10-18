"use client";

import classNames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
}

export default function PaginationButton({
  isActive = false,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={classNames(
        "px-3 py-1 rounded-sm text-stone-400 bg-stone-50 bg-opacity-5 hover:text-orange-600 transition ease-in-out duration-300",
        isActive ? "text-orange-600" : null,
        props.className
      )}
    >
      {props.children}
    </button>
  );
}
