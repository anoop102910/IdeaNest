"use client";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

function NewBlog() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    tags: "",
  });
  const [loading, setloading] = useState(false);

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setloading(true);
      formData.authorId = 1;
      await axios.post("/api/blog", formData);
      toast.success("Blog posted successfully");
      setloading(false);
    } catch (error) {
      setloading(false);
      toast.error(error.response.data ? error.response.data : "Something went wrong");
    }
  };

  return (
    <div className="flex justify-between items-center mt-6 w-full ">
      <div className="w-full  mx-auto max-w-sm p-4  rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-slate-200">Create a new blog</h5>
          <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-slate-200">
              Title
            </label>
            <input
              type="title"
              name="title"
              id="title"
              className="bg-transparent border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="E.g. How react works"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="tags" className="block mb-2 text-sm font-medium text-slate-200">
              Tags
            </label>
            <input
              type="tags"
              name="tags"
              id="tags"
              className="bg-transparent border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="E.g. React Node Web-developement"
              value={formData.tags}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label for="content" class="block mb-2 text-sm font-medium text-slate-200">
              Add content
            </label>
            <textarea
              id="content"
              rows="4"
              name="content"
              value={formData.content}
              onChange={handleChange}
              class="block p-2.5 w-full text-sm bg-transparent border border-slate-300 focus:ring-blue-500 focus:border-blue-500 rounded-lg text-slate-100 placeholder-slate-400"
              placeholder="Write a blog..."
            ></textarea>
          </div>
          <div className="flex items-start"></div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            {loading ? "Pusblishing..." : "Publish Now"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewBlog;
