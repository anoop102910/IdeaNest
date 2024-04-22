import { updateBlog } from "@/lib/action";
import { fetchBlog } from "@/lib/data";
import { notFound } from "next/navigation";

async function NewBlog({ params }) {
  const blog = await fetchBlog(params.slug);

  if (!blog) notFound();

  return (
    <div className="flex justify-between items-center w-full ">
      <div className="w-full  mx-auto max-w-lg p-4  rounded-lg shadow sm:p-6 ">
        <form className="space-y-6" action={updateBlog}>
          <input type="hidden" name="id" value={blog.id} />
          <input type="hidden" name="slug" value={blog.slug} />
          <input type="hidden" name="pathname" value={"/dashboard/blogs"} />
          <h5 className="text-3xl font-medium text-slate-200">Update Blog</h5>
          <div>
            <label htmlFor="title" className="block mb-2  font-medium text-slate-200">
              Title
            </label>
            <input
              type="title"
              name="title"
              id="title"
              className="bg-transparent border border-slate-300 text-slate-100  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="E.g. How react works"
              defaultValue={blog.title}
              required
            />
          </div>
          <div>
            <label htmlFor="tags" className="block mb-2  font-medium text-slate-200">
              Tags
            </label>
            <input
              type="tags"
              name="tags"
              id="tags"
              className="bg-transparent border border-slate-300 text-slate-100  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="E.g. React Node Web-developement"
              defaultValue={blog.tags}
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block mb-2  font-medium text-slate-200">
              Description
            </label>
            <input
              type="description"
              name="description"
              id="description"
              className="bg-transparent border border-slate-300 text-slate-100  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="E.g. React Node Web-developement"
              defaultValue={blog.description}
              required
            />
          </div>
          <div>
            <label for="content" className="block mb-2  font-medium text-slate-200">
              Add content
            </label>
            <textarea
              id="content"
              rows="4"
              name="content"
              className="block p-2.5 w-full  bg-transparent border border-slate-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-400"
              placeholder="Write a blog..."
              defaultValue={blog.content}
            ></textarea>
          </div>
          <div className="flex items-start"></div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center"
          >
            {"Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
