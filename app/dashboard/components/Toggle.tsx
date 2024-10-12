"use client";
import { mediaAssets } from "@/app/assets";
import Image from "next/image";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";

const Toggle = () => {
  return (
    <main>
      <div className="border-b mb-4 mt-2 pb-4 border-stone-300">
        <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
          <Image
            src={mediaAssets.avatar}
            alt="avatar"
            className="size-8 rounded-full shrink-0 bg-violet-500"
          />
          <div className="text-start">
            <span className="block text-sm font-semibold">Name</span>
            <span className="block text-xs text-stone-500">Email</span>
          </div>
          <FiCheckCircle className="absolute right-2 top-[35%] text-xs" />
        </button>
      </div>
    </main>
  );
};

export default Toggle;
