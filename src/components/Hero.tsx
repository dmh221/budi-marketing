import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Scroll-linked animations for hero exit
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Fade out and scale down content as user scrolls past
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Slow down orb animations on scroll for depth
  const orbOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  return (
    <section ref={sectionRef} className="relative pt-36 pb-20 px-6 bg-gradient-to-b from-white via-gray-50/40 to-white overflow-hidden">
      {/* Liquid glass background effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: shouldReduceMotion ? 1 : orbOpacity }}
      >
        {/* Orb 1 - Top left corner */}
        <motion.div
          className="absolute top-[10%] left-[5%] w-[450px] h-[450px] bg-[#AFBF41]/40 rounded-full blur-3xl"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, 30, -15, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 2 - Top right */}
        <motion.div
          className="absolute top-[15%] right-[8%] w-[380px] h-[380px] bg-[#AFBF41]/35 rounded-full blur-3xl"
          animate={{
            x: [0, -35, 25, 0],
            y: [0, 40, -20, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 3 - Middle left */}
        <motion.div
          className="absolute top-[45%] left-[12%] w-[350px] h-[350px] bg-[#AFBF41]/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.3, 1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 4 - Middle right */}
        <motion.div
          className="absolute top-[50%] right-[15%] w-[320px] h-[320px] bg-[#AFBF41]/25 rounded-full blur-2xl"
          animate={{
            x: [0, -45, 30, 0],
            y: [0, 35, -25, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 5 - Bottom left */}
        <motion.div
          className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-[#AFBF41]/22 rounded-full blur-3xl"
          animate={{
            x: [0, 35, -25, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 1.1, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 6 - Bottom right */}
        <motion.div
          className="absolute bottom-[15%] right-[10%] w-[360px] h-[360px] bg-[#AFBF41]/18 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 30, -35, 0],
            scale: [1, 1.1, 1.3, 1],
          }}
          transition={{
            duration: 9.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 7 - Center-ish */}
        <motion.div
          className="absolute top-[35%] left-[40%] w-[280px] h-[280px] bg-[#AFBF41]/15 rounded-full blur-2xl"
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Orb 8 - Far right */}
        <motion.div
          className="absolute top-[60%] right-[5%] w-[300px] h-[300px] bg-[#AFBF41]/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 25, 0],
            y: [0, 35, -20, 0],
            scale: [1, 1.2, 1, 1],
          }}
          transition={{
            duration: 10.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative max-w-4xl mx-auto text-center"
        style={{
          opacity: shouldReduceMotion ? 1 : contentOpacity,
          scale: shouldReduceMotion ? 1 : contentScale,
          y: shouldReduceMotion ? 0 : contentY,
          transform: 'translateZ(0)'
        }}
      >
        {/* Main Headline with staggered word animation */}
        <motion.h1
          className="text-2xl font-normal text-black mb-3 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {shouldReduceMotion ? (
            "Cooking has become cognitively expensive."
          ) : (
            <>
              {"Cooking has become cognitively expensive.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
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
          className="text-base md:text-lg text-black"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1] as const
          }}
        >
          Budi provides the infrastructure to make it easy.
        </motion.p>
      </motion.div>
    </section>
  );
}
