import { type ReactNode } from 'react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface FeatureSectionProps {
  heading: string;
  body: string;
  visual: ReactNode;
  layout: 'text-left' | 'text-right';
  className?: string;
}

export default function FeatureSection({
  heading,
  body,
  visual,
  layout,
  className = ''
}: FeatureSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const isTextLeft = layout === 'text-left';

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 ${className}`}
    >
      <div
        className={`
          flex flex-col gap-12 items-center
          lg:flex-row lg:gap-20
          ${isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6 max-w-xl">
          <h2 className="text-2xl md:text-3xl font-normal text-black uppercase tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed whitespace-pre-line">
            {body}
          </p>
        </div>

        {/* Visual Content */}
        <div className="flex-1 w-full flex justify-center">
          {visual}
        </div>
      </div>
    </section>
  );
}
