import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-black/60 text-white top-10 left-10 w-full z-50">
        <div className="mx-auto max-w-6xl py-6 flex justify-between items-center">
          <Link href="/">
            <h1 className="font-bold text-2xl text-white-500">DEMO APP</h1>
          </Link>
          <div className="flex justify-start items-center space-x-3">
            <button
              role="link"
              type="button"
              className="block bg-green-500 px-4 py-2 font-bold hover:bg-green-600 text-sm rounded-lg"
            >
              <Link href="/login">LOGIN</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
