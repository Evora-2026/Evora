import { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { useTheme } from '../context/useTheme';
import { navLogo } from '../utils/assets';
import './Header.css';

const navLinks = [
  { href: '#home', key: 'home' as const },
  { href: '#about', key: 'about' as const },
  { href: '#products', key: 'products' as const },
  { href: '#shipping', key: 'shipping' as const },
  { href: '#contact', key: 'contact' as const },
];

function ThemeIcon({ isDark }: { isDark: boolean }) {
  if (isDark) {
    return (
      <svg className="header__theme-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <path
          d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg className="header__theme-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 14.5A7.5 7.5 0 0 1 9.5 3 6 6 0 1 0 21 14.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Header() {
  const { t, toggleLanguage } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
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
            className="header__theme"
            onClick={toggleTheme}
            aria-label={isDark ? t.themeLight : t.themeDark}
          >
            <ThemeIcon isDark={isDark} />
          </button>

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
