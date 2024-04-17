import React from "react";
import { fetchBlog } from "@/app/lib/data";


async function BlogPage({ params }) {
  const blog = await fetchBlog(params.slug);

  return (
    <div className="mt-10 ">
      <img src={`/hero.png`} className="w-[400px] h-[300px] object-cover rounded-md" alt="" />
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-slate-300 ">{blog.title}</h2>
        <p className="mt-6"> {blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPage;
