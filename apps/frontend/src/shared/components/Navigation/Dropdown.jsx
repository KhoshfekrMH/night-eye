function Dropdown({ links = [] }) {
  const archiveSubMenuRoutes = [
    { path: "/archive/space", label: "Space" },
    { path: "/archive/nasa", label: "Nasa" },
    { path: "/archive/tech", label: "Technology" },
  ];

  return (
    <>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />{" "}
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          {links.map((link) => (
            <li key={link.path}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="/archive">Archive</a>
            <ul className="p-2">
              {archiveSubMenuRoutes.map((item) => (
                <li key={item.path}>
                  <a href={item.path}>{item.label}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Dropdown;
