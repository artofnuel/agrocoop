import React from "react";
import prisma from "@/lib/prisma";

const FisheryTable = async () => {
  const entries = await prisma.fishery.findMany();

  return (
    <main className="w-full h-full container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fishery</h1>

      {/* Responsive table for desktop, stacked format for mobile */}
      <div className="h-[500px] overflow-y-scroll">
        <table className="hidden md:table table-auto w-full border border-collapse">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="px-4 py-2 rounded-tl-md">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Number of Ponds</th>
              <th className="px-4 py-2">Number of Starter Fishes</th>
              <th className="px-4 py-2">Cost of Investment</th>
              <th className="px-4 py-2 rounded-tr-md">Income of Sales</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => (
              <tr key={entry.id}>
                <td className="px-4 py-2 border border-gray-300">{entry.id}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.typeOfFish}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.numberOfPonds}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.numberOfFishesPurchased}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.costOfInvestment}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {entry.amountFromSales}
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
                <span className="font-bold">Name:</span> {entry.typeOfFish}
              </p>
              <p>
                <span className="font-bold">Number of Ponds:</span>{" "}
                {entry.numberOfPonds}
              </p>
              <p>
                <span className="font-bold">Number of Starter Fishes:</span>{" "}
                {entry.numberOfFishesPurchased}
              </p>
              <p>
                <span className="font-bold">Cost of Investment:</span>{" "}
                {entry.costOfInvestment}
              </p>
              <p>
                <span className="font-bold">Income of Sales:</span>{" "}
                {entry.amountFromSales}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FisheryTable;
