import React from "react";

function Loader() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full  border-l-4 animate-spin  border-gray-200 h-24 w-24"></div>
      </div>
    </div>
  );
}

export default Loader;
