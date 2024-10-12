import React from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Grid from "./components/Grid";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full grid gap-2 md:gap-4 p-4 grid-cols-[40px,_1fr] md:grid-cols-[220px,_1fr]">
      <div className="w-full">
        <Sidebar />
      </div>
      <div className="bg-secondary w-full h-[100vh] rounded-lg pb-4 shadow overflow-hidden">
        <TopBar />
        <Grid />
        {children} {/* The page content (tables) will render here */}
      </div>
    </main>
  );
};

export default Layout;
