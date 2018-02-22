import React from "react";
import { Link } from "react-router-dom";

export default () =>
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="left brand-logo">
        MovieApp.
      </Link>

      <ul className="right">
        <li key="0">
          <a href="/create">Add a Movie</a>
        </li>
        <li key="1">
          <a href="/rate">Rate a Movie</a>
        </li>
      </ul>
    </div>
  </nav>;

// <div>
//     <h1>
//       MovieApp.
//     </h1>
//     <Link to="/">Dashboard</Link> |
//     <Link to="/create">Add a Movie</Link> |
//     <Link to="/rate">Rate a Movie</Link>
//   </div>
