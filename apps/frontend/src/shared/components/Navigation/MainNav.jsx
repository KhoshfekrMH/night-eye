import routes from "../../../routes";
import Dropdown from "./Dropdown";

import "./MainNav.css";

function MainNav({ links = [] }) {
  const archiveSubMenuRoutes = [
    { path: "/archive/space", label: "Space" },
    { path: "/archive/nasa", label: "Nasa" },
    { path: "/archive/tech", label: "Technology" },
  ];

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <Dropdown links={links} />
        <img src="./Night Eye Logo.png" className="w-16" alt="Night Eye Logo" />
        <div className="navbar-start">
          <a className="logo btn btn-ghost text-xl" href="/">
            Night Eye
          </a>
        </div>
        <div className="navbar hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.path}>
                <a href={link.path}>{link.label}</a>
              </li>
            ))}
            <li>
              <details>
                <summary>
                  <a href="/archive">Archive</a>
                </summary>
                <ul className="p-2">
                  {archiveSubMenuRoutes.map((item) => (
                    <li key={item.path}>
                      <a href={item.path}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MainNav;
