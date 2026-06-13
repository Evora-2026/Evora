import { useLanguage } from '../context/useLanguage';
import { INSTAGRAM_URL } from '../config/social';
import './Section.css';
import './HowToOrder.css';

export default function HowToOrder() {
  const { t } = useLanguage();

  return (
    <section id="order" className="section section--order">
      <div className="container">
        <h2 className="section__title">{t.howToOrder.title}</h2>
        <div className="section__divider" />
        <p className="order__subtitle">{t.howToOrder.subtitle}</p>

        <div className="order__steps">
          {t.howToOrder.steps.map((step, index) => (
            <article key={step.title} className="order__step">
              <span className="order__step-num">{index + 1}</span>
              <h3 className="order__step-title">{step.title}</h3>
              <p className="order__step-text">{step.text}</p>
            </article>
          ))}
        </div>

        <a
          href={INSTAGRAM_URL}
          className="btn btn--primary order__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.howToOrder.cta}
        </a>
      </div>
    </section>
  );
}
