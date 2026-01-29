import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [animationKey, setAnimationKey] = useState(0);

  // Repeat text animation every 45 seconds
  useEffect(() => {
    if (shouldReduceMotion) return;

    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1);
    }, 45000); // 45 seconds

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  // Trigger animation on hover
  const handleHover = () => {
    if (!shouldReduceMotion) {
      setAnimationKey(prev => prev + 1);
    }
  };

  // Scroll-linked animations for hero exit
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Fade out and scale down content as user scrolls past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-20 sm:pb-24 md:pb-32 lg:pb-36 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(45deg, #FAF8F1, #F3F2E0, #E4EBBB, #FAF8F1)',
        backgroundSize: '200% 200%',
        animation: shouldReduceMotion ? 'none' : 'gradient-shift 11s ease infinite'
      }}
    >
      {/* Radial depth gradient behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(250,248,241,0.4) 0%, rgba(243,242,224,0.2) 35%, rgba(228,235,187,0) 70%)'
        }}
      />

      {/* Text content */}
      <motion.div
        className="relative mx-auto text-center"
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          scale: shouldReduceMotion ? 1 : contentScale,
          y: shouldReduceMotion ? 0 : contentY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Main Headline with refined animation */}
        <motion.h1
          className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black mb-5 mx-auto cursor-pointer"
          style={{
            maxWidth: '820px',
            letterSpacing: '-0.02em',
            lineHeight: '1.08'
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.58,
            ease: "easeOut"
          }}
          onMouseEnter={handleHover}
        >
          {shouldReduceMotion ? (
            "Cooking has become cognitively expensive."
          ) : (
            <>
              {"Cooking has become cognitively expensive.".split(" ").map((word, i) => (
                <motion.span
                  key={`${animationKey}-${i}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.22, 1, 0.36, 1] as const
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </>
          )}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-sm md:text-base lg:text-lg font-normal mx-auto"
          style={{
            maxWidth: '640px',
            color: 'rgba(0, 0, 0, 0.87)'
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            delay: shouldReduceMotion ? 0 : 0.1,
            ease: "easeOut"
          }}
        >
          Budi provides the infrastructure to make it easy.
        </motion.p>
      </motion.div>
    </section>
  );
}
