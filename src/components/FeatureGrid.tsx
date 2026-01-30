import {
  CookingPot,
  Avocado,
  Scales,
  BookBookmark,
  CalendarDots,
  ChartLineUp
} from '@phosphor-icons/react';
import useScrollAnimation from '@/hooks/useScrollAnimation';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CookingPot,
    title: 'Cooking-First',
    description: 'Built for doing, not browsing'
  },
  {
    icon: Avocado,
    title: 'Calm by Design',
    description: 'No ads or scrolling, just your recipes'
  },
  {
    icon: Scales,
    title: 'Recipe Scaling',
    description: 'Scale quantities up or down, or remove them entirely'
  },
  {
    icon: BookBookmark,
    title: 'Recipe Import',
    description: 'Instantly save recipes for later'
  },
  {
    icon: CalendarDots,
    title: 'Cooking History',
    description: 'Understand your cooking trends'
  },
  {
    icon: ChartLineUp,
    title: 'Easy Upgrades',
    description: 'Small changes that actually fit'
  }
];

export default function FeatureGrid() {
  const { ref } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-12 md:py-20 overflow-hidden relative"
      style={{
        background: 'linear-gradient(45deg, #FAF8F1, #F3F2E0, #E4EBBB, #FAF8F1)',
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 15s ease infinite'
      }}
    >
      <div className="relative">
        {/*
          Carousel math: 6 cards × 2 sets = 12 cards total
          Mobile: 240px cards + 12px gaps = (240 × 12) + (12 × 11) = 3012px total, 1506px per set
          Desktop: 280px cards + 16px gaps = (280 × 12) + (16 × 11) = 3536px total, 1768px per set
          Animation translates -50% to loop seamlessly when first set exits left
        */}
        <div
          className="flex gap-3 sm:gap-4 animate-infinite-scroll"
          style={{ width: 'max-content' }}
        >
          {/* First set of features */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[240px] sm:w-[280px] p-4 sm:p-5 md:p-6 bg-white/60 backdrop-blur-xl rounded-xl hover:bg-white/80 transition-all duration-300 group border border-black/5 shadow-sm"
              >
                <Icon className="w-10 h-10 text-budi-lime mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <h3 className="text-base md:text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
          {/* Duplicate set for infinite loop */}
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[240px] sm:w-[280px] p-4 sm:p-5 md:p-6 bg-white/60 backdrop-blur-xl rounded-xl hover:bg-white/80 transition-all duration-300 group border border-black/5 shadow-sm"
              >
                <Icon className="w-10 h-10 text-budi-lime mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                <h3 className="text-base md:text-lg font-semibold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
