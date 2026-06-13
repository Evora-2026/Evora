import { useEffect, useState } from 'react';

function getVisibleSlides(width: number): number {
  if (width <= 520) return 1;
  if (width <= 820) return 2;
  if (width <= 1100) return 3;
  return 4;
}

export function useVisibleSlides(): number {
  const [visibleSlides, setVisibleSlides] = useState(() =>
    getVisibleSlides(window.innerWidth),
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return visibleSlides;
}
