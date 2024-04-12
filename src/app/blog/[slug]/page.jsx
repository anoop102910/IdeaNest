import React from "react";
import { blogs } from "@/utils/data";


async function BlogPage({ params }) {
  const blog = blogs.find((blog) => blog.slug === params.slug);
  return (
    <div className="mt-10 ">
      <img className="w-[500px] rounded-md mr-5 " src={`/${blog.image}`} alt="" />
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-slate-300 ">{blog.title}</h2>
        <p className="mt-6"> {blog.content}</p>
      </div>
    </div>
  );
}

export default BlogPage;
