import Dashboard from "./components/dashboard";

function layout({ children }) {
  return (
    <div className="flex gap-4 relative ">
      <Dashboard />
      {children}
    </div>
  );
}

export default layout;
