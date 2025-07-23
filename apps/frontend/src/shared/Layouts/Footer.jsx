import { mainNavLinks } from "../../routes";

function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="footer sm:footer-horizontal p-10">
        <aside>
          <img
            src="./Night Eye Logo.png"
            className="w-24"
            alt="Night Eye Website Logo"
          />
          <p className="title-text">Night Eye</p>
          <p>Providing reliable tech, Sci-Fi News since 1992</p>
        </aside>

        <nav aria-label="Footer Navigation">
          <h6 className="footer-title">Navigation</h6>
          {mainNavLinks.map((link) => (
            <a key={link.path} href={link.path} className="link link-hover">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer footer-center p-4 border-base-200 copyright">
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
