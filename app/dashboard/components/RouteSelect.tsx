"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { GiCirclingFish } from "react-icons/gi";
import { GrUserWorker } from "react-icons/gr";
import { MdForest } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

type Route = {
  Icon: IconType;
  title: string;
  route: string;
};

const RouteSelect = () => {
  // Store the currently selected route
  const [selectedRoute, setSelectedRoute] = useState<string>("");

  const routes: Route[] = [
    { title: "Home", route: "/", Icon: AiFillHome },
    { title: "Farmers", route: "farmer", Icon: GrUserWorker },
    { title: "Fishery", route: "fishery", Icon: GiCirclingFish },
    { title: "Palm Trees", route: "palmtrees", Icon: MdForest },
  ];

  return (
    <div className="w-full space-y-2">
      {routes.map(({ title, route, Icon }) => (
        <Route
          key={route}
          selected={selectedRoute === route}
          Icon={Icon}
          title={title}
          route={route}
          onClick={() => setSelectedRoute(route)} // Update selected route
        />
      ))}
    </div>
  );
};

export default RouteSelect;

const Route = ({
  selected,
  Icon,
  title,
  route,
  onClick,
}: Route & { selected: boolean; onClick: () => void }) => {
  return (
    <Link
      href={`/dashboard/${route}`}
      onClick={onClick} // Handle click to update the selected route
      className={`flex items-center justify-center md:justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-all ${
        selected
          ? "bg-white text-primary shadow-md" // Styles for the selected route
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-primary" : ""} />
      <span className="hidden md:block">{title}</span>
    </Link>
  );
};
