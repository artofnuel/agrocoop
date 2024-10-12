import React from "react";
import PalmTreesTable from "../components/tables/PalmTreesTable";

const page = () => {
  return (
    <div className="w-full px-4 mb-4 mt-4 pb-6">
      <div className="overflow-hidden">
        <PalmTreesTable />
      </div>
    </div>
  );
};

export default page;
