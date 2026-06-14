import { useLanguage } from '../context/useLanguage';
import { INSTAGRAM_URL } from '../config/social';
import ProductCarousel from './ProductCarousel';
import Reveal from './Reveal';
import './Section.css';
import './Products.css';

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section section--products">
      <div className="container">
        <Reveal>
          <h2 className="section__title">{t.products.title}</h2>
          <div className="section__divider section__divider--animate" />
        </Reveal>
        <Reveal delay={100}>
          <ProductCarousel />
        </Reveal>
        <Reveal delay={200}>
          <div className="products__order">
            <p className="products__order-note">{t.products.orderNote}</p>
            <a
              href={INSTAGRAM_URL}
              className="btn btn--primary products__order-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.products.orderCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
