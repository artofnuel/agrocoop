import React from "react";
import prisma from "@/lib/prisma";

const PalmTreesTable = async () => {
  const entries = await prisma.palmTrees.findMany();

  return (
    <main className="w-full h-full container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Palm Trees</h1>

      {/* Responsive table for desktop, stacked format for mobile */}
      <div className="h-[500px] overflow-y-scroll">
        <table className="hidden md:table table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="px-4 py-2 rounded-tl-md">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2 rounded-tr-md">Palm Trees Planted</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-2 border border-gray-300">{entry.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.PalmTreesPlanted}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Mobile-friendly stacked format */}
        <div className="md:hidden space-y-4">
          {entries.map((entry) => (
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
                <span className="font-bold">Palm Trees Planted:</span>{" "}
                {entry.PalmTreesPlanted}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default PalmTreesTable;
