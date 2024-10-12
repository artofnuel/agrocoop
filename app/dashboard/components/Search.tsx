"use client";
import React, { useState } from "react";
import { FiSearch, FiCommand } from "react-icons/fi";
import { CommandMenu } from "./CommandMenu";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className="w-full"
      onFocus={(e) => {
        e.target.blur();
        setOpen(true);
      }}
    >
      <main className="w-full bg-stone-200 mb-4 relative rounded flex gap-2 justify-center items-center px-2 py-1.5 text-sm">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          // onFocus={(e) => {
          //   e.target.blur();
          //   setOpen(true);
          // }}
          className="hidden md:block bg-transparent placeholder:text-stone-400 focus:outline-none"
        />
        <span className="hidden p-1 text-xs md:flex gap-0.5 items-center shadow bg-stone-50 rounded absolute right-1.5 top-[38%] -translate-y-[30%]">
          <FiCommand /> K
        </span>
        <CommandMenu open={open} setOpen={setOpen} />
      </main>
    </button>
  );
};

export default Search;
