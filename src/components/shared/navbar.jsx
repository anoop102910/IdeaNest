"use client";
import Link from "next/link";
import Button from "../ui/button";
import { signOut, useSession } from "next-auth/react";
const listItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blogs", link: "/blogs" },
  { id: 5, name: "Dashboard", link: "/dashboard" },
];

function Navbar() {
  const session = useSession();

  if (session.status === "loading") return <div>Loading..</div>;
  const authenticated = session.status === "authenticated";

  return (
    <div className="flex  py-8 justify-between items-center">
      <span className="text-3xl">{authenticated ? session.data.user.name : "IdeaNest"}</span>
      <ul className="flex items-center gap-x-5 max-sm:hidden ">
        {listItems.map(list => (
          <li key={list.id}>
            <Link href={list.link}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        {session.status !== "authenticated" ? (
          <Link href={"/auth/signin"}>
            <Button>{"Signin"}</Button>
          </Link>
        ) : (
          <Button onClick={signOut}>{"Logout"}</Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
