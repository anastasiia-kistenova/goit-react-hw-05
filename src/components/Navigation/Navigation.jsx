
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">MovieDetailsPage</Link>
      <Link to="/products">Movies</Link>
    </nav>
  );
};

export default Navigation;
