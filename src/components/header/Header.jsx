import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <nav className="flex justify-around">
        <div className="logo">
          <Link to="/">Module-7</Link>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
