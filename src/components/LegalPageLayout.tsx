import { type ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-xl font-bold text-black mb-4 pt-24 uppercase">
        {title}
      </h1>
      {lastUpdated && (
        <p className="text-xs text-secondary mb-12">Last updated: {lastUpdated}</p>
      )}
      <div className="space-y-12">
        {children}
      </div>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: SectionProps) {
  return (
    <section>
      <h2 className="text-base font-semibold text-black mb-4 uppercase">
        {title}
      </h2>
      <div className="space-y-4 text-secondary leading-relaxed text-justify text-sm">
        {children}
      </div>
    </section>
  );
}
