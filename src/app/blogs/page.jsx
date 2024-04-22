import React from "react";
import BlogCard from "./BlogCard";
import SearchInput from "./SearchInput";
import { fetchBlogs } from "../../lib/data";

async function Blog({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const blogs = await fetchBlogs(10, page, q);

  return (
    <div className="mt-5 md:mt-10 ">
      <SearchInput className={"max-sm:w-full"} />
      {blogs.length === 0 ? (
        <div className="w-full pt-20 flex justify-center items-center text-5xl ">No blog found</div>
      ) : (
        <div className="mt-4">
          {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
        </div>
      )}
    </div>
  );
}

export default Blog;
