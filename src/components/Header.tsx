import { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { navLogo } from '../utils/assets';
import './Header.css';

const navLinks = [
  { href: '#home', key: 'home' as const },
  { href: '#about', key: 'about' as const },
  { href: '#products', key: 'products' as const },
  { href: '#shipping', key: 'shipping' as const },
  { href: '#contact', key: 'contact' as const },
];

export default function Header() {
  const { t, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <a href="#home" className="header__logo" onClick={handleNavClick}>
          <span className="header__logo-frame">
            <img src={navLogo} alt="EVORA" className="header__logo-img" />
          </span>
        </a>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__links">
            {navLinks.map(({ href, key }) => (
              <li key={key}>
                <a href={href} onClick={handleNavClick}>
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="header__lang"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {t.langToggle}
          </button>

          <button
            type="button"
            className={`header__menu-btn ${menuOpen ? 'header__menu-btn--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <button
          type="button"
          className="header__overlay"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
      )}
    </header>
  );
}
