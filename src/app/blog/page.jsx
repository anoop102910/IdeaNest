import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import BlogCard from "./BlogCard";
import { blogs } from "@/utils/data";
// async function getBlogs() {
//   try {
//     const response = await fetch("http://localhost:3001/blogs",{cache:"no-store"});
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }


async function Blog() {
  //   const blogs = await getBlogs();
  //   console.log(blogs);
  return (
    <div className="mt-10 ">
      {blogs.map(blog => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
}

export default Blog;
