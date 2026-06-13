import { useLanguage } from '../context/useLanguage';
import { logo } from '../utils/assets';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img src={logo} alt="EVORA" className="footer__logo" />
        <p className="footer__text">{t.footer}</p>
      </div>
    </footer>
  );
}
