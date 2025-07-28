import { NavLink, Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./BaseNav.css";

function BaseNav({ links = [], children }) {
  const archiveSubMenuRoutes = [
    { path: "/archive/space", label: "Space" },
    { path: "/archive/nasa", label: "Nasa" },
    { path: "/archive/tech", label: "Technology" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Dropdown links={links} />
      <img src="./Night Eye Logo.png" className="w-16" alt="Night Eye Logo" />

      <div className="navbar-start">
        <Link className="logo btn btn-ghost text-xl" to="/">
          Night Eye
        </Link>
      </div>

      <div className="navbar hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <details>
              <summary>
                <NavLink
                  to="/archive"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Archive
                </NavLink>
              </summary>
              <ul className="p-2">
                {archiveSubMenuRoutes.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">{children}</div>
    </div>
  );
}

export default BaseNav;
