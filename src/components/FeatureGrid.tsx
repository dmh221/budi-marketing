import {
  CalendarIcon,
  BookmarkIcon,
  ScaleIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import useScrollAnimation from '@/hooks/useScrollAnimation';

// Custom icons for features that don't have heroicons equivalents
const CookingPotIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
  </svg>
);

const AvocadoIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z M12 9a3 3 0 100 6 3 3 0 000-6z" />
  </svg>
);

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: CookingPotIcon,
    title: 'Cooking-First',
    description: 'Built for doing, not browsing'
  },
  {
    icon: AvocadoIcon,
    title: 'Calm by Design',
    description: 'No ads or scrolling, just your recipes'
  },
  {
    icon: ScaleIcon,
    title: 'Recipe Scaling',
    description: 'Scale quantities up or down, or remove them entirely'
  },
  {
    icon: BookmarkIcon,
    title: 'Recipe Import',
    description: 'Instantly save recipes for later'
  },
  {
    icon: CalendarIcon,
    title: 'Cooking History',
    description: 'Understand your cooking trends'
  },
  {
    icon: ArrowTrendingUpIcon,
    title: 'Easy Upgrades',
    description: 'Small changes that actually fit'
  }
];

export default function FeatureGrid() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-20"
    >
      <div
        className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}
        `}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="p-8 bg-[#2a2a2a] rounded-2xl hover:bg-[#333333] transition-all group"
              style={{ animationDelay: isVisible ? `${index * 50}ms` : '0ms' }}
            >
              <Icon className="w-12 h-12 text-budi-lime mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-normal text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
