import React from "react";
import Icon from "./Icon";
import Link from "next/link";
const dashboardItems = [
  {
    icon: "solar:home-2-linear",
    title: "Home",
    link: "/admin",
  },
  {
    icon: "ph:user-list-duotone",
    title: "Users",
    link: "/admin/users",
  },
  {
    icon: "tabler:brand-blogger",
    title: "Blogs",
    link: "/admin/blogs",
  },
  {
    icon: "line-md:account",
    title: "Profile",
    link: "/admin/profile",
  },
  {
    icon: "uil:signin",
    title: "Register",
    link: "/admin/register",
  },
];
async function Dashboard({ className }) {


  return (
    <aside
      aria-label="sidebar"
      aria-controls="default-sidebar"
      className={`${className} bg-slate-800 font-urbanist h-[calc(100vh-100px)] sticky   min-w-[240px] px-4 shadow-md rounded-md transition-transform -translate-x-full sm:translate-x-0`}
    >
      <div className="wrapper pt-6">
        <ul>
          {dashboardItems.map((item, index) => (
            <li key={item.title}>
              <Link
                href={item.link}
                className="flex mb-4 items-center px-6 py-3 pr-20 rounded-xl text-slate-100 hover:bg-main hover:text-slate-200 hover:bg-slate-600 transition duration-150 cursor-pointer"
              >
                <i>
                  <Icon icon={item.icon} className="hover:text-slate-200 text-2xl " />
                </i>
                <span className="ml-8 text-[0.9rem] font-semibold  tracking-wider">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Dashboard;
