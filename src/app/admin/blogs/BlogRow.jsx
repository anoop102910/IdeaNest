import Avatar from "@/components/shared/avatar";
import { deleteBlog } from "@/app/lib/action";
import Link from "next/link";

function BlogRow({ blog }) {
  return (
    <tr
      key={blog.author.id}
      class=" border-b bg-gray-800 text-slate-200 border-gray-700  hover:bg-gray-700"
    >
      <td class="w-4 p-4">
        <div class="flex items-center">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            class="w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600"
          />
          <label for="checkbox-table-search-1" class="sr-only">
            checkbox
          </label>
        </div>
      </td>
      <td class="px-6 py-4">{blog.title}</td>
      <th scope="row" class="flex items-center px-6 py-4  whitespace-nowrap text-white">
        {<Avatar src={blog.author.avatar} username={blog.author.username} />}
        <div class="ps-3">
          <div class="text-base font-semibold">{blog.author.username}</div>
          {/* <div class="font-normal text-gray-500">{user.email}</div> */}
        </div>
      </th>
      <td class="px-6 py-4">{"22 OCT 2022"}</td>
      <td class="px-6 py-4  space-x-4 ">
        <form action={deleteBlog} className="inline-block">
          <input type="hidden" name="id" value={blog.id} />
          <button class="font-medium bg-blue-500 hover:bg-blue-700 text-white  px-2 py-1 rounded ">
            Delete
          </button>
        </form>
        <Link href={`/admin/blogs/edit/${blog.slug}`}>
          <button class="font-medium bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded  ">
            Edit
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default BlogRow;
