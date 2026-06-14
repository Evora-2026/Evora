import { useLanguage } from '../context/useLanguage';
import { heroImage, logo } from '../utils/assets';
import Reveal from './Reveal';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <Reveal className="hero__content" variant="left">
          <img src={logo} alt="EVORA" className="hero__logo" />
          <p className="hero__tagline">{t.hero.tagline}</p>
          <a href="#products" className="btn btn--primary hero__cta">
            {t.hero.cta}
          </a>
        </Reveal>
        <Reveal className="hero__visual" variant="right" delay={150}>
          <div className="hero__image-wrap">
            <img src={heroImage} alt="EVORA handcrafted candle" className="hero__image" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
