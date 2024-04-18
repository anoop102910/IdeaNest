import { getServerSession } from "next-auth";
import { fetchUserBlogCount, fetchUserByEmail, fetchUserCommentCount } from "../lib/data";

async function AdminPanel() {
  const session = await getServerSession();
  const { id } = await fetchUserByEmail(session.user.email);

  const [blogCount, commentCount] = await Promise.all([
    fetchUserBlogCount(id),
    fetchUserCommentCount(id),
  ]);

  return (
    <div className="flex justify-around flex-1 items-start gap-4 flex-wrap">
      <div className="p-6 rounded-md flex-1 shadow-md text-center space-y-4 bg-slate-800">
        <h2 className="text-4xl font-bold">{blogCount}</h2>
        <p className="text-xl font-bold">Total Blogs</p>
      </div>
      <div className="p-6 rounded-md flex-1 shadow-md text-center space-y-4 bg-slate-800">
        <h2 className="text-4xl font-bold">{commentCount}</h2>
        <p className="text-xl font-bold">Total Comments</p>
      </div>
    </div>
  );
}

export default AdminPanel;
