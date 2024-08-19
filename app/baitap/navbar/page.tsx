"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <ul className="flex gap-3">
        <li className={`${pathName === "/" ? "active" : ""} p-1`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${pathName === "/about" ? "active" : ""} p-1`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`${pathName === "/contact" ? "active" : ""} p-1`}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={`${pathName === "/login" ? "active" : ""} p-1`}>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </>
  );
}