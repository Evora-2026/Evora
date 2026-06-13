import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import { useLanguage } from '../context/useLanguage';
import { useVisibleSlides } from '../hooks/useVisibleSlides';
import { getGalleryImages } from '../utils/assets';
import './ProductCarousel.css';

const AUTO_PLAY_MS = 4000;

export default function ProductCarousel() {
  const { dir } = useLanguage();
  const images = getGalleryImages();
  const visibleSlides = useVisibleSlides();
  const viewportRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = Math.max(0, images.length - visibleSlides);

  const goTo = useCallback(
    (index: number) => {
      if (images.length <= visibleSlides) {
        setCurrentIndex(0);
        return;
      }
      setCurrentIndex(index > maxIndex ? 0 : index);
    },
    [images.length, maxIndex, visibleSlides],
  );

  const goNext = useCallback(() => {
    goTo(currentIndex >= maxIndex ? 0 : currentIndex + 1);
  }, [currentIndex, goTo, maxIndex]);

  const goPrev = useCallback(() => {
    goTo(currentIndex <= 0 ? maxIndex : currentIndex - 1);
  }, [currentIndex, goTo, maxIndex]);

  useEffect(() => {
    const updateWidth = () => {
      if (viewportRef.current) {
        setSlideWidth(viewportRef.current.offsetWidth / visibleSlides);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [visibleSlides]);

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (isPaused || images.length <= visibleSlides) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused, images.length, visibleSlides]);

  if (images.length === 0) return null;

  const offset = currentIndex * slideWidth;
  const translateX = dir === 'rtl' ? offset : -offset;

  return (
    <div
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel__viewport" ref={viewportRef}>
        <div
          className="carousel__track"
          style={{
            transform: `translateX(${translateX}px)`,
            '--visible-slides': visibleSlides,
          } as CSSProperties}
        >
          {images.map((image, index) => (
            <div className="carousel__slide" key={image}>
              <div className="carousel__card">
                <img
                  src={image}
                  alt={`EVORA candle ${index + 1}`}
                  className="carousel__image"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > visibleSlides && (
        <>
          <button
            type="button"
            className="carousel__btn carousel__btn--prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            className="carousel__btn carousel__btn--next"
            onClick={goNext}
            aria-label="Next slide"
          >
            ›
          </button>

          <div className="carousel__dots">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
