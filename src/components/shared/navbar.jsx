"use client";
import Link from "next/link";
import React from "react";
import Button from "../ui/button";
import { useSession } from "next-auth/react";
const listItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blog", link: "/blog" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "Dashboard", link: "/dashboard" },
];

function Navbar() {
  const session = useSession();
  console.log(session)

  return (
    <div className="flex  py-8 justify-between items-center">
      <span className="text-3xl">IdeaNest</span>
      <ul className="flex items-center gap-x-5 max-sm:hidden ">
        {listItems.map(list => (
          <li key={list.id}>
            <Link href={list.link}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <Link href={"/dashboard/signin"}>
          <Button >
            {session.status === "unauthenticated" ? "Signin" : "Logout"}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
