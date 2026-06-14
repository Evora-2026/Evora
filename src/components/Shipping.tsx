import { useLanguage } from '../context/useLanguage';
import Reveal from './Reveal';
import './Section.css';
import './Shipping.css';

export default function Shipping() {
  const { t } = useLanguage();

  return (
    <section id="shipping" className="section section--shipping">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{t.shipping.title}</h2>
          <div className="section__divider section__divider--animate" />
          <p className="shipping__subtitle">{t.shipping.subtitle}</p>
          <p className="shipping__location">{t.shipping.location}</p>
        </Reveal>

        <div className="shipping__grid">
          {t.shipping.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="shipping__card">
                <h3 className="shipping__card-title">{item.title}</h3>
                <p className="shipping__card-text">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
