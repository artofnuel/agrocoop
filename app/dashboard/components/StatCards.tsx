import React, { use } from "react";
import prisma from "@/lib/prisma";

type Props = {
  name: string;
  number: number;
};

const StatCards = async () => {
  const users = await prisma.user.findMany();
  const fishery = await prisma.fishery.findMany();
  const palmtrees = await prisma.palmTrees.findMany();

  return (
    <>
      <Card name={"Farmers"} number={users.length} />
      <Card name={"Fishes"} number={fishery.length} />
      <Card name={"Palm Trees"} number={palmtrees.length} />
      {/* <Card title="Farmer" value="30303" pillText="10%" staff={40} /> */}
      {/* <Card title="Farmer" value="30303" pillText="10%" staff={40} /> */}
    </>
  );
};

export default StatCards;

const Card = async ({ name, number }: Props) => {
  const users = await prisma.user.findMany();

  return (
    <div className="w-full text-primary p-3 bg-white/90 rounded col-span-3 last:col-span-6">
      <div className="w-full h-full flex mb-8 items-start justify-between">
        <div className="w-full h-full flex flex-col gap-2 justify-center items-start">
          <p className="text-xs font-semibold">Total number of {name}</p>
          <p className="w-10 aspect-video p-1 text-center bg-primary text-white rounded-md">
            {number}
          </p>
        </div>
      </div>
    </div>
  );
};
