import { useLanguage } from '../context/useLanguage';
import { INSTAGRAM_DISPLAY, INSTAGRAM_URL } from '../config/social';
import './Section.css';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section section--contact">
      <div className="container contact__inner">
        <h2 className="section__title">{t.contact.title}</h2>
        <div className="section__divider" />
        <p className="contact__text">{t.contact.text}</p>
        <a
          href={INSTAGRAM_URL}
          className="btn btn--primary contact__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.contact.cta} — {INSTAGRAM_DISPLAY}
        </a>
      </div>
    </section>
  );
}
