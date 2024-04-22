import { getServerSession } from "next-auth";
import Dashboard from "./components/dashboard";
import { redirect } from "next/navigation";

async function layout({ children }) {
  const session = await getServerSession();
  if (!session) redirect("/auth/signin");

  return (
    <div className="relative flex min-h-screen ">
      <Dashboard className="sticky top-0 left-0 bottom-0  max-lg:hidden " />
      <div className="w-full md:ml-2 mt-1 relative">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default layout;
