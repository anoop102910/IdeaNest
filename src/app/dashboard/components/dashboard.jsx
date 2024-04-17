import Icon from "@/components/shared/Icon";
import Link from "next/link";

const dashboardItems = [
  {
    icon: "solar:home-2-linear",
    title: "Home",
    link: "/dashboard/",
  },
  {
    icon: "tabler:brand-blogger",
    title: "Blogs",
    link: "/dashboard/blogs",
  },
  {
    icon: "line-md:account",
    title: "Profile",
    link: `/dashboard/profile`,
  },
  {
    icon: "tabler:brand-blogger",
    title: "New Blog",
    link: "/dashboard/create-blog",
  },
  {
    icon: "uil:signin",
    title: "Register",
    link: "/register",
  },
];
async function Dashboard({ className }) {
  return (
    <aside
      aria-label="sidebar"
      aria-controls="default-sidebar"
      className={`${className} bg-slate-800 font-urbanist h-[calc(100vh-100px)] sticky top-10 left-0   w-[290px] px-4 shadow-md rounded-md transition-transform -translate-x-full sm:translate-x-0`}
    >
      <div className="wrapper pt-6">
        <ul>
          {dashboardItems.map((item, index) => (
            <li key={item.title}>
              <Link
                href={item.link}
                className="flex mb-4 items-center px-6 py-3 pr-12 rounded-xl text-slate-100 hover:bg-main hover:text-slate-200 hover:bg-slate-600 transition duration-150 cursor-pointer"
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