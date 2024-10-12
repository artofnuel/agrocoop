import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-16 bg-primary">
      <nav className="w-full h-full flex flex-col justify-center items-center">
        <Link
          href="/"
          className="text-lg md:text-2xl font-black uppercase text-white"
        >
          Agrocoop
        </Link>
        <p className="text-white/60 pb-2 text-sm">
          Copyright© 2024 Agrocoop, LLC, All rights reserved.
        </p>
      </nav>
    </footer>
  );
};

export default Footer;
