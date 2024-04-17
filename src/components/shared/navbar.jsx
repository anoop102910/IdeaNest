import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

const listItems = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Blogs", link: "/blogs" },
  { id: 4, name: "Contact", link: "/contact" },
  { id: 5, name: "Dashboard", link: "/dashboard" },
];

async function Navbar() {
  return (
    <div className="flex  py-6 justify-between items-center  z-10 bg-black">
      <span className="text-2xl">{"IdeaNest"}</span>
      <ul className="flex items-center gap-x-5 max-sm:hidden ">
        {listItems.map(list => (
          <li key={list.id}>
            <Link href={list.link}>{list.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <SignOutButton />
      </div>
    </div>
  );
}

export default Navbar;
