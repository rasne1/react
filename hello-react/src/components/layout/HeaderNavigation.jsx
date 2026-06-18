import { Link, NavLink } from "react-router-dom";
import Login from "../user/Login";

export const HeaderNavigation = () => {
  return (
    <header>
      <Login />
      <nav className="menu-navigation">
        <ul>
          <li>
            <NavLink to="/tmdb">tmdb</NavLink>
          </li>
          <li>
            <NavLink to="/todo">todo</NavLink>
          </li>
          <li>
            <NavLink to="/article">article</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
