import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-block">
      <Link to="/" className="header-block__page">
        <p className="header-block__text">Main page</p>
      </Link>
      <Link to="/one" className="header-block__page">
        <p className="header-block__text">page 1</p>
      </Link>
      <Link to="/two" className="header-block__page">
        <p className="header-block__text">page 2</p>
      </Link>
      <Link to="/three" className="header-block__page">
        <p className="header-block__text">page 3</p>
      </Link>
    </div>
  );
}
export default Header;
