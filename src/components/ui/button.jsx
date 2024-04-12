"use client";

import React from "react";

function Button({ text, className, props }) {
  return (
    <>
      <button
        {...props}
        className={`text-sm px-4 py-2 bg-violet-600 hover:bg-violet-800 rounded-md ${className}`}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
