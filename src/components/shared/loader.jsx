import React from "react";

function Loader() {
  return (
    <div>
      <div class="flex justify-center items-center h-screen">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
      </div>
    </div>
  );
}

export default Loader;
