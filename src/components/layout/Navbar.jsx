import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../data/portfolio";

export default function Navbar({ sticky, active, menuOpen, onToggleMenu, onNavigate }) {
  return (
    <nav className={`navbar${sticky ? " sticky" : ""}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home" onClick={onNavigate}>
            <span>Seelan.</span>
          </a>
        </div>
        <ul className={`menu${menuOpen ? " active" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={active === link.href ? "active" : undefined}
                aria-current={active === link.href ? "page" : undefined}
                onClick={onNavigate}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div
          className="menu-btn"
          onClick={onToggleMenu}
          role="button"
          tabIndex={0}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onToggleMenu();
            }
          }}
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </div>
      </div>
    </nav>
  );
}
