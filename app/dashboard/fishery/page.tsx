import React from "react";
import FisheryTable from "../components/tables/FisheryTable";

const page = () => {
  return (
    <div className="w-full px-4 mb-4 mt-4 pb-6">
      <div className="overflow-hidden">
        <FisheryTable />
      </div>
    </div>
  );
};

export default page;
