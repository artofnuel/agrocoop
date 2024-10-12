import React from "react";
import FarmerTable from "../components/tables/FarmerTable";

const Page = () => {
  return (
    <div className="w-full px-4 mb-4 mt-4 pb-6">
      <div className="overflow-hidden">
        {/* Added this div to handle overflow */}
        <FarmerTable />
      </div>
    </div>
  );
};

export default Page;
