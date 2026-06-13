import { useLanguage } from '../context/useLanguage';
import './Section.css';
import './Shipping.css';

export default function Shipping() {
  const { t } = useLanguage();

  return (
    <section id="shipping" className="section section--shipping">
      <div className="container">
        <h2 className="section__title">{t.shipping.title}</h2>
        <div className="section__divider" />
        <p className="shipping__subtitle">{t.shipping.subtitle}</p>
        <p className="shipping__location">{t.shipping.location}</p>

        <div className="shipping__grid">
          {t.shipping.items.map((item) => (
            <article key={item.title} className="shipping__card">
              <h3 className="shipping__card-title">{item.title}</h3>
              <p className="shipping__card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
