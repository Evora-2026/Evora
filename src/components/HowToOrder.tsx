import { useLanguage } from '../context/useLanguage';
import { INSTAGRAM_URL } from '../config/social';
import Reveal from './Reveal';
import './Section.css';
import './HowToOrder.css';

export default function HowToOrder() {
  const { t } = useLanguage();

  return (
    <section id="order" className="section section--order">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{t.howToOrder.title}</h2>
          <div className="section__divider section__divider--animate" />
          <p className="order__subtitle">{t.howToOrder.subtitle}</p>
        </Reveal>

        <div className="order__steps">
          {t.howToOrder.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 130}>
              <article className="order__step">
                <span className="order__step-num">{index + 1}</span>
                <h3 className="order__step-title">{step.title}</h3>
                <p className="order__step-text">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <a
            href={INSTAGRAM_URL}
            className="btn btn--primary order__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.howToOrder.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
