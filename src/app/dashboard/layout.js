import { getServerSession } from "next-auth";
import Dashboard from "./components/dashboard";
import { redirect } from "next/navigation";

async function layout({ children }) {
  const session = await getServerSession();
  if (!session) redirect("/auth/signin");

  return (
    <div className="flex gap-4 relative ">
      <Dashboard />
      {children}
    </div>
  );
}

export default layout;
