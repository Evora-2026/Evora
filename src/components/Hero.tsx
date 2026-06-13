import { useLanguage } from '../context/useLanguage';
import { heroImage, logo } from '../utils/assets';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <img src={logo} alt="EVORA" className="hero__logo" />
          <p className="hero__tagline">{t.hero.tagline}</p>
          <a href="#products" className="btn btn--primary hero__cta">
            {t.hero.cta}
          </a>
        </div>
        <div className="hero__visual">
          <img src={heroImage} alt="EVORA handcrafted candle" className="hero__image" />
        </div>
      </div>
    </section>
  );
}
