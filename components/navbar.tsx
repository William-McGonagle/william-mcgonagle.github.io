"use client";

import Link from "next/link";
import React, { ReactElement } from "react";
import { usePathname } from "next/navigation";

export function Navbar({
  pages,
}: {
  pages: {
    name: string;
    url: string;
  }[];
}) {
  const pathname = usePathname();

  return (
    <div className="fixed w-full shadow top-0 p-3 flex flex-row gap-6 backdrop-blur bg-white/80 z-50 align-center justify-center">
      {pages.map((i, n) => (
        <Link
          className={
            pathname.replace(/\//g, "") == i.url
              ? "bg-yellow-300 rounded px-2 text-lg"
              : "text-lg px-2"
          }
          href={"/" + i.url}
          key={n}
        >
          {i.name}
        </Link>
      ))}
    </div>
  );
}
