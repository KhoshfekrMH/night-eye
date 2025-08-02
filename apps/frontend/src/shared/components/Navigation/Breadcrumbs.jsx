import { Link } from "react-router-dom";

function Breadcrumbs({ links = [] }) {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {index === links.length - 1 ? (
              <span className="text-gray-500 cursor-default">{link.label}</span>
            ) : (
              <Link to={link.path}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
