import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full h-16 bg-white text-primary">
      <nav className="w-full h-full flex justify-center items-center border-b border-primary/10 drop-shadow-sm">
        <Link href="/" className="text-lg md:text-2xl font-black uppercase">
          Agrocoop
        </Link>
      </nav>
    </header>
  );
};

export default Header;
