import { useLanguage } from '../context/useLanguage';
import './Section.css';
import './WhyUs.css';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section section--why">
      <div className="container">
        <h2 className="section__title">{t.why.title}</h2>
        <div className="section__divider" />
        <div className="why__grid">
          {t.why.items.map((item) => (
            <article key={item.title} className="why__card">
              <h3 className="why__card-title">{item.title}</h3>
              <p className="why__card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
