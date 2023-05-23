import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
const Header = () => {
  return (
    <header className="bg-white shadow text-black flex px-10 items-center justify-center ">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold flex items-center gap-2 "
        >
          <FaHome />
          Home
        </Link>
        <div className="flex items-center space-x-8">
          <Link
            href="/JourneyListView"
            className="hover:text-slate-900 text-lg"
          >
            Journey
          </Link>
          <Link
            href="/StationListView"
            className="hover:text-slate-900 text-lg"
          >
            Station
          </Link>
          <Link href="/Import" className="hover:text-slate-900 text-lg">
            Import
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
