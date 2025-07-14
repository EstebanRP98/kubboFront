"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const HeaderNav = () => {
  const pathname = usePathname();

  const isActiveMenu = (paths) => {
    return paths.some((path) => pathname === path);
  };

  return (
    <ul className="navigation">
      <li
        className={`menu-item-has-children ${
          isActiveMenu(["/", "/home2", "/home3", "/home4"]) ? "active" : ""
        }`}
      >
        <a href="#">Inicio</a>
        <ul className="sub-menu">
          <li className={pathname === "/" ? "active" : ""}>
            <Link href="/">My Kubbo</Link>
          </li>
        </ul>
      </li>
      <li
        className={`menu-item-has-children ${
          isActiveMenu(["/product", "/product/p-123"]) ? "active" : ""
        }`}
      > 
      </li>
      <li
        className={`menu-item-has-children ${
          isActiveMenu([
            "/animal",
            "/animal/a-123",
            "/gallery",
            "/faq",
            "/pricing",
            "/reservation",
            "/team",
            "/team/t-123",
            "/blog",
            "/blog/b-123",
            "/error",
          ])
            ? "active"
            : ""
        }`}
      >
      </li>
    </ul>
  );
};
