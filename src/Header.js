import React from "react";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <div className="buttons center">
    <Link className="link" to="/">
        <button className="btn">Home</button>
    </Link>
    <Link className="link" to="/shortlisted">
        <button className="btn">ShortListed</button>
    </Link>
    <Link className="link" to="/rejected">
        <button className="btn">Rejected</button>
    </Link>
  </div>
);

export default Header;
