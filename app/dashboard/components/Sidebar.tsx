import React from "react";
import Toggle from "./Toggle";
import Search from "./Search";
import RouteSelect from "./RouteSelect";
import Plan from "./Plan";

const Sidebar = () => {
  return (
    <main className="w-full">
      {/* <div className="w-full flex flex-col justify-start items-center overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]"> */}
      {/* Main content */}
      {/* <Toggle /> */}
      <Search />
      <RouteSelect />
      {/* </div> */}

      {/* <Plan /> */}
    </main>
  );
};

export default Sidebar;
