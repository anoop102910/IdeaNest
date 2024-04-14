import React from "react";
import { blogs } from "@/utils/data";
import { fetchBlogBySlug } from "@/utils/api";


async function BlogPage({ params }) {
  const blog = await fetchBlogBySlug(params.slug);
  console.log(blog);

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
