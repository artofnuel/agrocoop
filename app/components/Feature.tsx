"use client";

import React from "react";
import dynamic from "next/dynamic";
import { video } from "../assets";

const VideoPlayer = dynamic(() => import("./VideoPlayer"), { ssr: false });

const Feature = () => {
  return (
    <main className="w-full h-[500px] overflow-hidden bg-primary/50 relative">
      <div className="absolute inset-0 bg-primary/20 pointer-events-none z-10"></div>
      <div className="w-full h-full flex justify-center items-center rounded-md">
        <VideoPlayer videoUrl={video.youtube} />
      </div>
    </main>
  );
};

export default Feature;
