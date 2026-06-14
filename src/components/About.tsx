import { useLanguage } from '../context/useLanguage';
import { logoSecondary } from '../utils/assets';
import Reveal from './Reveal';
import './Section.css';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section--about">
      <div className="container about__grid">
        <Reveal className="about__content" variant="left">
          <h2 className="section__title">{t.about.title}</h2>
          <div className="section__divider section__divider--start section__divider--animate" />
          <p className="section__text">{t.about.text}</p>
        </Reveal>
        <Reveal className="about__visual" variant="right" delay={120}>
          <img src={logoSecondary} alt="EVORA brand" className="about__brand-img" />
        </Reveal>
      </div>
    </section>
  );
}
