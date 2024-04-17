import Dashboard from "@/components/shared/dashboard";
import React from "react";

function layout({ children }) {
  return (
    <div className="flex gap-4 relative ">
      <Dashboard />
      {children}
    </div>
  );
}

export default layout;
