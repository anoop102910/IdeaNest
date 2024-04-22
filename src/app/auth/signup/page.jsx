"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import LoadingButton from "@/components/shared/loadbtn";
function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    rememberMe: false,
  });
  const [loading,setLoading] = useState(false);

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      setLoading(true)
      const response = await axios.post("/api/register", JSON.stringify(formData));
      toast.success("Sign in success");
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error);
      toast.error(error.response.data ? error.response.data : "Something went wrong");
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-between items-center mt-2 w-full mb-10 ">
      <div className="w-full  mx-auto max-w-sm p-4 bg-slate-900 border border-slate-800 rounded-lg shadow sm:p-6 md:p-8">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-slate-200">Sign in to our platform</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-200">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-500 border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-slate-200">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-slate-500 border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-200">
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-slate-500 border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-slate-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  name="rememberMe"
                  className="w-4 h-4 border border-slate-300 rounded bg-slate-500 focus:ring-3 focus:ring-blue-300"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
              </div>
              <label htmlFor="remember" className="ms-2 text-sm font-medium text-slate-200">
                Remember me
              </label>
            </div>
            <a href="#" className="ms-auto text-sm text-blue-700 hover:underline">
              Lost Password?
            </a>
          </div>
          <LoadingButton type="submit" loading={loading} onClick={handleSubmit}>
            Login to your Account
          </LoadingButton>

          <div className="text-sm font-medium text-slate-200">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-blue-700 hover:underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
