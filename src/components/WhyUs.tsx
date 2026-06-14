import { useLanguage } from '../context/useLanguage';
import Reveal from './Reveal';
import './Section.css';
import './WhyUs.css';

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="section section--why">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{t.why.title}</h2>
          <div className="section__divider section__divider--animate" />
        </Reveal>
        <div className="why__grid">
          {t.why.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="why__card">
                <h3 className="why__card-title">{item.title}</h3>
                <p className="why__card-text">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
