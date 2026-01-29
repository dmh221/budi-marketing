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
      {/* iPhone Frame */}
      <div className="relative">
        {/* Phone outer shell */}
        <div className="relative aspect-[9/19.5] bg-black rounded-[3rem] p-3 shadow-2xl">
          {/* Screen bezel */}
          <div className="relative h-full bg-white rounded-[2.5rem] overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-10" />

            {/* Video Content */}
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 w-full h-full object-cover"
              loop
              muted
              playsInline
              aria-label={alt}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
