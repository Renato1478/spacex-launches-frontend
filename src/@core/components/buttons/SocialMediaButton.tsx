import React from "react";

export default function SocialMediaButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="px-3 py-2 rounded-md dark:text-slate-400 bg-slate-50 dark:bg-slate-50 dark:bg-opacity-5 hover:text-purple-400 dark:hover:text-purple-600 transition ease-in-out duration-300"
    >
      {children}
    </a>
  );
}
