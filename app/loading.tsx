"use client";
import React from "react";
import { Riple } from "react-loading-indicators";

const loading = () => {
  return (
    <main className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
      <Riple color="#023F3A" size="large" text="" textColor="" />
    </main>
  );
};

export default loading;
