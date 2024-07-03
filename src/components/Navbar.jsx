import { MdOutlineDashboard } from "react-icons/md";
import "./Navbar.css";

const LINKS = [
  {
    href: "/",
    title: "Əsas səhifə",
  },
  {
    href: "/",
    title: "Xidmətlər",
  },
  {
    href: "/",
    title: "Haqqımda",
  },
  {
    href: "/",
    title: "Əlaqə",
  },
];

function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-nav container">
          <div className="logo">
            <div className="logo-icon">
              <MdOutlineDashboard size={32} />
            </div>
            <div className="logo-text">Lup.Az</div>
          </div>
          <ul className="links">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
