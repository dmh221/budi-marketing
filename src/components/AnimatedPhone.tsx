import type { ReactNode } from 'react';

interface AnimatedPhoneProps {
  children: ReactNode;
  className?: string;
}

export default function AnimatedPhone({ children, className = '' }: AnimatedPhoneProps) {
  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      {/* Phone Frame */}
      <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-3xl z-10" />

        {/* Screen */}
        <div className="relative bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
          {/* Status Bar */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-background z-10 flex items-center justify-between px-6 text-xs text-text-primary">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 bg-text-primary rounded-sm" />
              <div className="w-4 h-3 bg-text-primary rounded-sm" />
              <div className="w-4 h-3 bg-text-primary rounded-sm" />
            </div>
          </div>

          {/* Content */}
          <div className="pt-10 h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
