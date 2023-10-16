import React, { ReactNode } from "react";

import Link, { LinkProps } from "next/link";

import classNames from "classnames";

export default function CustomLink(props: React.ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      className={classNames(
        "flex align-middle gap-x-1 text-sky-400 hover:text-sky-300 transition-all underline",
        props.className
      )}
    >
      {props.children}
    </Link>
  );
}
