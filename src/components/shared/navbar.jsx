"use client";
import Link from "next/link";
import React from "react";
const listItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Contact", link: "/contact" },
];

function Navbar() {
  return (
    <div className="flex  py-8 justify-between items-center">
      <span className="text-3xl">IdeaNest</span>
      <ul className="flex items-center gap-x-5 max-sm:hidden ">
        {listItems.map(list => (
          <li key={listItems.id}>
            <Link href={list.link}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
