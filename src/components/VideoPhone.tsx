import { useEffect, useRef } from 'react';

interface VideoPhoneProps {
  videoSrc: string;
  alt?: string;
}

export default function VideoPhone({ videoSrc, alt = "App demo" }: VideoPhoneProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div className="relative w-full max-w-sm mx-auto">
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
    </div>
  );
}
