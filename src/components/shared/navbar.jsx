"use client";
import Link from "next/link";
import Button from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Dashboard from "./dashboard";
import { Icon } from "@iconify/react";
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
  const [hide, toggle] = useState(true);

  return (
    <div className="flex  py-8 justify-between items-center">
      {/* {hide && <Dashboard  />} */}
      <Icon
        onClick={() => toggle(!hide)}
        icon="mingcute:menu-fill"
        className="text-3xl lg:hidden text-slate-700"
      />
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
