import React from "react";
import { FaAngleDoubleLeft } from "react-icons/fa";

const page = () => {
  return (
    <div className="w-full border-b px-4 mb-4 mt-4 pb-6">
      <p className="text-base md:text-lg font-bold flex gap-3 items-center text-primary">
        <FaAngleDoubleLeft size={40} className="p-3 rounded-full bg-white" />{" "}
        Please select an icon
        <br />
        from the sidebar
      </p>
    </div>
  );
};

export default page;
