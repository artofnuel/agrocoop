import React from "react";

const TopBar = () => {
  return (
    <div className="w-full border-b px-4 mb-4 mt-4 pb-6 border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="text-sm font-bold block">
            Welcome to the Dashboard
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
