import React from "react";
import { Link } from "react-router-dom";

import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>React Router DOM</h1>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>

          <li className="navigation__item">
            <Link to="/article">Article</Link>
          </li>

          <li className="navigation__item">
            <Link to="/posts">Posts</Link>
          </li>

          <li className="navigation__item">
            <Link to="/redirect/flick">Redirect</Link>
          </li>

          <li
            className="navigation__item"
            title="Aviso! esta página pode causar epilepsia ou convulções"
          >
            <Link to="/redirect/rgb">RGB-epilético-DANGER</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
