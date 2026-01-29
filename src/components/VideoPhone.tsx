import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface VideoPhoneProps {
  videoSrc: string;
  alt?: string;
}

export default function VideoPhone({ videoSrc, alt = "App demo" }: VideoPhoneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play the video when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay was prevented, that's okay
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      className="relative w-full max-w-[280px] xs:max-w-[320px] sm:max-w-sm mx-auto"
      initial={{ filter: 'drop-shadow(0 0px 0px rgba(175, 191, 65, 0))' }}
      whileHover={shouldReduceMotion ? {} : {
        scale: 1.02,
        y: -8,
        filter: 'drop-shadow(0 20px 40px rgba(175, 191, 65, 0.15))',
        transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }
      }}
      style={{ transform: 'translateZ(0)' }}
    >
      {/* iPhone 17 Frame - Using Exact Figma Asset */}
      <div className="relative aspect-[393/852]">
        {/* Video Content - positioned to fit within the screen area */}
        <div className="absolute inset-0" style={{ padding: '12px' }}>
          <div className="relative h-full" style={{ paddingTop: '35px', paddingBottom: '8px' }}>
            <video
              ref={videoRef}
              src={videoSrc}
              className="w-full h-full object-cover rounded-[40px]"
              loop
              muted
              playsInline
              aria-label={alt}
            />
          </div>
        </div>

        {/* Figma iPhone 17 Frame Overlay */}
        <img
          src="/assets/iPhone 17.png"
          alt=""
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ zIndex: 10 }}
        />
      </div>
    </motion.div>
  );
}
