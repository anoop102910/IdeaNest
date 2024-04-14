import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
// import { blogs } from "@/utils/data";
import { fetchBlogs } from "@/utils/api";

async function Blog() {
  const blogs = await fetchBlogs();

  if (blogs.length == 0)
    return (
      <div className="w-full min-h-screen flex justify-center items-center text-5xl">
        No blog found
      </div>
    );

  return (
    <div className="mt-10 ">
      {blogs.map(blog => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
