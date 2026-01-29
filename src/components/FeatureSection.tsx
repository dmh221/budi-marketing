import { type ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

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
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax effect for visual element
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax - visual moves slower than text (creates depth)
  const visualY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);
  const textY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [20, -20]);

  const isTextLeft = layout === 'text-left';

  // Animation variants for fade + scale + blur reveal
  const textVariants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
      scale: shouldReduceMotion ? 1 : 0.95,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(4px)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const // Custom easing for smooth feel
      }
    }
  };

  const visualVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.9,
      filter: shouldReduceMotion ? "blur(0px)" : "blur(8px)"
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        delay: shouldReduceMotion ? 0 : 0.2,
        ease: [0.22, 1, 0.36, 1] as const
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-20 lg:py-24 ${className}`}
    >
      <div
        className={`
          flex flex-col gap-8 sm:gap-10 md:gap-12 items-center
          lg:flex-row lg:gap-20
          ${isTextLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}
        `}
      >
        {/* Text Content - with parallax */}
        <motion.div
          className="flex-1 space-y-6 max-w-xl"
          style={{ y: textY, transform: 'translateZ(0)' }}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black uppercase tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-secondary leading-relaxed whitespace-pre-line">
            {body}
          </p>
        </motion.div>

        {/* Visual Content - with stronger parallax for depth */}
        <motion.div
          className="flex-1 w-full flex justify-center"
          style={{ y: visualY, transform: 'translateZ(0)', willChange: 'transform' }}
          variants={visualVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px", amount: 0.2 }}
        >
          {visual}
        </motion.div>
      </div>
    </section>
  );
}
