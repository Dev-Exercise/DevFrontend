import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 text-black">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-center">
        <div className="flex items-center space-x-8">
          <Link
            href="/JourneyListView"
            className="hover:text-slate-900 text-lg"
          >
            Journey List
          </Link>
          <Link
            href="/StationListView"
            className="hover:text-slate-900 text-lg"
          >
            Station List
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
