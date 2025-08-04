import { Link } from "react-router-dom";
import { mainNavLinks } from "../../routes";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer sm:footer-horizontal p-10">
        <aside>
          <img
            src="../../../public/Night Eye Logo.png"
            className="w-24"
            alt="Night Eye Website Logo"
          />
          <p className="text-secondary font-bold">Night Eye</p>
          <p>Providing reliable tech, Sci-Fi News since 1992</p>
        </aside>

        <nav aria-label="Footer Navigation">
          <h6 className="footer-title text-secondary">Pages</h6>
          {mainNavLinks.map((link) => (
            <Link key={link.path} to={link.path} className="link link-hover">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="footer footer-center p-4 border-base-200 text-base-100 bg-secondary">
        © {new Date().getFullYear()} Night Eye Industries Ltd. All rights
        reserved.
      </div>
      <div className="text-center p-10">
        Developed by{" "}
        <a
          className="link link-hover"
          href="https://github.com/KhoshfekrMh"
          target="_blank"
          rel="noopener noreferrer"
        >
          P0UYA
        </a>{" "}
        with 🫖 & 🧠
      </div>
    </footer>
  );
}

export default Footer;
