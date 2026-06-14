import { type CSSProperties, type ReactNode } from 'react';
import { useInView } from '../hooks/useInView';
import './Reveal.css';

type RevealVariant = 'up' | 'left' | 'right' | 'scale';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  variant = 'up',
}: RevealProps) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal--${variant} ${inView ? 'reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
