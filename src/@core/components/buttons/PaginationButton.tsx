"use client";

import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  isActive: boolean;
}

export default function PaginationButton({ isActive, ...props }: Props) {
  return (
    <button
      {...props}
      className={`px-3 py-1 rounded-sm dark:text-slate-400 bg-slate-50 dark:bg-slate-50 dark:bg-opacity-5 hover:text-purple-400 dark:hover:text-purple-600 transition ease-in-out duration-300 ${
        isActive ? "text-purple-400 dark:text-purple-600" : null
      } `}
    >
      {props.children}
    </button>
  );
}
