import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="flex w-full justify-between items-center mt-20 ">
      <img src={`/${blog.image}`} className="w-[400px] h-[300px] object-cover rounded-md" alt="" />
      <div className="w-[50%]">
        <h2 className="text-3xl font-bold">{blog.title}</h2>
        <p className="text-slate-400 mt-4 line-clamp-3">{blog.content}</p>
        <div className="mt-4 flex gap-4">
          {blog.tags.map(tag => (
            <span className="text-xs px-4 py-2 bg-slate-700 text-slate-200 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
