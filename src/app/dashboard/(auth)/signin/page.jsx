"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = event => {
    const { name, value, type, checked } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  const handleGoogleLogin = e => {
    e.preventDefault();
    console.log("Google login clicked");
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex justify-between items-center mt-6 w-full ">
      {/*   <Image
        className="animate-float w-[40%] rounded-md "
        width="1000"
        height="1000"
        src="/hero.png"
        alt=""
      /> */}
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
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login to your account
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center mt-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4M12 4v16m8-8H4"
              />
            </svg>
            Sign in with Google
          </button>
          <div className="text-sm font-medium text-slate-200">
            Not registered?{" "}
            <Link href="/dashboard/signup" className="text-blue-700 hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
