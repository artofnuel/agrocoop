"use client";
import React, { useEffect, useState } from "react";

const FarmerTable = () => {
  const [farmers, setFarmers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFarmers = async () => {
      try {
        const response = await fetch("/api/farmers");
        const data = await response.json();
        setFarmers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching farmers:", error);
        setLoading(false);
      }
    };
    fetchFarmers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="w-full h-full container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Farmers</h1>
      <div className="h-[500px] overflow-y-scroll">
        <table className="hidden md:table table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="px-4 py-2 rounded-tl-md">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone No</th>
              <th className="px-4 py-2">Plot Location</th>
              <th className="px-4 py-2 rounded-tr-md">Number of Plots</th>
            </tr>
          </thead>
          <tbody className="rounded-b-md">
            {farmers.map((entry) => (
              <tr key={entry.id} className="rounded-b-md">
                <td className="px-4 py-2 border border-gray-300 rounded-bl-md">
                  {entry.id}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.phoneNumber}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.plotLocation?.map((loc, index) => (
                    <span className="pr-2" key={index}>
                      {loc}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-2 border border-gray-300 rounded-br-md">
                  {entry.numberOfPlots}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mobile-friendly stacked format */}
        <div className="md:hidden space-y-4">
          {farmers.map((entry) => (
            <div
              key={entry.id}
              className="border border-gray-300 rounded-lg p-4 shadow-sm bg-white"
            >
              <p>
                <span className="font-bold">Id:</span> {entry.id}
              </p>
              <p>
                <span className="font-bold">Name:</span> {entry.name}
              </p>
              <p>
                <span className="font-bold">Phone No:</span> {entry.phoneNumber}
              </p>
              <p>
                <span className="font-bold">Plot Location:</span>{" "}
                {entry.plotLocation?.join(", ")}
              </p>
              <p>
                <span className="font-bold">Number of Plots:</span>{" "}
                {entry.numberOfPlots}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FarmerTable;
