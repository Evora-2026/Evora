import { useLanguage } from '../context/useLanguage';
import { logoSecondary } from '../utils/assets';
import './Section.css';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section--about">
      <div className="container about__grid">
        <div className="about__content">
          <h2 className="section__title">{t.about.title}</h2>
          <div className="section__divider section__divider--start" />
          <p className="section__text">{t.about.text}</p>
        </div>
        <div className="about__visual">
          <img src={logoSecondary} alt="EVORA brand" className="about__brand-img" />
        </div>
      </div>
    </section>
  );
}
