import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-white">
      <nav className=" container  mx-auto flex justify-between py-3">
        <div className="logo">
          <Link
            to="/"
            className=" text-lg font-black text-amber-600 hover:text-sky-600"
          >
            Module-7
          </Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link
              to="/"
              className=" text-lg font-medium text-amber-600 hover:text-sky-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className=" text-lg font-medium text-amber-600 hover:text-sky-600"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
