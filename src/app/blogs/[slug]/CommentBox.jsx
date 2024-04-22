"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { createComment } from "@/lib/action";

const CommentBox = ({}) => {
  const comments = [
    {
      author: "John Doe",
      date: "2022-01-28",
      content:
        "Praesent elementum nulla at erat. Sed nec lobortis erat. Maecenas non nulla ac nunc pretium dictum. Aliquam in dui ac arcu porttitor viverra.",
    },
    {
      author: "Jane Smith",
      date: "2022-01-27",
      content:
        "Quisque ornare, est non pulvinar commodo, tortor nibh placerat elit, et mattis nibh arcu a nunc. Ut fringilla elit a nisl laoreet, vel ultricies justo sagittis.",
    },
    {
      author: "Bob Johnson",
      date: "2022-01-26",
      content:
        "Integer eu ante a neque malesuada imperdiet sit amet non sapien. Morbi et est eu justo malesuada bibendum. Aliquam erat volutpat.",
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownToggle = id => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <section className=" antialiased mt-10 text-white">
      <div className="max-w-2xl  px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold">Discussion ({comments.length})</h2>
        </div>
        <form action={createComment} className="mb-6">
          <div className="py-2 px-4 mb-4 bg-gray-900 rounded-lg rounded-t-lg border border-gray-900">
            <input type="hidden" name="blogId" />
            <label htmlFor="comment" className="sr-only">
              Your comment
            </label>
            <textarea
              name="comment"
              id="comment"
              rows="6"
              className="px-0 w-full  text-white border-0 focus:ring-0 focus:outline-none placeholder-gray-100 bg-gray-900"
              placeholder="Write a comment..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center py-2.5 px-4 text-sm font-medium text-center bg-violet-700 rounded-lg focus:ring-4 focus:ring-violet-200 hover:bg-primary-800"
          >
            Post comment
          </button>
        </form>
        <div>
          {comments.map((comment, index) => (
            <article key={index} className="p-6 text-base rounded-lg ">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold">
                    <img
                      className="mr-2 w-6 h-6 rounded-full"
                      src={"/blog.png"}
                      alt={comment.author}
                    />
                    {comment.author}
                  </p>
                  <p className="text-sm text-gray-200">
                    <time pubdate dateTime={comment.date}>
                      {comment.date}
                    </time>
                  </p>
                </div>
                <div className="relative">
                  <button
                    id={`dropdownComment${index + 1}Button`}
                    onClick={() => handleDropdownToggle(index)}
                    className="inline-flex items-center p-2 text-sm font-medium  marker:rounded-lg  focus:ring-1 rounded-full focus-within:ring-slate-600 focus:outline-none "
                    type="button"
                  >
                    <Icon icon="ph:dots-three-bold" className="w-6 h-6" />
                    <span className="sr-only">Comment settings</span>
                  </button>
                  {/* Dropdown menu */}
                  {activeDropdown === index && (
                    <div
                      className="z-10 absolute mt-2 w-36 marker:rounded rounded-md top-5 left-5 divide-y  shadow bg-gray-700 divide-gray-600"
                      onClick={e => e.stopPropagation()}
                    >
                      <ul className="py-1 text-sm  text-gray-200">
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 h hover:bg-gray-600"
                            onClick={e => {
                              e.preventDefault();
                              setActiveDropdown(null);
                            }}
                          >
                            <Icon icon={"editOutline"} className="mr-2" />
                            Edit
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4  hover:bg-gray-600"
                            onClick={e => {
                              e.preventDefault();
                              setActiveDropdown(null);
                            }}
                          >
                            <Icon icon={"trash2Outline"} className="mr-2" />
                            Remove
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4  hover:bg-gray-600"
                            onClick={e => {
                              e.preventDefault();
                              setActiveDropdown(null);
                            }}
                          >
                            <Icon icon={"alertCircleOutline"} className="mr-2" />
                            Report
                          </a>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </footer>
              <p className=" text-gray-300">{comment.content}</p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center text-sm  hover:underline text-gray-400 font-medium"
                >
                  <Icon icon={"editOutline"} className="mr-1.5 w-3.5 h-3.5" />
                  Reply
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommentBox;
